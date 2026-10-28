// Ónix: validación compartida. Nunca interpreta HTML ni ejecuta datos importados.
import { stockValue } from "./inventario.js";
export const SECTIONS = [
  "rostro",
  "ojos",
  "labios",
  "skincare",
  "cuerpo",
  "accesorios",
];
export const PLACEHOLDER = "assets/brand/product-placeholder.svg";
export const normalizeText = (value) =>
  String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
export function safeImage(value) {
  if (
    typeof value !== "string" ||
    value.length > 2000 ||
    /[\x00-\x20\\<>"']/.test(value)
  )
    return false;
  if (/^assets\/[a-zA-Z0-9_./%-]+$/.test(value)) {
    try {
      return (
        !decodeURIComponent(value)
          .split("/")
          .some((p) => p === ".." || p === ".") &&
        /\.(webp|png|jpe?g|gif|svg)$/i.test(value)
      );
    } catch {
      return false;
    }
  }
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      [
        "www.beautycreationscosmetics.com",
        "beautycreationscosmetics.com",
        "beautycreationscosmetics.com.mx",
        "res.cloudinary.com",
        "cdn.shopify.com",
        "www.italiadeluxe.com",
        "italiadeluxe.com",
        "www.moirabeauty.com",
        "moirabeauty.com",
        "italiadeluxemakeup.com",
        "www.prosanatural.com",
        "zoharacosmeticos.com.mx",
        "ikatehouse.com",
        "dubellay.mx",
        "beautysupplyhn.com",
        "ximeskin.com",
        "lucesbeautiful.com",
      ].includes(url.hostname)
    );
  } catch {
    return false;
  }
}
export function publicImage(value) {
  return safeImage(value) ? value : PLACEHOLDER;
}
export function sanitizeProduct(input) {
  if (!input || typeof input !== "object" || Array.isArray(input))
    throw Error("Producto inválido");
  const text = (v, max = 200) =>
    String(v ?? "")
      .trim()
      .slice(0, max);
  const key = text(input.key, 100);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key))
    throw Error("La clave solo admite letras minúsculas, números y guiones");
  if (!SECTIONS.includes(input._ecSection)) throw Error("Categoría no válida");
  const nombre = text(input.nombre);
  if (!nombre) throw Error("El nombre es obligatorio");
  const price =
    input.precio === null || input.precio === undefined || input.precio === ""
      ? null
      : Number(String(input.precio).replace(/^Q\s*/i, "").replace(/,/g, ""));
  if (
    price !== null &&
    (!Number.isFinite(price) ||
      price < 0 ||
      price > 100000 ||
      Math.abs(price * 100 - Math.round(price * 100)) > 0.00001)
  )
    throw Error(
      "Precio inválido; usa un número positivo con hasta dos decimales",
    );
  const status = input.status ?? "active";
  if (!["active", "draft", "archived"].includes(status))
    throw Error("Estado no válido");
  const thumbnail = text(
    input.thumbnail || input.imagenes?.[0] || PLACEHOLDER,
    2000,
  );
  if (!safeImage(thumbnail)) throw Error("Imagen principal no permitida");
  if (!Array.isArray(input.imagenes) || input.imagenes.length > 150)
    throw Error("Galería inválida (máximo 150 imágenes)");
  const imagenes = [...new Set(input.imagenes)];
  if (imagenes.some((i) => !safeImage(i)))
    throw Error("La galería contiene una dirección de imagen no permitida");
  const raw = input.tonos ?? [];
  if (!Array.isArray(raw) || raw.length > 150)
    throw Error("Variantes inválidas (máximo 150)");
  const names = new Set(),
    ids = new Set();
  const tonos = raw.map((t, index) => {
    if (!t || typeof t !== "object") throw Error("Tono inválido");
    const nombre = text(t.nombre, 100),
      id = text(t.id || `${key}-v${String(index + 1).padStart(3, "0")}`, 140);
    if (!nombre || names.has(normalizeText(nombre)))
      throw Error("Los tonos necesitan nombres únicos");
    names.add(normalizeText(nombre));
    if (!/^[a-z0-9-]+$/.test(id) || ids.has(id))
      throw Error("Identificador de tono inválido o repetido");
    ids.add(id);
    const hex = text(t.hex, 10);
    if (hex && !/^#[0-9a-f]{6}$/i.test(hex))
      throw Error(`Color inválido en ${nombre}; usa #RRGGBB`);
    const imagen = text(t.imagen, 2000);
    if (imagen && !safeImage(imagen))
      throw Error(`Imagen no permitida en ${nombre}`);
    const availability = t.availability ?? "consult";
    if (!["consult", "available", "soldout"].includes(availability))
      throw Error("Disponibilidad inválida");
    const review = t.review ?? (imagen ? "inherited" : "pending");
    if (!["verified", "inherited", "pending"].includes(review))
      throw Error("Revisión de tono inválida");
    const variantPrice =
      t.price === null || t.price === undefined || t.price === ""
        ? null
        : Number(t.price);
    if (
      variantPrice !== null &&
      (!Number.isFinite(variantPrice) ||
        variantPrice < 0 ||
        variantPrice > 100000 ||
        Math.abs(variantPrice * 100 - Math.round(variantPrice * 100)) > 0.00001)
    )
      throw Error("Precio de variante inválido");
    return {
      id,
      nombre,
      hex,
      imagen,
      descripcion: text(t.descripcion || t.tono, 500),
      aliases: Array.isArray(t.aliases)
        ? [
            ...new Set(t.aliases.map((a) => text(a, 100)).filter(Boolean)),
          ].slice(0, 20)
        : [],
      sku: text(t.sku, 100),
      stock: stockValue(t.stock),
      availability,
      review,
      price: variantPrice,
    };
  });
  return {
    key,
    id: input.id ?? key,
    _ecSection: input._ecSection,
    nombre,
    marca: text(input.marca, 120),
    categoria: text(input.categoria, 120),
    precio: price,
    stock: stockValue(input.stock),
    thumbnail,
    imagenes,
    descripcion: text(input.descripcion, 20000),
    tag: text(input.tag, 50),
    colaboracion: [true, "true", "si", "sí", "1"].includes(input.colaboracion),
    status,
    version:
      Number.isSafeInteger(input.version) && input.version >= 0
        ? input.version
        : 0,
    tonos: tonos.length ? tonos : null,
  };
}
export function validateCatalog(input) {
  if (!Array.isArray(input) || !input.length || input.length > 5000)
    throw Error("Importa una lista de 1 a 5000 productos");
  const keys = new Set(),
    variants = new Set();
  return input.map((p) => {
    const product = sanitizeProduct(p);
    if (keys.has(product.key)) throw Error("Clave duplicada: " + product.key);
    keys.add(product.key);
    for (const t of product.tonos || []) {
      if (variants.has(t.id))
        throw Error("Clave de variante duplicada: " + t.id);
      variants.add(t.id);
    }
    return product;
  });
}
export function publicCatalog(input) {
  return validateCatalog(input)
    .filter((p) => p.status === "active")
    .map((p) => {
      const { version, ...publicProduct } = p;
      return {
        ...publicProduct,
        tonos:
          p.tonos?.map((t) => {
            const { review, ...publicTone } = t;
            return publicTone;
          }) || null,
      };
    });
}
