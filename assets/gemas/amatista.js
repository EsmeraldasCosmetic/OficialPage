import { stockLimit, stockLabel } from "./inventario.js";
import { publicImage } from "./onix.js";
import { findTones } from "./zafiro.js";
export const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export const swatch = (t) =>
  t.hex && /^#[0-9a-f]{6}$/i.test(t.hex)
    ? `background:${t.hex}`
    : "background:linear-gradient(135deg,#e7d3c9,#faf5ef)";
export function cardSwatches(p) {
  if (!p.tonos?.length) return "";
  return `<div class="card-swatches" aria-label="Tonos de ${esc(p.nombre)}">${p.tonos
    .slice(0, 5)
    .map(
      (t) =>
        `<button data-product="${esc(p.key)}" data-variant-id="${esc(t.id)}" style="${swatch(t)}" aria-label="Ver tono ${esc(t.nombre)}" title="${esc(t.nombre)}"></button>`,
    )
    .join(
      "",
    )}${p.tonos.length > 5 ? `<button class="more-swatches" data-product="${esc(p.key)}" aria-label="Ver los ${p.tonos.length} tonos">+${p.tonos.length - 5}</button>` : ""}</div>`;
}
export function toneButtons(p, query = "", selected = "") {
  const tones = findTones(p, query);
  return tones.length
    ? tones
        .map(
          (t) =>
            `<button type="button" data-tone="${p.tonos.indexOf(t)}" class="tone-option ${stockLimit(p, t) === 0 ? "soldout" : ""}" aria-pressed="${t.id === selected}" ${stockLimit(p, t) === 0 ? "disabled" : ""}><span class="tone-dot" style="${swatch(t)}"></span><span class="tone-name">${esc(t.nombre)}${t.sku ? `<small>${esc(t.sku)}</small>` : ""}</span>${stockLimit(p, t) === 0 ? "<small>Agotado</small>" : ""}<span class="tone-tick" aria-hidden="true">✓</span></button>`,
        )
        .join("")
    : '<p class="tone-empty">No encontramos ese tono. Prueba otro nombre o código.</p>';
}
export function productDetail(p, money, price) {
  const gallery = [
    ...new Set([p.thumbnail || p.imagenes[0], ...(p.tonos || []).map(t=>t.imagen), ...p.imagenes].filter(Boolean)),
  ];
  return `<div class="detail-gallery"><div class="photo-stage"><img id="detail-image" src="${esc(publicImage(gallery[0]))}" alt="${esc(p.nombre)}" width="600" height="600"><span class="photo-label">${esc(p.marca || "Esmeralda’s Cosmetic")}</span></div><p id="image-caption" class="image-caption-detail">Imagen general del producto</p><div class="thumbnails" aria-label="Galería de producto">${gallery.map((src, i) => `<button data-image="${esc(publicImage(src))}" aria-label="Ver imagen ${i + 1} del producto" aria-pressed="${i === 0}"><img src="${esc(publicImage(src))}" alt="" loading="lazy" width="64" height="64"></button>`).join("")}</div><div class="detail-service"><span>◇ Seleccionado para ti</span><span>↗ Envíos a Guatemala</span></div></div><div class="detail-copy"><div class="detail-overline"><p class="eyebrow">${esc(p.marca || p.categoria)}</p><span>${esc(p.categoria)}</span></div><h2 id="product-title">${esc(p.nombre)}</h2><div class="detail-price-line"><p class="detail-price">${price === null ? "Precio por confirmar" : money(price)}</p><span>GTQ</span></div><p class="availability">${p.tonos?.length ? "Elige un tono para consultar sus existencias." : stockLabel(p)}</p>${p.tonos?.length ? `<section class="tone-selector" aria-labelledby="tone-heading"><div class="tone-heading"><h3 id="tone-heading">Encuentra tu tono</h3><span>${p.tonos.length} opciones</span></div><label class="tone-search"><span aria-hidden="true">⌕</span><input type="search" id="tone-search" autocomplete="off" placeholder="Busca por nombre, color o código" aria-label="Buscar tonos de este producto"></label><div class="tone-list" id="tone-list">${toneButtons(p)}</div><p id="tone-result-count" class="sr-only" aria-live="polite">${p.tonos.length} tonos</p><div class="selected-tone-card" id="selected-tone-card" role="status"><span class="selected-marker">◇</span><div><strong id="selected-tone">Elige el que va contigo</strong><p id="selected-tone-description">Selecciona un tono para agregarlo a tu pedido.</p></div></div><p class="tone-disclaimer">Las muestras de color son orientativas y pueden variar en pantalla.</p></section>` : ""}<p id="product-feedback" class="product-feedback" role="status"></p><div class="add-row"><div class="stepper"><button type="button" data-step="-1" aria-label="Reducir cantidad">−</button><label><span class="sr-only">Cantidad</span><input id="product-quantity" aria-label="Cantidad" type="number" min="1" max="99" value="1" inputmode="numeric"></label><button type="button" data-step="1" aria-label="Aumentar cantidad">+</button></div><button class="button dark" data-action="add" ${!p.tonos?.length && stockLimit(p) === 0 ? "disabled" : ""}>${p.tonos?.length ? "Selecciona tu tono" : stockLimit(p) === 0 ? "Agotado" : "Agregar a mi pedido"} <span>+</span></button></div><div class="product-assistance"><a href="https://wa.me/50235739640?text=${encodeURIComponent("¡Hola! ¿Me ayudan a elegir " + p.nombre + "?")}" target="_blank" rel="noopener noreferrer">¿Necesitas ayuda para elegir? ↗</a><button class="text-link share-link" data-action="share">Compartir producto ↗</button></div><details class="product-description"><summary>Sobre este producto <span>+</span></summary><p>${esc(p.descripcion || "Consulta los detalles con nuestro equipo.")}</p></details><details class="product-description"><summary>Compra y entrega <span>+</span></summary><p>Arma tu pedido y envíalo por WhatsApp. Confirmaremos tonos, disponibilidad, total y envío antes de finalizar la compra. También puedes visitarnos en Coatepeque.</p></details></div>`;
}
