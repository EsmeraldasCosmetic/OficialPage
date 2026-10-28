// Una cantidad desconocida es null; nunca se convierte en cero ni se inventa.
export function stockValue(value) {
  if (value === null || value === undefined || value === "") return null;
  const n = Number(value);
  if (typeof value === "boolean" || !Number.isSafeInteger(n) || n < 0 || n > 1000000) throw Error("Las existencias deben ser un entero entre 0 y 1000000, o dejarse vacías.");
  return n;
}
export function stockLimit(product, tone) {
  if (product.tonos?.length && !tone) return 0;
  const item = tone || product;
  if (item.stock === 0 || item.availability === "soldout") return 0;
  return Math.min(99, stockValue(item.stock) ?? 99);
}
export function stockLabel(item) {
  if (item?.availability === "soldout" || item?.stock === 0) return "Agotado";
  const n = stockValue(item?.stock);
  return n === null ? "Disponibilidad por confirmar" : `Disponible · ${n} ${n === 1 ? "unidad" : "unidades"}`;
}
