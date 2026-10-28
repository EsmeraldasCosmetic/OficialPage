import { readFile, access } from "node:fs/promises";
import { validateCatalog } from "../assets/gemas/onix.js";
export async function validateFile() {
  const products = validateCatalog(
    JSON.parse(await readFile("data/products.json", "utf8")),
  );
  for (const p of products) {
    for (const image of [
      p.thumbnail,
      ...p.imagenes,
      ...(p.tonos || []).map((t) => t.imagen),
    ].filter(Boolean))
      if (image.startsWith("assets/"))
        try {
          await access(image);
        } catch {
          throw Error(`${p.key}: no existe ${image}`);
        }
  }
  return products;
}
if (process.argv[1]?.endsWith("validate.mjs")) {
  const products = await validateFile();
  console.log(
    `Catálogo válido: ${products.length} productos y ${products.flatMap((p) => p.tonos || []).length} variantes.`,
  );
}
