// Registro de productos - Esmeralda's Cosmetic
// Este archivo solo crea las variables globales y une las bases por seccion.
// Funciona en GitHub Pages sin backend.
(function () {
  window.EC_PRODUCTS = window.EC_PRODUCTS || {};
  window.EC_TOP_PRODUCTS = window.EC_TOP_PRODUCTS || [];
  window.EC_CATALOGO_PRODUCTS = window.EC_CATALOGO_PRODUCTS || [];

  const SECTION_ORDER = ['rostro', 'ojos', 'labios', 'skincare', 'cuerpo', 'accesorios', 'collabs'];
  window.EC_SECTIONS = window.EC_SECTIONS || SECTION_ORDER.slice();
  window.EC_SECTION_LABELS = window.EC_SECTION_LABELS || {
    rostro: 'Rostro',
    ojos: 'Ojos',
    labios: 'Labios',
    skincare: 'Skin Care',
    cuerpo: 'Cuerpo',
    accesorios: 'Accesorios',
    collabs: 'Collabs'
  };
  window.EC_SECTION_PAGES = window.EC_SECTION_PAGES || {
    rostro: 'rostro.html',
    ojos: 'ojos.html',
    labios: 'labios.html',
    skincare: 'skincare.html',
    cuerpo: 'cuerpo.html',
    accesorios: 'accesorios.html',
    collabs: 'collabs.html'
  };

  let sequence = window.EC_PRODUCT_SEQUENCE || 0;

  function normalizeProducts(categoria, productos) {
    const list = Array.isArray(productos) ? productos : [];
    return list.map((product, index) => {
      if (product && typeof product === 'object') {
        product._ecSection = categoria;
        product._ecSectionIndex = index;
        product._ecGlobalOrder = sequence++;
      }
      return product;
    });
  }

  window.EC_REGISTER_PRODUCTS = function (categoria, productos) {
    window.EC_PRODUCTS[categoria] = normalizeProducts(categoria, productos);
    window.EC_PRODUCT_SEQUENCE = sequence;
  };

  window.EC_REGISTER_SPECIAL_PRODUCTS = function (tipo, productos) {
    if (tipo === 'inicio') window.EC_TOP_PRODUCTS = Array.isArray(productos) ? productos : [];
    if (tipo === 'catalogo') window.EC_CATALOGO_PRODUCTS = Array.isArray(productos) ? productos : [];
  };

  window.EC_GET_PRODUCTS = function (categoria) {
    if (categoria === 'inicio') return window.EC_TOP_PRODUCTS || [];
    if (categoria === 'catalogo') return window.EC_CATALOGO_PRODUCTS || [];
    if (categoria === 'collabs' && window.EC_GET_COLLAB_PRODUCTS) return window.EC_GET_COLLAB_PRODUCTS();
    return (window.EC_PRODUCTS && window.EC_PRODUCTS[categoria]) || [];
  };

  window.EC_GET_ALL_PRODUCTS = function () {
    return window.EC_SECTIONS.flatMap(section => {
      return (window.EC_PRODUCTS[section] || []).map((product, index) => {
        if (product && typeof product === 'object') {
          product._ecSection = product._ecSection || section;
          product._ecSectionIndex = typeof product._ecSectionIndex === 'number' ? product._ecSectionIndex : index;
        }
        return product;
      });
    });
  };


  function truthyCollabValue(value) {
    if (value === true) return true;
    const text = String(value || '').trim().toLowerCase();
    return ['true', 'si', 'sí', 'yes', '1', 'activo', 'activa', 'colaboracion', 'colaboración'].includes(text);
  }

  window.EC_IS_COLLAB_PRODUCT = function (product) {
    if (!product || typeof product !== 'object') return false;
    return truthyCollabValue(product.colaboracion) ||
      truthyCollabValue(product.esColaboracion) ||
      truthyCollabValue(product.collab) ||
      truthyCollabValue(product.isCollab) ||
      product._ecSection === 'collabs';
  };

  window.EC_GET_COLLAB_PRODUCTS = function () {
    const seen = new Set();
    return window.EC_GET_ALL_PRODUCTS()
      .filter(product => window.EC_IS_COLLAB_PRODUCT(product))
      .filter(product => {
        const key = `${product._ecSection || 'x'}__${String(product.id ?? product.nombre ?? Math.random())}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
  };

  window.EC_GET_PRODUCT = function (categoria, id) {
    const section = String(categoria || '').toLowerCase();
    const target = String(id || '');
    return (window.EC_PRODUCTS[section] || []).find(product => String(product.id) === target) || null;
  };
})();
