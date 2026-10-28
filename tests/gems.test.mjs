import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, mkdtempSync, rmSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  safeImage,
  sanitizeProduct,
  validateCatalog,
  publicCatalog,
} from "../assets/gemas/onix.js";
import { findTones } from "../assets/gemas/zafiro.js";
import { filterProducts, validCart, itemPrice } from "../assets/store.js";
import { openDatabase } from "../scripts/gemas/esmeralda.mjs";
const products = JSON.parse(readFileSync("data/products.json", "utf8"));
test("La exportación de Pages omite borradores y metadatos de revisión", () => {
  const p = products.find((p) => p.tonos?.length);
  const result = publicCatalog([
    { ...p, version: 5 },
    { ...products[0], key: 'test-draft-publication', status: "draft", tonos: null },
  ]);
  assert.equal(result.length, 1);
  assert.equal("version" in result[0], false);
  assert.equal("review" in result[0].tonos[0], false);
});
test("Ónix bloquea rutas y protocolos peligrosos", () => {
  for (const url of [
    "javascript:alert(1)",
    "data:image/svg+xml,bad",
    "http://example.com/a.png",
    "//evil.com/x",
    "assets/../../.private/a.png",
    "assets/%2e%2e/x.png",
    "https://www.beautycreationscosmetics.com.evil.test/a.png",
    "https://user:pass@cdn.shopify.com/a.png",
  ])
    assert.equal(safeImage(url), false, url);
  assert.equal(safeImage("assets/images/tonos/a.webp"), true);
});
test("Ónix rechaza importaciones malformadas sin aceptar precios negativos ni claves duplicadas", () => {
  const p = structuredClone(products[0]);
  assert.throws(() => validateCatalog([p, p]), /duplicada/);
  assert.throws(() => sanitizeProduct({ ...p, precio: -1 }), /Precio/);
  assert.throws(() => sanitizeProduct({ ...p, precio: "Q 10foo" }), /Precio/);
  assert.throws(
    () => sanitizeProduct({ ...p, thumbnail: "javascript:alert(1)" }),
    /Imagen/,
  );
  const v = structuredClone(products.find((p) => p.tonos?.length));
  v.tonos.push({ ...v.tonos[0] });
  assert.throws(() => sanitizeProduct(v), /únicos/);
});
test("Zafiro encuentra tonos por nombre, SKU y sinónimos", () => {
  const balm = products.find((p) => p.key === "labios-2");
  assert.equal(findTones(balm, "coco")[0].nombre, "Coconut");
  assert.equal(findTones(balm, "BCBNC-LB05")[0].nombre, "Cherry");
  assert.ok(
    filterProducts(products, { query: "Goal Digger" }).some(
      (p) => p.key === "labios-11",
    ),
  );
  assert.equal(findTones(balm, "zzsincoincidencia").length, 0);
});
test("El carrito migra nombres anteriores, rechaza agotados y usa el precio por variante", () => {
  const p = structuredClone(products.find((p) => p.key === "labios-11")),
    tone = p.tonos.find((t) => t.nombre === "Goal Digger");
  tone.price = 99;
  const raw = [{ key: p.key, tone: "#2 Gold Digger", quantity: 2 }];
  const clean = validCart(raw, [p]);
  assert.equal(clean[0].variantId, tone.id);
  assert.equal(clean[0].tone, "Goal Digger");
  assert.equal(itemPrice(p, clean[0]), 99);
  tone.availability = "soldout";
  assert.equal(validCart(raw, [p]).length, 0);
});
test("Esmeralda guarda, detecta conflictos, restaura historial y exporta solo activos", () => {
  const folder = mkdtempSync(join(tmpdir(), "esmeralda-test-")),
    database = openDatabase(join(folder, "test.sqlite"));
  try {
    assert.equal(database.list().length, products.length);
    const original = database.list()[0];
    const edited = database.save({
      ...original,
      nombre: "Producto de prueba",
      precio: 15.99,
    });
    assert.equal(edited.version, original.version + 1);
    assert.equal(edited.precio, 15.99);
    assert.throws(
      () => database.save({ ...original, nombre: "Edición atrasada" }),
      /otra pestaña/,
    );
    const revision = database.revisions(original.key)[0];
    const restored = database.restore(
      original.key,
      revision.id,
      edited.version,
    );
    assert.equal(restored.nombre, original.nombre);
    database.save({ ...restored, status: "draft" });
    const path = join(folder, "public.json");
    assert.equal(database.export(path), products.length - 1);
    assert.equal(
      JSON.parse(readFileSync(path)).some((p) => p.key === original.key),
      false,
    );
    assert.ok(existsSync(database.backup()));
  } finally {
    database.close();
    rmSync(folder, { recursive: true, force: true });
  }
});
test("Importación transaccional: una variante duplicada no deja cambios parciales", () => {
  const folder = mkdtempSync(join(tmpdir(), "esmeralda-atomic-")),
    database = openDatabase(join(folder, "test.sqlite"));
  try {
    const all = database.list(),
      p = all.find((p) => p.tonos?.length),
      other = all.find((x) => x.key !== p.key && x.tonos?.length);
    const changed = {
      ...other,
      nombre: "No debe guardarse",
      tonos: [{ ...other.tonos[0], id: p.tonos[0].id }],
    };
    assert.throws(() => database.import([changed]));
    assert.equal(
      database.list().find((x) => x.key === other.key).nombre,
      other.nombre,
    );
  } finally {
    database.close();
    rmSync(folder, { recursive: true, force: true });
  }
});
