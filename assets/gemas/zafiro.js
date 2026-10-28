import { normalizeText } from "./onix.js";
const aliases = {
  rojo: ["red", "cherry", "cereza"],
  rosa: ["pink", "rose", "rosado"],
  nude: ["beige", "natural", "almond"],
  marron: ["brown", "cafe", "chocolate", "cocoa"],
  malva: ["mauve"],
  morado: ["purple", "violet", "grape"],
  dorado: ["gold", "golden"],
  negro: ["black"],
  blanco: ["white"],
  transparente: ["clear", "translucent"],
  coco: ["coconut"],
  frambuesa: ["raspberry"],
  vainilla: ["vanilla"],
};
export function matchesQuery(text, query) {
  const hay = normalizeText(text),
    tokens = normalizeText(query).split(" ").filter(Boolean);
  return tokens.every((token) => {
    const group = Object.entries(aliases).find(
      ([key, values]) => key === token || values.includes(token),
    );
    return [token, ...(group ? [group[0], ...group[1]] : [])].some((word) =>
      hay.includes(word),
    );
  });
}
export function toneText(t) {
  return [t.nombre, t.sku, t.descripcion, ...(t.aliases || [])].join(" ");
}
export function findTones(product, query = "") {
  return (product.tonos || []).filter((t) => matchesQuery(toneText(t), query));
}
export function productMatches(product, query) {
  return matchesQuery(
    [
      product.nombre,
      product.marca,
      product.categoria,
      product.key,
      ...(product.tonos || []).map(toneText),
    ].join(" "),
    query,
  );
}
export function resolveTone(product, item) {
  return (product.tonos || []).find((t) =>
    item.variantId
      ? t.id === item.variantId
      : t.nombre === item.tone || (t.aliases || []).includes(item.tone),
  );
}
export function variantPrice(product, tone) {
  return tone?.price ?? product.precio;
}
