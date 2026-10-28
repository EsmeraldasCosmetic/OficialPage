import { stockLimit, stockLabel } from "./gemas/inventario.js";
import { loadRemoteStock } from "./js/productos/supabase-stock.js";
import { campaignHero, campaigns, megaMenu } from "./gemas/perla.js";
import { publicImage, validateCatalog } from "./gemas/onix.js";
import { findTones, resolveTone, productMatches } from "./gemas/zafiro.js";
import { productDetail, toneButtons, cardSwatches } from "./gemas/amatista.js";
import {
  priceOf,
  itemPrice,
  money,
  filterProducts,
  validCart,
  orderMessage,
} from "./store.js";
const $ = (selector, parent = document) => parent.querySelector(selector);
const escape = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const icons = {
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/>',
  heart:
    '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  bag: '<path d="M5 7h14l1 14H4L5 7Z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  truck:
    '<path d="M2 5h12v12H2zM14 9h4l4 5v3h-8"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  sparkle: '<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z"/>',
  chat: '<path d="M21 11.5a9 9 0 0 1-13 8L3 21l1.5-5A9 9 0 1 1 21 11.5Z"/><path d="M8 9h8M8 13h5"/>',
};
const icon = (name) =>
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.sparkle}</svg>`;
document
  .querySelectorAll("[data-icon]")
  .forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
$("#year").textContent = new Date().getFullYear();
$(".header-search").insertAdjacentHTML(
  "beforeend",
  '<div id="search-suggestions" class="search-suggestions" aria-label="Sugerencias de búsqueda" hidden></div>',
);
const categories = [
  ["rostro", "Rostro", "Tu mejor lienzo"],
  ["ojos", "Ojos", "Miradas que hablan"],
  ["labios", "Labios", "Un toque de actitud"],
  ["skincare", "Skin care", "Tu momento de cuidado"],
  ["cuerpo", "Cuerpo", "Consiente tu piel"],
  ["accesorios", "Accesorios", "Los detalles importan"],
  ["collabs", "Collabs", "Combinaciones icónicas"],
];
const wa = (text) =>
  `https://wa.me/50235739640${text ? `?text=${encodeURIComponent(text)}` : ""}`;
const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};
let products = [],
  cart = [],
  favorites = [],
  currentProduct = null,
  selectedTone = "",
  currentPage = 1,
  lastFocus = null;
