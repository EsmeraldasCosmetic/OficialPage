import { mkdir, cp, copyFile, rm, writeFile, readdir } from "node:fs/promises";
import { validateFile } from "./validate.mjs";
import { publicCatalog } from "../assets/gemas/onix.js";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { validatePublicConfig } from "../assets/js/productos/supabase-client.js";
const configContext = { window: {} };
vm.runInNewContext(await readFile("assets/js/productos/supabase-config.js", "utf8"), configContext, { timeout: 1000 });
const publicConfig = configContext.window.EC_SUPABASE_CONFIG;
// El marcador permite publicar el catálogo local; una clave real debe ser pública.
if (publicConfig?.publishableKey !== "PEGAR_AQUI_LA_PUBLISHABLE_KEY") validatePublicConfig(publicConfig);
const products = publicCatalog(await validateFile());
if (!products.length) throw Error("No hay productos activos para publicar");
await rm("dist", { recursive: true, force: true });
await mkdir("dist");
await cp("assets", "dist/assets", { recursive: true });
await mkdir("dist/data");
// Lista explícita: ninguna base, copia privada ni archivo de administración se publica.
await writeFile(
  "dist/data/products.json",
  JSON.stringify(products, null, 2) + "\n",
);
// Solo las subidas utilizadas por productos activos se sirven en Pages.
const usedImages = new Set(
  products.flatMap((p) => [
    p.thumbnail,
    ...p.imagenes,
    ...(p.tonos || []).map((t) => t.imagen),
  ]),
);
for (const name of await readdir("dist/assets/images/uploads").catch(() => []))
  if (!usedImages.has("assets/images/uploads/" + name))
    await rm("dist/assets/images/uploads/" + name);
for (const file of ["index.html", "404.html", "robots.txt", ".nojekyll"])
  await copyFile(file, `dist/${file}`);
// Mantiene accesibles los enlaces de la versión anterior en GitHub Pages.
for (const page of [
  "rostro",
  "ojos",
  "labios",
  "skincare",
  "cuerpo",
  "accesorios",
  "collabs",
  "contacto",
  "preguntas",
  "nuestrahistoria",
  "producto",
])
  await copyFile("index.html", `dist/${page}.html`);
console.log(`Sitio listo en dist/ · ${products.length} productos`);
