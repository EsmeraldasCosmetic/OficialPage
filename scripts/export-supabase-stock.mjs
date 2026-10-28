import { readFile } from "node:fs/promises";

const sqlString = (value) => `'${String(value).replaceAll("'", "''")}'`;
const stockValue = (product, tone = null) => {
  if (tone?.availability === "soldout") return 0;
  const value = tone ? tone.stock : product.stock;
  if (value === null || value === undefined || value === "") return null;
  if (!Number.isSafeInteger(value) || value < 0 || value > 1000000) {
    throw new Error(`Existencias inválidas en ${product.key}${tone ? ` / ${tone.nombre}` : ""}.`);
  }
  return value;
};

const products = JSON.parse(await readFile(new URL("../data/products.json", import.meta.url), "utf8"));
const statements = ["begin;"];

for (const product of products) {
  const section = product._ecSection;
  const id = String(product.id);
  if (product.tonos?.length) {
    statements.push(`update public.productos set stock = null where seccion = ${sqlString(section)} and id = ${sqlString(id)};`);
    for (const tone of product.tonos) {
      const stock = stockValue(product, tone);
      statements.push(
        `update public.producto_tonos set stock = ${stock === null ? "null" : stock} where seccion = ${sqlString(section)} and producto_id = ${sqlString(id)} and nombre = ${sqlString(tone.nombre)};`,
      );
    }
  } else {
    const stock = stockValue(product);
    statements.push(
      `update public.productos set stock = ${stock === null ? "null" : stock} where seccion = ${sqlString(section)} and id = ${sqlString(id)};`,
    );
  }
}

statements.push("commit;");
process.stdout.write(`${statements.join("\n")}\n`);