let catalogState = { category: "", query: "", brand: "", sort: "featured" };
const save = () => {
  try {
    localStorage.setItem("ec-cart-v1", JSON.stringify(cart));
    localStorage.setItem("ec-favorites-v1", JSON.stringify(favorites));
  } catch {
    /* La tienda sigue funcionando sin almacenamiento. */
  }
  updateCounts();
};
function updateCounts() {
  $("#bag-count").textContent = cart.reduce((n, i) => n + i.quantity, 0);
  $("#favorite-count").textContent = favorites.length;
  $("#favorite-count").hidden = !favorites.length;
}
let toastTimer;
function toast(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").classList.remove("visible"), 3200);
}
function imageOf(p) {
  return publicImage(p.thumbnail || p.imagenes?.[0]);
}
function card(p) {
  return `<article class="product-card"><div class="product-image"><button class="product-open" data-product="${escape(p.key)}" aria-label="Ver ${escape(p.nombre)}"><img src="${escape(imageOf(p))}" alt="${escape(p.nombre)}" loading="lazy" width="400" height="440"></button>${p.tag ? `<span class="product-tag">${escape(p.tag)}</span>` : ""}<button class="favorite-button ${favorites.includes(p.key) ? "is-favorite" : ""}" data-favorite="${escape(p.key)}" aria-label="Guardar ${escape(p.nombre)} en favoritos" aria-pressed="${favorites.includes(p.key)}">${icon("heart")}</button><button class="quick-add" data-product="${escape(p.key)}">Descubrir producto <span>+</span></button></div><div class="product-info"><p class="product-brand">${escape(p.marca || p.categoria || "Esmeralda’s Cosmetic")}</p><h3><button data-product="${escape(p.key)}">${escape(p.nombre)}</button></h3><div class="product-meta"><span>${priceOf(p) === null ? "Consultar precio" : money(priceOf(p))}</span>${p.tonos?.length ? `<span class="tone-count">${p.tonos.length} tonos</span>` : `<span class="tone-count">${escape(p.categoria || "")}</span>`}</div>${cardSwatches(p)}</div></article>`;
}
function home() {
  const picks = [
    "labios-2",
    "rostro-2",
    "accesorios-1",
    "ojos-1",
    "labios-11",
    "rostro-8",
    "labios-12",
    "rostro-14",
  ]
    .map((key) => products.find((p) => p.key === key))
    .filter(Boolean);
  return `${campaignHero()}
  <section class="benefits" aria-label="Nuestra tienda"><div>${icon("sparkle")}<span>Marcas que te encantan</span></div><div>${icon("truck")}<span>Envíos a toda Guatemala</span></div><div>${icon("chat")}<span>Asesoría por WhatsApp</span></div><div>${icon("heart")}<span>Elegidos con amor para ti</span></div></section>
  <section class="section container categories-section"><div class="section-heading"><div><p class="eyebrow">UN UNIVERSO DE POSIBILIDADES</p><h2>¿QUÉ SE TE <span class="script">antoja hoy?</span></h2></div><a class="text-link" href="#catalogo">Ver todo el catálogo ↗</a></div><div class="category-grid">${categories.map(([key, label, caption], i) => `<a class="category-card" href="#catalogo/${key}"><div class="category-image"><img src="assets/images/n${i + 1}.webp" alt="" loading="lazy" width="200" height="200"><span>↗</span></div><h3>${label}</h3><p>${caption}</p></a>`).join("")}</div></section>
  <section class="featured section"><div class="container"><div class="section-heading"><div><p class="eyebrow">PARA TU NECESER, CON AMOR</p><h2>TU PRÓXIMA <span class="script">obsesión.</span></h2></div><a href="#catalogo" class="text-link">Descubre más favoritos ↗</a></div><div class="product-grid">${picks.map(card).join("")}</div></div></section>
  <section class="collections-edit container" aria-label="Colecciones para explorar"><a class="collection-promo" href="#catalogo/accesorios"><img src="assets/images/banner2.png" alt="Brochas Beauty Creations" width="1890" height="945" loading="lazy"><div><h2>HERRAMIENTAS PARA BRILLAR</h2><span>Ver accesorios ↗</span></div></a><a class="collection-promo" href="#catalogo?q=Little Pony"><img src="assets/images/banner3.png" alt="Colección My Little Pony" width="1890" height="945" loading="lazy"><div><h2>UN POCO DE MAGIA</h2><span>Explorar colección ↗</span></div></a></section><section class="collab-section container section"><div class="collab-image"><img src="assets/images/banner4.png" alt="Colección Yeri Mua x Beauty Creations" width="1200" height="600" loading="lazy"><span class="image-caption">BEAUTY CREATIONS × YERI MUA</span></div><div class="collab-copy"><p class="eyebrow">PERSONALIDAD EN CADA DETALLE</p><h2>ICÓNICAS.<br>COMO <span class="script">tú.</span></h2><p>Las colaboraciones que quieres tener en tus manos. Descubre colores, texturas y ediciones con mucha actitud.</p><a class="button dark" href="#catalogo/collabs">Explorar collabs <span>↗</span></a></div></section>
  <section class="brand-strip container" aria-label="Marcas en nuestro catálogo"><p class="eyebrow">TUS MARCAS. TU ESTILO.</p><div>${[1, 2, 3, 4, 5, 6].map((i) => `<img src="assets/images/marca${i}.png" alt="${["Beauty Creations", "BeBella", "Moira", "Italia Deluxe", "Victoria’s Secret", "e.l.f."][i - 1]}" loading="lazy" width="150" height="65">`).join("")}</div></section>
  <section class="story-teaser"><div class="container story-inner"><div class="story-image"><img src="assets/images/foto2.jpeg" alt="La tienda Esmeralda's Cosmetic en Coatepeque" loading="lazy" width="650" height="500"><span class="script">Aquí empieza la magia.</span></div><div><p class="eyebrow">MÁS QUE UNA TIENDA</p><h2>UN SUEÑO HECHO<br><span class="script">belleza.</span></h2><p>Desde Coatepeque, creamos un espacio donde puedes ser tú. Cada producto es una invitación a descubrir esa luz que ya llevas dentro.</p><a class="text-link" href="#historia">Conoce nuestra historia ↗</a></div></div></section>
  <section class="help-banner container"><span class="script">¿Encontramos tu match?</span><p>Tu tono ideal, tu nueva rutina o el regalo perfecto.<br>Estamos a un mensaje de distancia.</p><a class="button outline" href="${wa()}" target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp ↗</a></section>`;
}
function catalog(favoriteOnly = false) {
  const label = favoriteOnly
    ? "TUS FAVORITOS"
    : categories.find((c) => c[0] === catalogState.category)?.[1] ||
      "EL BEAUTY EDIT";
  return `<div class="container catalog-page"><div class="breadcrumb"><a href="#inicio">Inicio</a><span>/</span><span>${escape(label)}</span></div><header class="page-heading"><p class="eyebrow">${favoriteOnly ? "GUARDA LO QUE TE ENAMORA" : "DESCUBRE TU PROPIA VERSIÓN DE BELLEZA"}</p><h1>${escape(label)}<span class="script">${favoriteOnly ? ", muy tú." : ", a tu manera."}</span></h1><p>${favoriteOnly ? "Todos esos pequeños flechazos, en un solo lugar." : "Maquillaje, cuidado y accesorios que merecen un lugar en tu rutina."}</p></header>${favoriteOnly ? "" : `<div class="category-tabs"><a href="#catalogo" class="${!catalogState.category ? "selected" : ""}">Todo</a>${categories.map(([k, l]) => `<a href="#catalogo/${k}" class="${catalogState.category === k ? "selected" : ""}">${l}</a>`).join("")}</div>`}<div class="catalog-toolbar"><label class="catalog-search">${icon("search")}<input id="catalog-query" type="search" aria-label="Buscar en el catálogo" placeholder="Busca un producto, marca, tono o código…" value="${escape(catalogState.query)}"></label><label><span class="sr-only">Filtrar por marca</span><select id="brand-filter"><option value="">Todas las marcas</option>${[
    ...new Set(products.map((p) => p.marca).filter(Boolean)),
  ]
    .sort()
    .map(
      (b) =>
        `<option ${b === catalogState.brand ? "selected" : ""}>${escape(b)}</option>`,
    )
    .join(
      "",
    )}</select></label><label><span class="sr-only">Ordenar productos</span><select id="sort-filter"><option value="featured">Selección original</option><option value="price-up">Precio: menor a mayor</option><option value="price-down">Precio: mayor a menor</option><option value="name">Nombre: A–Z</option></select></label></div><div class="catalog-extra"><label><input id="variants-only" type="checkbox"> Solo productos con tonos</label><div class="price-range"><span>Tu presupuesto</span><label><span class="sr-only">Precio mínimo</span><input id="min-price" type="number" min="0" placeholder="Q Desde"></label><span>—</span><label><span class="sr-only">Precio máximo</span><input id="max-price" type="number" min="0" placeholder="Q Hasta"></label></div></div><div class="catalog-summary"><span id="result-count" role="status"></span><button data-action="reset-filters" class="text-link">Limpiar filtros</button></div><div class="product-grid" id="catalog-results" data-favorites="${favoriteOnly}"></div><div id="pagination" class="pagination"></div></div>`;
}
function updateCatalog() {
  const container = $("#catalog-results");
  if (!container) return;
  const source =
    container.dataset.favorites === "true"
      ? products.filter((p) => favorites.includes(p.key))
      : products;
  const result = filterProducts(source, catalogState),
    pages = Math.ceil(result.length / 12);
  currentPage = Math.max(1, Math.min(currentPage, pages || 1));
  $("#result-count").textContent =
    `${result.length} producto${result.length === 1 ? "" : "s"}${catalogState.query ? ` para “${catalogState.query}”` : ""}`;
  container.innerHTML = result.length
    ? result
        .slice((currentPage - 1) * 12, currentPage * 12)
        .map(card)
        .join("")
    : `<div class="empty-state">${icon("heart")}<h2>${container.dataset.favorites === "true" && !source.length ? "Tu lista empieza con un flechazo." : "Todavía no encontramos ese match."}</h2><p>${!source.length ? "Toca el corazón de un producto para guardarlo aquí." : "Prueba con otro nombre o limpia los filtros."}</p><a class="button dark" href="#catalogo">Explorar catálogo ↗</a></div>`;
  $("#pagination").innerHTML =
    pages > 1
      ? `<button data-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""} aria-label="Página anterior">←</button><span>Página ${currentPage} de ${pages}</span><button data-page="${currentPage + 1}" ${currentPage === pages ? "disabled" : ""} aria-label="Página siguiente">→</button>`
      : "";
}
const faqs = [
  [
    "¿Cómo hago mi pedido?",
    "Explora el catálogo, elige el tono cuando corresponda y agrega tus favoritos al pedido. Abre “Mi pedido” y envíalo por WhatsApp. Te confirmaremos disponibilidad, precio final y forma de pago antes de cerrar tu compra.",
  ],
  [
    "¿Hacen envíos a toda Guatemala?",
    "Sí, coordinamos envíos a través de Cargo Expreso. El costo, la cobertura y el tiempo de entrega se confirman por WhatsApp según tu ubicación.",
  ],
  [
    "¿Puedo recibir ayuda para elegir un tono?",
    "¡Claro! Escríbenos y te ayudamos a elegir base, corrector, labial, rubor o sombras según el estilo y acabado que buscas.",
  ],
  [
    "¿Todos los productos están disponibles?",
    "La disponibilidad puede cambiar. Los productos del catálogo, sus tonos y precios se confirman de forma personalizada al realizar tu pedido.",
  ],
  [
    "¿Dónde está la tienda?",
    "Nos encuentras en Coatepeque, Quetzaltenango. Atendemos de lunes a sábado, de 9:00 a. m. a 6:00 p. m. Escríbenos para recibir la ubicación exacta.",
  ],
  [
    "¿Puedo armar un regalo?",
    "Sí. Cuéntanos la ocasión, tu presupuesto y los gustos de esa persona especial. Te ayudamos a encontrar una combinación que le encante.",
  ],
];
function help() {
  return `<section class="container information-page"><p class="eyebrow">TE ACOMPAÑAMOS EN CADA PASO</p><h1>COMPRAR ES <span class="script">así de fácil.</span></h1><div class="steps">${[
    ["01", "Enamórate", "Explora y encuentra lo que va contigo."],
    ["02", "Arma tu pedido", "Elige tus tonos y agrega tus favoritos."],
    ["03", "Hablemos", "Confirma tu compra por WhatsApp."],
  ]
    .map(([n, t, p]) => `<div><span>${n}</span><h2>${t}</h2><p>${p}</p></div>`)
    .join(
      "",
    )}</div><div class="faq-list">${faqs.map(([q, a]) => `<details><summary>${q}<span>+</span></summary><p>${a}</p></details>`).join("")}</div><a class="button dark" href="${wa()}" target="_blank" rel="noopener noreferrer">Tengo otra pregunta ↗</a></section>`;
}
function contact() {
  return `<section class="container information-page"><p class="eyebrow">DE LA PANTALLA A TU BEAUTY SPOT</p><h1>VEN, SIÉNTETE <span class="script">en casa.</span></h1><div class="contact-grid"><img class="contact-photo" src="assets/images/foto1.jpeg" alt="Un rincón de nuestra tienda en Coatepeque" width="500" height="650"><div><h2>HABLEMOS DE LO QUE TE GUSTA.</h2><p>Te ayudamos a encontrar tus próximos favoritos, en tienda o desde donde estés.</p><dl><dt>VISÍTANOS</dt><dd>Coatepeque, Quetzaltenango, Guatemala</dd><dt>NUESTRO HORARIO</dt><dd>Lunes a sábado · 9:00 a. m. – 6:00 p. m.<br>Domingo cerrado</dd><dt>WHATSAPP</dt><dd><a href="${wa()}" target="_blank" rel="noopener noreferrer">+502 3573 9640 ↗</a></dd></dl><form id="contact-form"><label for="contact-name">Tu nombre</label><input id="contact-name" name="name" required maxlength="100" autocomplete="name" placeholder="¿Cómo te llamas?"><label for="contact-message">¿En qué te ayudamos?</label><textarea id="contact-message" name="message" required maxlength="1500" rows="4" placeholder="Busco mi tono ideal, quiero hacer un regalo…"></textarea><button class="button dark">Continuar en WhatsApp ↗</button><p class="small">Se abrirá WhatsApp con tu mensaje. Tú decides cuándo enviarlo.</p></form></div></div></section>`;
}
function story() {
  return `<section class="container information-page"><p class="eyebrow">DESDE 2020 · COATEPEQUE, GUATEMALA</p><h1>UN SUEÑO HECHO <span class="script">belleza.</span></h1><div class="contact-grid"><img class="contact-photo" src="assets/images/CEO.png" alt="Fundadora de Esmeralda's Cosmetic" width="500" height="650"><div class="story-long"><p class="eyebrow">NUESTRA ESENCIA</p><h2>EL COMIENZO DE UN SUEÑO.</h2><p>Lo que todos vieron como un final, nosotros lo vimos como un nuevo comienzo.</p><p>En Esmeralda's Cosmetic creemos que la belleza se trata de resaltar esa luz única que ya existe en ti. Cada labial, cada paleta y cada producto ha sido seleccionado pensando en una mujer fuerte, empoderada y auténtica.</p><blockquote class="script">“Si te caes, ponte de pie, píntate los labios y sigue caminando.”</blockquote><p>Desde nuestra tienda en Coatepeque, compartimos ese amor por el maquillaje y el cuidado personal con toda Guatemala.</p><a class="button dark" href="#contacto">Conoce nuestro espacio ↗</a></div></div></section>`;
}
function route() {
  $("#product-dialog .product-detail-container").innerHTML = "";
  closeMega();
  $(".header").classList.remove("search-open");
  $("[data-action=search]").setAttribute("aria-expanded", "false");
  const hash = location.hash.slice(1) || "inicio";
  const [path, query = ""] = hash.split("?"),
    [page, category] = path.split("/");
  document.querySelectorAll("dialog[open]").forEach((d) => d.close());
  $("#navigation").classList.remove("open");
  $(".menu-toggle").setAttribute("aria-expanded", "false");
  currentPage = 1;
  const titles = {
    inicio: "Tu belleza, a tu manera",
    catalogo: "Catálogo",
    favoritos: "Mis favoritos",
    historia: "Nuestra historia",
    contacto: "Visítanos",
    ayuda: "Cómo comprar",
  };
  document.title = `${titles[page] || "Catálogo"} | Esmeralda's Cosmetic`;
  if (page === "catalogo" || page === "favoritos") {
    catalogState = {
      category: category || "",
      query: new URLSearchParams(query).get("q") || "",
      brand: "",
      sort: "featured",
    };
    $("#main").innerHTML = catalog(page === "favoritos");
    updateCatalog();
  } else if (page === "historia") $("#main").innerHTML = story();
  else if (page === "contacto") $("#main").innerHTML = contact();
  else if (page === "ayuda") $("#main").innerHTML = help();
  else if (page === "producto") {
    const p = products.find((p) => p.key === category);
    $("#product-dialog .product-detail-container").innerHTML = "";
    if (p) {
      currentProduct = p;
      selectedTone = "";
      document.title = p.nombre + " | Esmeralda's Cosmetic";
      const related = products
        .filter(
          (other) => other._ecSection === p._ecSection && other.key !== p.key,
        )
        .slice(0, 4);
      $("#main").innerHTML =
        '<div class="container product-page"><div class="breadcrumb"><a href="#inicio">Inicio</a><span>/</span><a href="#catalogo/' +
        escape(p._ecSection) +
        '">' +
        escape(
          categories.find((c) => c[0] === p._ecSection)?.[1] || "Catálogo",
        ) +
        "</a><span>/</span><span>" +
        escape(p.nombre) +
        '</span></div><div class="product-detail-container">' +
        productDetail(p, money, priceOf(p)) +
        '</div><section class="related-products section"><div class="section-heading"><div><p class="eyebrow">COMPLETA TU RUTINA</p><h2>TAMBIÉN TE PUEDE <span class="script">encantar.</span></h2></div></div><div class="product-grid">' +
        related.map(card).join("") +
        "</div></section></div>";
      const toneId = new URLSearchParams(query).get("tono"),
        index = p.tonos?.findIndex((t) => t.id === toneId);
      if (index >= 0) selectTone(index);
    } else {
      $("#main").innerHTML =
        '<div class="empty-state"><h1>Este producto no está disponible.</h1><p>Explora el catálogo para encontrar otro favorito.</p><a class="button dark" href="#catalogo">Ver catálogo ↗</a></div>';
    }
  } else $("#main").innerHTML = home();
  document.querySelectorAll(".navigation a").forEach((a) => {
    if (a.getAttribute("href") === `#${path}`)
      a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}
function openDialog(id) {
  lastFocus = document.activeElement;
  $(id).showModal();
  document.body.classList.add("modal-open");
}
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    lastFocus?.focus();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        event.clientX < r.left ||
        event.clientX > r.right ||
        event.clientY < r.top ||
        event.clientY > r.bottom
      )
        dialog.close();
    }
  });
});
function openProduct(key, variantId = "") {
  if (location.hash.startsWith("#producto/")) {
    location.hash =
      "producto/" +
      key +
      (variantId ? "?tono=" + encodeURIComponent(variantId) : "");
    return;
  }
  currentProduct = products.find((p) => p.key === key);
  if (!currentProduct) return;
  selectedTone = "";
  const p = currentProduct;
  $("#product-dialog .product-detail-container").innerHTML =
    productDetail(p, money, priceOf(p)) +
    '<a class="full-product-link" href="#producto/' +
    escape(p.key) +
    '">Ver ficha completa del producto ↗</a>';
  openDialog("#product-dialog");
  if (variantId) {
    const index = p.tonos?.findIndex((t) => t.id === variantId);
    if (index >= 0) selectTone(index);
  }
}
function selectTone(index) {
  const t = currentProduct.tonos?.[index];
  if (!t || stockLimit(currentProduct, t) === 0) return;
  $(".availability").textContent = stockLabel(t);
  $("#product-quantity").max = stockLimit(currentProduct, t);
  $("#product-quantity").value = Math.min(Number($("#product-quantity").value), stockLimit(currentProduct, t));
  selectedTone = t.nombre;
  $("#product-feedback").textContent = "";
  $("#selected-tone").textContent = t.nombre;
  $("#selected-tone-description").textContent = [
    t.sku,
    t.descripcion,
    t.availability === "available"
      ? "Disponible"
      : "Disponibilidad por confirmar",
  ]
    .filter(Boolean)
    .join(" · ");
  document
    .querySelectorAll("[data-tone]")
    .forEach((b) =>
      b.setAttribute("aria-pressed", String(Number(b.dataset.tone) === index)),
    );
  $("#detail-image").src = t.imagen
    ? publicImage(t.imagen)
    : imageOf(currentProduct);
  $("#detail-image").alt = t.imagen
    ? currentProduct.nombre + " — " + t.nombre
    : "Imagen general de " + currentProduct.nombre;
  $("#image-caption").textContent = t.imagen
    ? "Vista del tono " + t.nombre
    : "Imagen general del producto. Este tono aún no tiene fotografía específica.";
  document
    .querySelectorAll("[data-image]")
    .forEach((b) => b.setAttribute("aria-pressed", "false"));
  const amount = itemPrice(currentProduct, { variantId: t.id, tone: t.nombre });
  $(".detail-price").textContent =
    amount === null ? "Precio por confirmar" : money(amount);
  $('[data-action="add"]').innerHTML = "Agregar a mi pedido <span>+</span>";
}
function renderBag() {
  const total = cart.reduce(
    (n, i) =>
      n +
      (itemPrice(
        products.find((p) => p.key === i.key),
        i,
      ) || 0) *
        i.quantity,
    0,
  );
  $("#bag-content").innerHTML = cart.length
    ? `<div class="bag-items">${cart
        .map((i, index) => {
          const p = products.find((p) => p.key === i.key);
          return `<article class="bag-item"><img src="${escape(publicImage(resolveTone(p, i)?.imagen || imageOf(p)))}" alt="${escape(p.nombre)}" width="85" height="100"><div><h3>${escape(p.nombre)}</h3>${i.tone ? `<p>Tono: ${escape(i.tone)}</p>` : ""}<strong>${itemPrice(p, i) === null ? "Precio por confirmar" : money(itemPrice(p, i) * i.quantity)}</strong><div class="bag-item-controls"><button data-quantity="${index}" data-delta="-1" aria-label="Reducir cantidad" ${i.quantity === 1 ? "disabled" : ""}>−</button><span>${i.quantity}</span><button data-quantity="${index}" data-delta="1" aria-label="Aumentar cantidad" ${i.quantity === 99 ? "disabled" : ""}>+</button><button class="remove-item" data-remove="${index}" aria-label="Quitar ${escape(p.nombre)}">Quitar</button></div></div></article>`;
        })
        .join(
          "",
        )}</div><div class="bag-total"><div><span>Subtotal estimado</span><strong>${money(total)}</strong></div><p>Envío no incluido. ${
        cart.some(
          (i) =>
            itemPrice(
              products.find((p) => p.key === i.key),
              i,
            ) === null,
        )
          ? "Hay productos con precio por confirmar. "
          : ""
      }Confirmaremos existencias y total por WhatsApp.</p><a class="button dark" href="${wa(orderMessage(cart, products))}" target="_blank" rel="noopener noreferrer">Enviar pedido por WhatsApp ↗</a><p class="small">Tu pedido se confirma al conversar con nuestro equipo.</p></div>`
    : `<div class="empty-state">${icon("bag")}<h2>Un espacio para tus favoritos.</h2><p>Agrega productos del catálogo y arma tu pedido.</p><button class="button dark" data-action="shop">Empezar a explorar ↗</button></div>`;
}
document.addEventListener("click", async (event) => {
  const target = event.target.closest("button,a");
  if (!target) return;
  if (target.dataset.product) {
    openProduct(target.dataset.product, target.dataset.variantId);
    $("#search-suggestions").hidden = true;
  }
  if (target.dataset.favorite) {
    const key = target.dataset.favorite;
    favorites = favorites.includes(key)
      ? favorites.filter((x) => x !== key)
      : [...favorites, key];
    save();
    document.querySelectorAll("[data-favorite]").forEach((b) => {
      const active = favorites.includes(b.dataset.favorite);
      b.classList.toggle("is-favorite", active);
      b.setAttribute("aria-pressed", String(active));
    });
    if (location.hash.startsWith("#favoritos")) updateCatalog();
    toast(
      favorites.includes(key)
        ? "Guardado en tus favoritos ♡"
        : "Producto quitado de favoritos",
    );
  }
  if (target.dataset.page) {
    currentPage = Number(target.dataset.page);
    updateCatalog();
    $(".catalog-toolbar").scrollIntoView({ block: "start" });
  }
  if (target.dataset.image) {
    $("#detail-image").src = publicImage(target.dataset.image);
    $("#image-caption").textContent =
      "Vista de la galería general; no cambia el tono elegido.";
    document
      .querySelectorAll("[data-image]")
      .forEach((b) => b.setAttribute("aria-pressed", String(b === target)));
    const photoTone=currentProduct.tonos?.findIndex(t=>t.imagen===target.dataset.image);
    if(photoTone>=0){selectTone(photoTone);target.setAttribute('aria-pressed','true');}
  }
  if (target.dataset.tone !== undefined)
    selectTone(Number(target.dataset.tone));
  if (target.dataset.step) {
    const input = $("#product-quantity");
    input.value = Math.min(
      99,
      Math.max(1, (Number(input.value) || 1) + Number(target.dataset.step)),
    );
  }
  if (target.dataset.remove !== undefined) {
    cart.splice(Number(target.dataset.remove), 1);
    save();
    renderBag();
  }
  if (target.dataset.quantity !== undefined) {
    const i = cart[Number(target.dataset.quantity)];
    i.quantity = Math.max(
      1,
      Math.min(stockLimit(products.find((p) => p.key === i.key), resolveTone(products.find((p) => p.key === i.key), i)), i.quantity + Number(target.dataset.delta)),
    );
    save();
    renderBag();
  }
  if (target.dataset.slide !== undefined) {
    const index = Number(target.dataset.slide);
    const slides = [
      ["banner1.png", "Rosy McMichael x Beauty Creations"],
      ["banner2.png", "Sets de brochas Beauty Creations"],
      ["banner4.png", "Yeri Mua x Beauty Creations"],
    ];
    $(".hero-campaign").src = `assets/images/${slides[index][0]}`;
    $(".hero-campaign").alt = slides[index][1];
    $(".hero-art-top span:last-child").textContent = `0${index + 1} / 03`;
    document.querySelectorAll("[data-slide]").forEach((b) => {
      b.classList.toggle("active", b === target);
      b.setAttribute("aria-pressed", String(b === target));
    });
  }
  switch (target.dataset.action) {
    case "reload":
      location.reload();
      break;
    case "menu": {
      const open = $("#navigation").classList.toggle("open");
      target.setAttribute("aria-expanded", String(open));
      break;
    }
    case "search": {
      const expanded = $(".header").classList.toggle("search-open");
      target.setAttribute("aria-expanded", String(expanded));
      closeMega();
      if (expanded) $(".header-search input").focus();
      break;
    }
    case "bag":
      renderBag();
      openDialog("#bag-dialog");
      break;
    case "close":
      target.closest("dialog").close();
      break;
    case "shop":
      $("#bag-dialog").close();
      location.hash = "catalogo";
      break;
    case "reset-filters":
      catalogState = {
        ...catalogState,
        query: "",
        brand: "",
        sort: "featured",
      };
      $("#catalog-query").value = "";
      $("#brand-filter").value = "";
      $("#sort-filter").value = "featured";
      $("#min-price").value = "";
      $("#max-price").value = "";
      $("#variants-only").checked = false;
      catalogState.minPrice = "";
      catalogState.maxPrice = "";
      catalogState.variantsOnly = false;
      currentPage = 1;
      updateCatalog();
      break;
    case "add": {
      if (currentProduct.tonos?.length && !selectedTone) {
        $("#product-feedback").textContent =
          "Elige un tono para agregar este producto.";
        $("#tone-search")?.focus();
        break;
      }
      const input = $("#product-quantity");
      if (!input.reportValidity()) break;
      const quantity = Number(input.value);
      const variant = currentProduct.tonos?.find(
        (t) => t.nombre === selectedTone,
      );
      if (stockLimit(currentProduct, variant) === 0) {
        $("#product-feedback").textContent = "Este tono está agotado.";
        break;
      }
      const existing = cart.find(
        (i) => i.key === currentProduct.key && i.tone === selectedTone,
      );
      if ((existing?.quantity || 0) + quantity > stockLimit(currentProduct, variant)) {
        $("#product-feedback").textContent = "La cantidad supera las existencias disponibles (incluyendo tu pedido).";
        break;
      }
      if (existing)
        existing.quantity = Math.min(99, existing.quantity + quantity);
      else
        cart.push({
          key: currentProduct.key,
          variantId: variant?.id || "",
          tone: selectedTone,
          quantity,
        });
      save();
      $("#product-dialog").close();
      toast("¡Listo! Agregado a tu pedido ♡");
      break;
    }
    case "share": {
      const url = new URL(location.href);
      url.hash = `producto/${currentProduct.key}${selectedTone ? "?tono=" + encodeURIComponent(currentProduct.tonos.find((t) => t.nombre === selectedTone).id) : ""}`;
      try {
        await navigator.clipboard.writeText(url.href);
        $(".share-link").textContent="Enlace copiado ✓";
      } catch {
        toast(
          "No se pudo copiar automáticamente. Abre el enlace del producto.",
        );
        location.hash = url.hash;
      }
      break;
    }
  }
});
document.addEventListener("input", (event) => {
  if (event.target.id === "tone-search") {
    const t = currentProduct.tonos.find((t) => t.nombre === selectedTone);
    $("#tone-list").innerHTML = toneButtons(
      currentProduct,
      event.target.value,
      t?.id,
    );
    $("#tone-result-count").textContent =
      findTones(currentProduct, event.target.value).length +
      " tonos encontrados";
    return;
  }
  if (["min-price", "max-price"].includes(event.target.id)) {
    catalogState[event.target.id === "min-price" ? "minPrice" : "maxPrice"] =
      event.target.value;
    currentPage = 1;
    updateCatalog();
    return;
  }
  if (event.target.id === "catalog-query") {
    catalogState.query = event.target.value;
    currentPage = 1;
    updateCatalog();
  }
});
document.addEventListener("change", (event) => {
  if (event.target.id === "variants-only")
    catalogState.variantsOnly = event.target.checked;
  else if (event.target.id === "brand-filter")
    catalogState.brand = event.target.value;
  else if (event.target.id === "sort-filter")
    catalogState.sort = event.target.value;
  else return;
  currentPage = 1;
  updateCatalog();
});
document.addEventListener("submit", (event) => {
  if (event.target.matches(".header-search")) {
    event.preventDefault();
    const q = new FormData(event.target).get("q");
    location.hash = `catalogo?q=${encodeURIComponent(q)}`;
  }
  if (event.target.id === "contact-form") {
    event.preventDefault();
    const data = new FormData(event.target);
    window.open(
      wa(`¡Hola! Soy ${data.get("name")}. ${data.get("message")}`),
      "_blank",
      "noopener,noreferrer",
    );
  }
});
document.addEventListener(
  "error",
  (event) => {
    const img = event.target;
    if (
      img instanceof HTMLImageElement &&
      !img.src.endsWith("/assets/brand/product-placeholder.svg")
    ) {
      img.src = "assets/brand/product-placeholder.svg";
      img.classList.add("image-fallback");
      img.alt = `Imagen no disponible: ${img.alt}`;
    }
  },
  true,
);
document.addEventListener(
  "load",
  (event) => {
    if (
      event.target instanceof HTMLImageElement &&
      !event.target.src.endsWith("/assets/brand/product-placeholder.svg")
    )
      event.target.classList.remove("image-fallback");
  },
  true,
);
window.addEventListener("hashchange", route);
try {
  const response = await fetch(
    new URL("../data/products.json", import.meta.url),
  );
  if (!response.ok) throw new Error(response.status);
  products = validateCatalog(await response.json()).filter(
    (p) => p.status === "active",
  );
  if (window.EC_SUPABASE_CONFIG?.inventorySource === "supabase") {
    // Un fallo remoto interrumpe la carga: no anunciar existencias locales desactualizadas.
    products = await loadRemoteStock(products, window.EC_SUPABASE_CONFIG);
  }
  cart = validCart(read("ec-cart-v1", []), products);
  const stored = read("ec-favorites-v1", []);
  favorites = Array.isArray(stored)
    ? [...new Set(stored)].filter((k) => products.some((p) => p.key === k))
    : [];
  updateCounts();
  const legacy = location.pathname.split("/").pop()?.replace(".html", "");
  const map = {
    nuestrahistoria: "historia",
    contacto: "contacto",
    preguntas: "ayuda",
  };
  if (
    !location.hash &&
    (categories.some((c) => c[0] === legacy) || map[legacy])
  )
    history.replaceState(null, "", `#${map[legacy] || `catalogo/${legacy}`}`);
  if (!location.hash && legacy === "producto") {
    const params = new URLSearchParams(location.search);
    const key = `${params.get("categoria") || params.get("seccion") || params.get("section")}-${params.get("id")}`;
    if (products.some((p) => p.key === key))
      history.replaceState(null, "", `#producto/${key}`);
  }
  route();
} catch (error) {
  $("#main").innerHTML =
    `<div class="empty-state"><h1>No pudimos cargar el catálogo.</h1><p>Revisa tu conexión e inténtalo de nuevo, o escríbenos directamente.</p><button class="button dark" data-action="reload">Volver a intentar</button><a class="text-link" href="${wa()}">Contactar por WhatsApp ↗</a></div>`;
  console.error(error);
}

