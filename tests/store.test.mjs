import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import {
  priceOf,
  filterProducts,
  validCart,
  orderMessage,
} from "../assets/store.js";
const products = JSON.parse(
  await readFile(new URL("../data/products.json", import.meta.url), "utf8"),
);
test("El catálogo tiene productos con claves únicas y archivos locales válidos", async () => {
  assert.ok(products.length > 0);
  assert.equal(new Set(products.map((p) => p.key)).size, products.length);
  for (const p of products) {
    assert.ok(p.nombre && p._ecSection);
    if (p.thumbnail)
      await access(new URL("../" + p.thumbnail, import.meta.url));
  }
});
test("Los precios ausentes no se convierten en productos gratuitos", () => {
  assert.equal(priceOf({ precio: "Q 1,250.50" }), 1250.5);
  assert.equal(priceOf({}), null);
  assert.equal(priceOf({ precio: "Consultar" }), null);
});
test("Búsqueda sin acentos y filtros combinados", () => {
  const result = filterProducts(products, {
    category: "labios",
    query: "balsamo",
  });
  assert.ok(result.length > 0);
  assert.ok(result.every((p) => p._ecSection === "labios"));
  assert.equal(
    filterProducts(products, { query: "no-existe-98765" }).length,
    0,
  );
});
test("Los precios sin confirmar aparecen al final al ordenar", () => {
  const source = [
    { nombre: "Sin precio" },
    { nombre: "B", precio: "Q 20" },
    { nombre: "A", precio: "Q 10" },
  ];
  assert.deepEqual(
    filterProducts(source, { sort: "price-up" }).map((p) => p.nombre),
    ["A", "B", "Sin precio"],
  );
  assert.deepEqual(
    filterProducts(source, { sort: "price-down" }).map((p) => p.nombre),
    ["B", "A", "Sin precio"],
  );
});
test("El pedido restaura solamente productos, cantidades y tonos válidos", () => {
  const p = products.find((p) => p.tonos?.length);
  const item = { key: p.key, tone: p.tonos[0].nombre, quantity: 2 };
  assert.deepEqual(
    validCart(
      [
        item,
        { ...item, quantity: -2 },
        { ...item, tone: "inexistente" },
        { ...item, key: "eliminado" },
      ],
      products,
    ),
    [{ ...item, variantId: p.tonos[0].id }],
  );
  assert.deepEqual(validCart({}, products), []);
});
test("El mensaje de WhatsApp contiene tono, cantidad y subtotal sin inventar precios", () => {
  const list = [
    { key: "a", nombre: "Labial", precio: "Q 50" },
    { key: "b", nombre: "Brocha" },
  ];
  const message = orderMessage(
    [
      { key: "a", tone: "Rosa", quantity: 2 },
      { key: "b", tone: "", quantity: 1 },
    ],
    list,
  );
  assert.match(message, /2 × Labial — Tono: Rosa/);
  assert.match(message, /100\.00/);
  assert.match(message, /precio por confirmar/);
  assert.match(message, /disponibilidad/);
});
