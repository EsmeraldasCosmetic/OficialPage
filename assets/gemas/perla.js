import { esc } from "./amatista.js";
export const campaigns = [
  {
    image: "banner1.png",
    mobile: "bannerm1.png",
    title: "TU NUEVA OBSESIÓN.",
    script: "Rosy’s essentials.",
    eyebrow: "ROSY MCMICHAEL × BEAUTY CREATIONS",
    query: "Rosy",
    alt: "Colección Rosy McMichael con paleta de sombras, brochas y maquillaje",
  },
  {
    image: "banner4.png",
    mobile: "bannerm4.png",
    title: "SIN MIEDO A BRILLAR.",
    script: "Muy tú. Muy Yeri.",
    eyebrow: "YERI MUA × BEAUTY CREATIONS",
    query: "Yeri",
    alt: "Colección Yeri Mua x Beauty Creations en tonos rosa",
  },
  {
    image: "banner3.png",
    mobile: "bannerm3.png",
    title: "UN MUNDO DE COLOR.",
    script: "Deja volar tu look.",
    eyebrow: "MY LITTLE PONY × BEAUTY CREATIONS",
    query: "Little Pony",
    alt: "Colección de maquillaje My Little Pony x Beauty Creations",
  },
];
export function campaignHero() {
  const c = campaigns[0];
  return `<section class="campaign-hero" aria-label="Campañas destacadas"><a id="campaign-link" href="#catalogo?q=${encodeURIComponent(c.query)}" class="campaign-visual"><picture><source id="campaign-mobile" media="(max-width:600px)" srcset="assets/images/${c.mobile}"><img id="campaign-image" src="assets/images/${c.image}" alt="${c.alt}" width="1890" height="945" fetchpriority="high"></picture><span class="campaign-shop">DESCUBRE LA COLECCIÓN <span>↗</span></span></a><div class="campaign-control"><button data-campaign-step="-1" aria-label="Campaña anterior">←</button><div class="campaign-progress">${campaigns.map((item, i) => `<button data-campaign="${i}" class="${i === 0 ? "active" : ""}" aria-label="Ver ${item.eyebrow}" aria-pressed="${i === 0}"><span></span></button>`).join("")}</div><button data-campaign-step="1" aria-label="Siguiente campaña">→</button></div></section><div class="campaign-caption"><div><p id="campaign-eyebrow">${c.eyebrow}</p><h1 id="campaign-title">${c.title} <span class="script">${c.script}</span></h1></div><a id="campaign-cta" class="text-link" href="#catalogo?q=${encodeURIComponent(c.query)}">Explorar colección ↗</a></div>`;
}
const sections = {
  catalogo: {
    title: "Tu universo de belleza",
    groups: [
      [
        "ENCUENTRA TU FAVORITO",
        [
          ["Todo el catálogo", "#catalogo"],
          ["Rostro", "#catalogo/rostro"],
          ["Ojos", "#catalogo/ojos"],
          ["Labios", "#catalogo/labios"],
          ["Skin care", "#catalogo/skincare"],
        ],
      ],
      [
        "PARA TI",
        [
          ["Brochas y accesorios", "#catalogo/accesorios"],
          ["Colaboraciones", "#catalogo/collabs"],
          ["Mis favoritos", "#favoritos"],
          ["Cómo comprar", "#ayuda"],
          ["Visita nuestra tienda", "#contacto"],
        ],
      ],
    ],
    image: "banner1.png",
    link: "#catalogo",
  },
  rostro: {
    title: "Un acabado muy tuyo",
    groups: [
      [
        "POR PRODUCTO",
        [
          ["Bases", "#catalogo/rostro?q=Base"],
          ["Correctores", "#catalogo/rostro?q=Corrector"],
          ["Rubores", "#catalogo/rostro?q=Rubor"],
          ["Iluminadores", "#catalogo/rostro?q=Iluminador"],
          ["Polvos", "#catalogo/rostro?q=Polvo"],
          ["Fijadores", "#catalogo/rostro?q=Fijador"],
        ],
      ],
      [
        "POR COLECCIÓN",
        [
          ["Flawless Stay", "#catalogo/rostro?q=Flawless"],
          ["Blush Hush", "#catalogo/rostro?q=Blush Hush"],
          ["Bye Filter", "#catalogo/rostro?q=Bye Filter"],
          ["Final Finish", "#catalogo/rostro?q=Final Finish"],
        ],
      ],
    ],
    image: "n1.webp",
    link: "#catalogo/rostro",
  },
  ojos: {
    title: "Miradas que lo dicen todo",
    groups: [
      [
        "POR PRODUCTO",
        [
          ["Paletas de sombras", "#catalogo/ojos?q=Paleta"],
          ["Delineadores", "#catalogo/ojos?q=Delineador"],
          ["Máscaras", "#catalogo/ojos?q=Máscara"],
          ["Cejas", "#catalogo/ojos?q=Cejas"],
        ],
      ],
      [
        "POR COLECCIÓN",
        [
          ["Rosy’s Essentials", "#catalogo/ojos?q=Rosy"],
          ["Nude X", "#catalogo/ojos?q=Nude X"],
          ["Tease Me", "#catalogo/ojos?q=Tease Me"],
          ["My Little Pony", "#catalogo/ojos?q=Little Pony"],
        ],
      ],
    ],
    image: "n2.webp",
    link: "#catalogo/ojos",
  },
  labios: {
    title: "Encuentra tu próximo tono",
    groups: [
      [
        "POR PRODUCTO",
        [
          ["Labiales", "#catalogo/labios?q=Lipstick"],
          ["Gloss", "#catalogo/labios?q=Gloss"],
          ["Aceites labiales", "#catalogo/labios?q=Aceite"],
          ["Delineadores", "#catalogo/labios?q=Lipliner"],
          ["Bálsamos", "#catalogo/labios?q=Balsamo"],
          ["Sets", "#catalogo/labios?q=Set"],
        ],
      ],
      [
        "POR COLECCIÓN",
        [
          ["Balm N’ Cute", "#catalogo/labios?q=Balm"],
          ["Ultra Dazzle", "#catalogo/labios?q=Ultra Dazzle"],
          ["Nude X", "#catalogo/labios?q=Nude X"],
          ["Plump & Pout", "#catalogo/labios?q=Plump"],
          ["Velvet Stay", "#catalogo/labios?q=Velvet Stay"],
        ],
      ],
    ],
    image: "n3.webp",
    link: "#catalogo/labios",
  },
  skincare: {
    title: "Tu momento de cuidado",
    groups: [
      [
        "TU RUTINA",
        [
          ["Limpiadores", "#catalogo/skincare?q=Limpiador"],
          ["Desmaquillantes", "#catalogo/skincare?q=Desmaquillante"],
          ["Exfoliantes", "#catalogo/skincare?q=Exfoliante"],
          ["Cremas", "#catalogo/skincare?q=Crema"],
          ["Contorno de ojos", "#catalogo/skincare?q=Contorno"],
        ],
      ],
      [
        "DESCUBRE MÁS",
        [
          ["Beauty Creations Skin", "#catalogo/skincare?q=Beauty Creations"],
          ["Xime Skin", "#catalogo/skincare?q=Xime"],
          ["Cuidado de labios", "#catalogo/skincare?q=Sweet Dose"],
        ],
      ],
    ],
    image: "n4.webp",
    link: "#catalogo/skincare",
  },
  accesorios: {
    title: "Los detalles hacen el look",
    groups: [
      [
        "TUS HERRAMIENTAS",
        [
          ["Sets de brochas", "#catalogo/accesorios?q=Brochas"],
          ["Esponjas", "#catalogo/accesorios?q=Esponjas"],
          ["Cosmetiqueras", "#catalogo/accesorios?q=Cosmetiquera"],
          ["Limpiador de brochas", "#catalogo/accesorios?q=Limpiador"],
        ],
      ],
      [
        "CONOCE MÁS",
        [
          ["Nuestra historia", "#historia"],
          ["Cómo comprar", "#ayuda"],
          ["Visítanos", "#contacto"],
        ],
      ],
    ],
    image: "n6.webp",
    link: "#catalogo/accesorios",
  },
  collabs: {
    title: "Tus nombres favoritos",
    groups: [
      [
        "COLABORACIONES",
        [
          ["Rosy McMichael", "#catalogo?q=Rosy"],
          ["Yeri Mua", "#catalogo?q=Yeri"],
          ["Bratz", "#catalogo?q=Bratz"],
          ["Luis Torres", "#catalogo?q=Luis Torres"],
          ["Victor Guadarrama", "#catalogo?q=Victor Guadarrama"],
        ],
      ],
      [
        "UN POCO DE MAGIA",
        [
          ["My Little Pony", "#catalogo?q=Little Pony"],
          ["Betty Boop", "#catalogo?q=Betty"],
          ["Spongebob", "#catalogo?q=Spongebob"],
          ["Powerpuff Girls", "#catalogo?q=Powerpuff"],
        ],
      ],
    ],
    image: "banner4.png",
    link: "#catalogo/collabs",
  },
};
export function megaMenu(key) {
  const s = sections[key];
  if (!s) return "";
  return `<div class="mega-inner">${s.groups.map(([heading, links]) => `<div class="mega-column"><h2>${heading}</h2>${links.map(([name, href]) => `<a href="${esc(href)}">${esc(name)}</a>`).join("")}<a class="mega-all" href="${s.link}">Ver todo ↗</a></div>`).join("")}<a class="mega-feature" href="${s.link}"><img src="assets/images/${s.image}" alt="${s.title}" width="500" height="240"><span>${s.title} ↗</span></a></div>`;
}
