import { productMatches, resolveTone, variantPrice } from "./gemas/zafiro.js";
import { stockLimit } from "./gemas/inventario.js";
export function priceOf(product) {
  if (typeof product.precio === "number")
    return Number.isFinite(product.precio) ? product.precio : null;
  const text = String(product.precio ?? "").replace(/,/g, "");
  const match = text.match(/\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}
export const money = (value) =>
  new Intl.NumberFormat("es-GT", {
    style: "currency",
    currency: "GTQ",
    minimumFractionDigits: 2,
  }).format(value);
export const normalize = (value) =>
  String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export const isCollab = (p) =>
  [p.colaboracion, p.esColaboracion, p.collab, p.isCollab].some((v) =>
    ["true", "si", "sí", "yes", "1"].includes(String(v).toLowerCase()),
  );
export function filterProducts(
  products,
  {
    category = "",
    query = "",
    brand = "",
    sort = "featured",
    minPrice = "",
    maxPrice = "",
    variantsOnly = false,
  } = {},
) {
  const result = products.filter(
    (p) =>
      (!category ||
        (category === "collabs" ? isCollab(p) : p._ecSection === category)) &&
      (!brand || p.marca === brand) &&
      (!p.status || p.status === "active") &&
      productMatches(p, query) &&
      (!variantsOnly || p.tonos?.length > 0) &&
      (minPrice === "" ||
        (priceOf(p) !== null && priceOf(p) >= Number(minPrice))) &&
      (maxPrice === "" ||
        (priceOf(p) !== null && priceOf(p) <= Number(maxPrice))),
  );
  if (sort === "price-up")
    result.sort((a, b) => (priceOf(a) ?? Infinity) - (priceOf(b) ?? Infinity));
  if (sort === "price-down")
    result.sort(
      (a, b) => (priceOf(b) ?? -Infinity) - (priceOf(a) ?? -Infinity),
    );
  if (sort === "name")
    result.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
  return result;
}
export function validCart(raw, products) {
  if (!Array.isArray(raw)) return [];
  const clean = raw
    .slice(0, 200)
    .filter((item) => {
      const p = products.find((p) => p.key === item?.key);
      return (
        p &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0 &&
        item.quantity <= 99 &&
        typeof item.tone === "string" &&
        (p.tonos?.length
          ? resolveTone(p, item)?.availability !== "soldout" &&
            !!resolveTone(p, item)
          : item.tone === "")
      );
    })
    .map((item) => {
      const p = products.find((p) => p.key === item.key),
        t = resolveTone(p, item);
      return {
        key: p.key,
        variantId: t?.id || "",
        tone: t?.nombre || "",
        quantity: item.quantity,
      };
    });
  const merged = [];
  for (const item of clean) {
    const existing = merged.find(
      (i) => i.key === item.key && i.variantId === item.variantId,
    );
    if (existing)
      existing.quantity = Math.min(99, existing.quantity + item.quantity);
    else merged.push(item);
  }
  return merged.map((item) => {
    const product = products.find((p) => p.key === item.key);
    return { ...item, quantity: Math.min(item.quantity, stockLimit(product, resolveTone(product, item))) };
  }).filter((item) => item.quantity > 0);
}
export function itemPrice(p, item) {
  const t = resolveTone(p, item);
  return priceOf({ ...p, precio: variantPrice(p, t) });
}
export function orderMessage(cart, products) {
  let total = 0,
    unknown = false;
  const lines = cart.map((item) => {
    const p = products.find((p) => p.key === item.key);
    const price = itemPrice(p, item);
    if (price === null) unknown = true;
    else total += price * item.quantity;
    return `• ${item.quantity} × ${p.nombre}${item.tone ? ` — Tono: ${item.tone}` : ""} (${price === null ? "precio por confirmar" : money(price * item.quantity)})`;
  });
  return `¡Hola, Esmeralda's Cosmetic! Me gustaría consultar este pedido:\n\n${lines.join("\n")}\n\nSubtotal de productos con precio: ${money(total)}${unknown ? "\nHay productos con precio por confirmar." : ""}\n¿Me confirman disponibilidad, total y envío?`;
}
