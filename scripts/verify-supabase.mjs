import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { createCatalogClient } from "../assets/js/productos/supabase-client.js";

try {
  const context = { window: {} };
  vm.runInNewContext(await readFile(new URL("../assets/js/productos/supabase-config.js", import.meta.url), "utf8"), context, { timeout: 1000 });
  const client = createCatalogClient(context.window.EC_SUPABASE_CONFIG);
  for (const result of await client.verify()) console.log(`${result.table}: lectura REST aceptada`);
  console.log("La API acepta esta combinación de URL y clave. Esto NO prueba que RLS o la visibilidad de los datos sean correctos; revisa docs/SUPABASE.md.");
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