const searchInput = $(".header-search input");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim(),
    box = $("#search-suggestions");
  if (query.length < 2) {
    box.hidden = true;
    return;
  }
  const results = products.filter((p) => productMatches(p, query)).slice(0, 5);
  box.innerHTML =
    results
      .map(
        (p) =>
          '<a href="#producto/' +
          escape(p.key) +
          '"><img src="' +
          escape(imageOf(p)) +
          '" alt=""><span><strong>' +
          escape(p.nombre) +
          "</strong><small>" +
          escape(
            findTones(p, query)
              .map((t) => t.nombre)
              .slice(0, 2)
              .join(" · ") || p.marca,
          ) +
          "</small></span></a>",
      )
      .join("") +
    (results.length
      ? ""
      : "<p>No encontramos coincidencias. Prueba otro nombre.</p>") +
    '<a class="suggestion-footer" href="#catalogo?q=' +
    encodeURIComponent(query) +
    '">Ver todos los resultados <span>↗</span></a>';
  box.hidden = false;
});
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".header-search") ||
    e.target.closest(".search-suggestions a")
  )
    $("#search-suggestions").hidden = true;
});
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") $("#search-suggestions").hidden = true;
  if (e.key === "ArrowDown") {
    $("#search-suggestions a")?.focus();
    e.preventDefault();
  }
});

