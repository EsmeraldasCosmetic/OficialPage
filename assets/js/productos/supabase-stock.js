import { createCatalogClient } from "./supabase-client.js";
import { stockValue } from "../../gemas/inventario.js";

const identity = (section, id, name) => JSON.stringify([String(section), String(id), ...(name === undefined ? [] : [String(name)])]);
function uniqueMap(rows, key) {
  const result = new Map();
  for (const row of rows) {
    const id = key(row);
    if (result.has(id)) throw Error("Inventario ambiguo: hay identificadores duplicados.");
    result.set(id, row);
  }
  return result;
}
export function applyRemoteStock(products, rows, tones) {
  const byProduct = uniqueMap(rows, (p) => identity(p.seccion, p.id));
  const byTone = uniqueMap(tones, (t) => identity(t.seccion, t.producto_id, t.nombre));
  return products.map((p) => {
    const row = byProduct.get(identity(p._ecSection, p.id));
    const active = row?.activo === true;
    return { ...p, stock: active ? stockValue(row.stock) : 0,
      tonos: p.tonos?.map((t) => {
        const remote = byTone.get(identity(p._ecSection, p.id, t.nombre));
        const stock = active && remote ? stockValue(remote.stock) : 0;
        return { ...t, stock, availability: stock === 0 ? "soldout" : stock === null ? "consult" : "available" };
      }) || null };
  });
}
export async function loadRemoteStock(products, config) {
  const client = createCatalogClient(config);
  async function all(table, select, order) {
    const rows = [];
    // Avanza por la cantidad recibida: también funciona con límites del servidor menores de 1000.
    while (rows.length <= 50000) {
      const page = await client.read(table, { select, order, limit: 1000, offset: rows.length });
      if (!page.length) return rows;
      rows.push(...page);
    }
    throw Error("Inventario demasiado grande para esta carga; revisa la paginación.");
  }
  const [rows, tones] = await Promise.all([
    all("productos", "seccion,id,activo,stock", "seccion.asc,id.asc"),
    all("producto_tonos", "seccion,producto_id,nombre,stock", "seccion.asc,producto_id.asc,nombre.asc"),
  ]);
  return applyRemoteStock(products, rows, tones);
}