let campaignIndex = 0;
function setCampaign(index) {
  if (!$("#campaign-image")) return;
  campaignIndex = (index + campaigns.length) % campaigns.length;
  const c = campaigns[campaignIndex];
  $("#campaign-image").src = "assets/images/" + c.image;
  $("#campaign-image").alt = c.alt;
  $("#campaign-mobile").srcset = "assets/images/" + c.mobile;
  $("#campaign-eyebrow").textContent = c.eyebrow;
  $("#campaign-title").innerHTML =
    escape(c.title) + ' <span class="script">' + escape(c.script) + "</span>";
  $("#campaign-link").href = "#catalogo?q=" + encodeURIComponent(c.query);
  $("#campaign-cta").href = $("#campaign-link").getAttribute("href");
  document.querySelectorAll("[data-campaign]").forEach((b) => {
    b.classList.toggle("active", Number(b.dataset.campaign) === campaignIndex);
    b.setAttribute(
      "aria-pressed",
      String(Number(b.dataset.campaign) === campaignIndex),
    );
  });
}
function closeMega() {
  const menu = $("#mega-menu");
  if (menu) menu.hidden = true;
  document
    .querySelectorAll("[data-mega]")
    .forEach((b) => b.setAttribute("aria-expanded", "false"));
}
function showMega(key) {
  if (innerWidth <= 760) return;
  $("#mega-menu").innerHTML = megaMenu(key);
  $("#mega-menu").hidden = false;
  $(".header").classList.remove("search-open");
  document
    .querySelectorAll("[data-mega]")
    .forEach((b) =>
      b.setAttribute("aria-expanded", String(b.dataset.mega === key)),
    );
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b?.dataset.campaign !== undefined)
    setCampaign(Number(b.dataset.campaign));
  if (b?.dataset.campaignStep)
    setCampaign(campaignIndex + Number(b.dataset.campaignStep));
  if (b?.dataset.mega) {
    if (b.getAttribute("aria-expanded") === "true") closeMega();
    else showMega(b.dataset.mega);
  }
  if (!e.target.closest(".header")) {
    closeMega();
    $(".header").classList.remove("search-open");
    $("[data-action=search]").setAttribute("aria-expanded", "false");
  }
});
document.querySelectorAll(".nav-group").forEach((group) => {
  group.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse")
      showMega(group.querySelector("[data-mega]").dataset.mega);
  });
});
$(".header").addEventListener("pointerleave", () => {
  if (!$("#mega-menu").contains(document.activeElement)) closeMega();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const trigger = document.querySelector("[data-mega][aria-expanded=true]");
    closeMega();
    if (trigger) trigger.focus();
    $(".header").classList.remove("search-open");
    $("[data-action=search]").setAttribute("aria-expanded", "false");
  }
});
