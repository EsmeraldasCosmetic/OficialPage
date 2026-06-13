/* ==========================================================
   Esmeralda's Cosmetic - tienda oficial estatica
   Funciona en GitHub Pages. Guarda pedidos en localStorage.
   ========================================================== */
(function () {
  const CONFIG = {
    phone: '50235739640',
    businessName: "Esmeralda's Cosmetic",
    cartKey: 'ec_pedido_whatsapp_v3'
  };

  const PAGE_TO_SECTION = {
    'rostro.html': 'rostro',
    'ojos.html': 'ojos',
    'labios.html': 'labios',
    'skincare.html': 'skincare',
    'cuerpo.html': 'cuerpo',
    'accesorios.html': 'accesorios',
    'collabs.html': 'collabs',
    'index.html': 'inicio',
    'producto.html': 'producto',
    '': 'inicio'
  };

  const SECTION_LABELS = window.EC_SECTION_LABELS || {
    rostro: 'Rostro', ojos: 'Ojos', labios: 'Labios', skincare: 'Skin Care', cuerpo: 'Cuerpo', accesorios: 'Accesorios', collabs: 'Collabs'
  };

  const SECTION_PAGES = window.EC_SECTION_PAGES || {
    rostro: 'rostro.html', ojos: 'ojos.html', labios: 'labios.html', skincare: 'skincare.html', cuerpo: 'cuerpo.html', accesorios: 'accesorios.html', collabs: 'collabs.html'
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function onReady(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function currentFile() {
    return (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  }

  function currentSection() {
    return PAGE_TO_SECTION[currentFile()] || currentFile().replace('.html', '');
  }

  function normalizeText(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function escapeHTML(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function productId(product) {
    return product?.id ?? product?.codigo ?? product?.sku ?? productName(product);
  }

  function productSection(product) {
    return product?._ecSection || product?.seccion || product?.section || sectionFromCategoryName(product?.categoria || product?.category || '') || currentSection();
  }

  function sectionFromCategoryName(value) {
    const text = normalizeText(value);
    if (text.includes('rostro') || text.includes('corrector') || text.includes('base') || text.includes('rubor')) return 'rostro';
    if (text.includes('ojo') || text.includes('sombra') || text.includes('pestana') || text.includes('ceja')) return 'ojos';
    if (text.includes('labio') || text.includes('lip') || text.includes('tinte')) return 'labios';
    if (text.includes('skin') || text.includes('cuidado') || text.includes('facial')) return 'skincare';
    if (text.includes('cuerpo') || text.includes('body')) return 'cuerpo';
    if (text.includes('accesorio') || text.includes('brocha') || text.includes('bolsa')) return 'accesorios';
    if (text.includes('collab') || text.includes('colaboracion')) return 'collabs';
    return '';
  }

  function productImage(product) {
    if (!product) return 'Logo.png';
    if (Array.isArray(product.imagenes)) return product.imagenes[0] || 'Logo.png';
    return product.imagenes || product.img || product.imagen || 'Logo.png';
  }

  function productName(product) {
    return product?.nombre || product?.name || 'Producto';
  }

  function inferBrand(product) {
    const text = normalizeText(`${productName(product)} ${product?.categoria || ''} ${product?.category || ''}`);
    const collaborations = [
      ['yerimua', 'YeriMua x Beauty Creations'],
      ['rosy mcmichael', 'Rosy McMichael x Beauty Creations'],
      ['victor guadarrama', 'Víctor Guadarrama x Beauty Creations'],
      ['luis torres', 'Luis Torres x Beauty Creations'],
      ['louie castro', 'Louie Castro x Beauty Creations'],
      ['powerpuff', 'The Powerpuff Girls x Beauty Creations'],
      ['chicas superpoderosas', 'The Powerpuff Girls x Beauty Creations'],
      ['barbie', 'Barbie x Beauty Creations'],
      ['betty boop', 'Betty Boop x Beauty Creations'],
      ['spongebob', 'SpongeBob x Beauty Creations'],
      ['bob sponja', 'SpongeBob x Beauty Creations'],
      ['bratz', 'Bratz x Beauty Creations'],
      ['my little pony', 'My Little Pony x Beauty Creations'],
      ['candy land', 'Candy Land x Beauty Creations']
    ];
    for (const [needle, label] of collaborations) {
      if (text.includes(needle)) return label;
    }
    const brands = [
      ['beauty creations skin', 'Beauty Creations Skin'],
      ['beauty creations', 'Beauty Creations'],
      ['prosa', 'Prosa']
    ];
    for (const [needle, label] of brands) {
      if (text.includes(needle)) return label;
    }
    return '';
  }

  function productBrand(product) {
    if (!product) return '';
    return product.marca || product.brand || product.fabricante || product.linea || product.line || inferBrand(product);
  }

  function productCategory(product) {
    return product?.categoria || product?.category || SECTION_LABELS[productSection(product)] || 'Cosmetico';
  }

  function productDescription(product) {
    return product?.descripcion || product?.description || '';
  }

  function productPrice(product) {
    if (!product) return '';
    const value = product.precio ?? product.price;
    if (value === undefined || value === null || value === '') return '';
    const number = Number(value);
    if (Number.isNaN(number)) return String(value);
    return `Q${number.toFixed(2)}`;
  }

  function productPriceLabel(product) {
    return productPrice(product) || 'Precio pendiente';
  }

  function productStateLabel(product) {
    return product?.estado || product?.status || 'Confirmar por WhatsApp';
  }

  function productUrl(product) {
    if (!product) return '#';
    const section = productSection(product);
    return `producto.html?categoria=${encodeURIComponent(section)}&id=${encodeURIComponent(String(productId(product)))}`;
  }

  function getAllProducts() {
    if (window.EC_GET_ALL_PRODUCTS) return window.EC_GET_ALL_PRODUCTS() || [];
    return Object.entries(window.EC_PRODUCTS || {}).flatMap(([section, products]) => {
      return (products || []).map((product, index) => {
        if (product && typeof product === 'object') {
          product._ecSection = product._ecSection || section;
          product._ecSectionIndex = typeof product._ecSectionIndex === 'number' ? product._ecSectionIndex : index;
        }
        return product;
      });
    });
  }

  function getProductsForPage() {
    const section = currentSection();
    if (section === 'producto') return getAllProducts();
    if (section === 'collabs' && window.EC_GET_COLLAB_PRODUCTS) return window.EC_GET_COLLAB_PRODUCTS() || [];
    if (window.EC_GET_PRODUCTS) return window.EC_GET_PRODUCTS(section) || [];
    if (section === 'inicio') return window.EC_TOP_PRODUCTS || [];
    return (window.EC_PRODUCTS && window.EC_PRODUCTS[section]) || [];
  }

  function findProductByName(name) {
    const target = normalizeText(name);
    const local = getProductsForPage().find(product => normalizeText(productName(product)) === target);
    if (local) return local;
    return getAllProducts().find(product => normalizeText(productName(product)) === target) || null;
  }

  function findProductByModal() {
    const title = $('#modal-title')?.textContent.trim();
    return title ? findProductByName(title) : null;
  }

  function productDateScore(product) {
    const raw = product?.fechaAgregado || product?.fecha || product?.createdAt || product?.created || '';
    const time = raw ? Date.parse(raw) : NaN;
    if (!Number.isNaN(time)) return time;
    return Number(product?._ecGlobalOrder || product?._ecSectionIndex || 0);
  }

  function productIsNew(product) {
    const tag = normalizeText(product?.tag || product?.etiqueta || '');
    return tag.includes('nuevo') || tag.includes('new') || product?.nuevo === true;
  }

  function toneName(item) {
    return typeof item === 'object' ? (item.nombre || item.name || item.titulo || '') : String(item || '');
  }

  function toneHex(item) {
    return typeof item === 'object' ? (item.hex || item.color || item.codigoColor || '') : '';
  }

  function toneImageFromItem(item) {
    if (!item || typeof item !== 'object') return '';
    return item.imagen || item.image || item.img || item.src || item.foto || '';
  }

  function inferToneImage(product, toneIndex) {
    const images = Array.isArray(product?.imagenes) ? product.imagenes : [];
    const tones = Array.isArray(product?.tonos) ? product.tonos : [];
    if (!images.length || toneIndex < 0 || !tones.length) return '';
    if (images.length >= (tones.length * 2) + 1) return images[1 + toneIndex * 2] || '';
    if (images.length >= tones.length + 1) return images[1 + toneIndex] || '';
    return '';
  }

  function getSelectedToneName() {
    const feedback = ($('#tono-feedback')?.textContent || '').replace('Seleccionado:', '').trim();
    if (feedback) return feedback;
    const selected = $('.tono-btn.selected');
    return selected ? selected.textContent.trim() : '';
  }

  function insertToolbarForProductPages() {
    const grid = $('#grid-productos');
    const renderFn = window.renderizarProductos;
    const products = getProductsForPage();
    if (!grid || typeof renderFn !== 'function' || !products.length || $('.ec-shop-toolbar')) return;

    const categoriesContainer = $('#categorias-container');
    const toolbar = document.createElement('div');
    toolbar.className = 'ec-shop-toolbar';
    toolbar.innerHTML = `
      <div class="ec-search-wrap">
        <i class="fas fa-search"></i>
        <input id="ec-product-search" type="search" autocomplete="off" placeholder="Buscar por nombre, marca, tono o categoria...">
      </div>
      <select id="ec-product-sort" aria-label="Ordenar productos">
        <option value="original">Orden original</option>
        <option value="nuevo">Nuevo primero</option>
        <option value="precio-menor">Precio: menor a mayor</option>
        <option value="precio-mayor">Precio: mayor a menor</option>
        <option value="az">Nombre A-Z</option>
        <option value="za">Nombre Z-A</option>
        <option value="tonos">Con tonos primero</option>
      </select>
      <div class="ec-toolbar-actions">
        <span id="ec-result-count" class="ec-toolbar-count">${products.length} productos</span>
        <button type="button" id="ec-clear-filters" class="ec-toolbar-clear">Limpiar</button>
      </div>
    `;

    if (categoriesContainer) categoriesContainer.parentNode.insertBefore(toolbar, categoriesContainer);
    else grid.parentNode.insertBefore(toolbar, grid);

    const searchInput = $('#ec-product-search');
    const sortSelect = $('#ec-product-sort');
    const clearButton = $('#ec-clear-filters');
    const count = $('#ec-result-count');

    function emptyState(query) {
      window.setTimeout(() => {
        if (!grid.children.length) {
          grid.innerHTML = `
            <div class="ec-no-results">
              <i class="fas fa-search"></i>
              <h3>Sin resultados</h3>
              <p>No encontramos productos con "${escapeHTML(query)}". Prueba con otra palabra o limpia el filtro.</p>
            </div>`;
        }
      }, 90);
    }

    function priceNumber(product) {
      const value = Number(product?.precio ?? product?.price);
      return Number.isNaN(value) ? Number.POSITIVE_INFINITY : value;
    }

    function applyFilters() {
      const query = normalizeText(searchInput.value.trim());
      let filtered = products.filter(product => {
        const tonos = Array.isArray(product.tonos) ? product.tonos.map(toneName).join(' ') : '';
        const haystack = normalizeText([
          productName(product),
          productBrand(product),
          productCategory(product),
          product.tag,
          productDescription(product),
          productPriceLabel(product),
          tonos
        ].join(' '));
        return !query || haystack.includes(query);
      });

      if (sortSelect.value === 'nuevo') filtered.sort((a, b) => Number(productIsNew(b)) - Number(productIsNew(a)) || productDateScore(b) - productDateScore(a));
      if (sortSelect.value === 'az') filtered.sort((a, b) => productName(a).localeCompare(productName(b)));
      if (sortSelect.value === 'za') filtered.sort((a, b) => productName(b).localeCompare(productName(a)));
      if (sortSelect.value === 'tonos') filtered.sort((a, b) => Number(!!b.tonos?.length) - Number(!!a.tonos?.length));
      if (sortSelect.value === 'precio-menor') filtered.sort((a, b) => priceNumber(a) - priceNumber(b));
      if (sortSelect.value === 'precio-mayor') filtered.sort((a, b) => priceNumber(b) - priceNumber(a));

      count.textContent = `${filtered.length} de ${products.length} productos`;
      renderFn(filtered);
      if (!filtered.length) emptyState(searchInput.value.trim());
    }

    searchInput.addEventListener('input', applyFilters);
    sortSelect.addEventListener('change', applyFilters);
    clearButton.addEventListener('click', () => {
      searchInput.value = '';
      sortSelect.value = 'original';
      $$('.cat-filter-btn').forEach((btn, index) => {
        btn.classList.toggle('bg-brand-black', index === 0);
        btn.classList.toggle('text-white', index === 0);
        btn.classList.toggle('border-transparent', index === 0);
        btn.classList.toggle('bg-white', index !== 0);
        btn.classList.toggle('text-gray-600', index !== 0);
      });
      applyFilters();
    });
  }

  function readCart() {
    try { return JSON.parse(localStorage.getItem(CONFIG.cartKey)) || []; }
    catch (e) { return []; }
  }

  function saveCart(cart) {
    localStorage.setItem(CONFIG.cartKey, JSON.stringify(cart));
  }

  function cartCount(cart = readCart()) {
    return cart.reduce((sum, item) => sum + Number(item.qty || 1), 0);
  }

  function showToast(message) {
    let toast = $('.ec-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'ec-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => toast.classList.remove('show'), 1800);
  }

  function addToOfficialOrder(item) {
    const cart = readCart();
    const key = `${item.name}__${item.tone || ''}`;
    const existing = cart.find(entry => entry.key === key);
    if (existing) existing.qty += 1;
    else cart.push({ key, qty: 1, ...item });
    saveCart(cart);
    updateFloatingCount();
    renderDrawer();
    showToast('Producto agregado a tu pedido');
  }

  function updateItem(key, delta) {
    const cart = readCart();
    const item = cart.find(entry => entry.key === key);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) saveCart(cart.filter(entry => entry.key !== key));
    else saveCart(cart);
    updateFloatingCount();
    renderDrawer();
  }

  function removeItem(key) {
    saveCart(readCart().filter(entry => entry.key !== key));
    updateFloatingCount();
    renderDrawer();
  }

  function buildWhatsAppMessage() {
    const cart = readCart();
    if (!cart.length) return 'Hola, quiero consultar productos de Esmeralda\'s Cosmetic.';
    const lines = cart.map((item, index) => {
      const tone = item.tone ? ` | Tono/variante: ${item.tone}` : '';
      const price = item.price ? ` | Precio: ${item.price}` : '';
      return `${index + 1}. ${item.name}${tone}${price} | Cantidad: ${item.qty}`;
    });
    return `Hola, quiero consultar disponibilidad de este pedido:\n\n${lines.join('\n')}\n\nGracias.`;
  }

  function whatsappUrl(message) {
    return `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`;
  }

  function updateFloatingCount() {
    const badge = $('.ec-cart-count');
    if (badge) badge.textContent = cartCount();
  }

  function createFloatingActions() {
    if ($('.ec-floating-wa')) return;
    const wa = document.createElement('a');
    wa.className = 'ec-floating-wa';
    wa.href = whatsappUrl('Hola, quiero recibir asesoria de Esmeralda\'s Cosmetic.');
    wa.target = '_blank';
    wa.rel = 'noopener';
    wa.setAttribute('aria-label', 'Escribir por WhatsApp');
    wa.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(wa);

    const cartBtn = document.createElement('button');
    cartBtn.type = 'button';
    cartBtn.className = 'ec-floating-cart';
    cartBtn.setAttribute('aria-label', 'Abrir pedido');
    cartBtn.innerHTML = '<i class="fas fa-bag-shopping"></i><span class="ec-cart-count">0</span>';
    cartBtn.addEventListener('click', openDrawer);
    document.body.appendChild(cartBtn);
    updateFloatingCount();
  }

  function createDrawer() {
    if ($('#cart-sidebar') || $('.ec-order-drawer')) return;
    const overlay = document.createElement('div');
    overlay.className = 'ec-drawer-overlay';
    overlay.addEventListener('click', closeDrawer);

    const drawer = document.createElement('aside');
    drawer.className = 'ec-order-drawer';
    drawer.setAttribute('aria-label', 'Pedido por WhatsApp');
    drawer.innerHTML = `
      <div class="ec-drawer-head">
        <div>
          <small class="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Compra asistida</small>
          <h3>Mi pedido</h3>
        </div>
        <button type="button" class="ec-drawer-close" aria-label="Cerrar pedido"><i class="fas fa-times"></i></button>
      </div>
      <div class="ec-drawer-body" id="ec-order-items"></div>
      <div class="ec-drawer-foot">
        <a id="ec-wa-order" class="ec-wa-order" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> Enviar por WhatsApp</a>
        <button id="ec-clear-order" type="button" class="ec-clear-order">Vaciar pedido</button>
        <p class="ec-order-note">El pedido se confirma por WhatsApp. La disponibilidad y entrega se coordinan antes de finalizar.</p>
      </div>
    `;
    drawer.querySelector('.ec-drawer-close').addEventListener('click', closeDrawer);
    drawer.querySelector('#ec-clear-order').addEventListener('click', () => {
      saveCart([]);
      updateFloatingCount();
      renderDrawer();
    });

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
    renderDrawer();
  }

  function openDrawer() {
    createDrawer();
    renderDrawer();
    $('.ec-drawer-overlay')?.classList.add('open');
    $('.ec-order-drawer')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    $('.ec-drawer-overlay')?.classList.remove('open');
    $('.ec-order-drawer')?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderDrawer() {
    const container = $('#ec-order-items');
    const link = $('#ec-wa-order');
    if (!container || !link) return;
    const cart = readCart();
    link.href = whatsappUrl(buildWhatsAppMessage());

    if (!cart.length) {
      container.innerHTML = `
        <div class="ec-order-empty">
          <div>
            <i class="fas fa-bag-shopping text-3xl text-gray-300 mb-3"></i>
            <p class="font-bold text-sm text-black">Tu pedido esta vacio</p>
            <p class="text-xs mt-1">Abre un producto y presiona "Agregar a mi pedido".</p>
          </div>
        </div>`;
      return;
    }

    container.innerHTML = cart.map(item => `
      <article class="ec-order-item">
        <img src="${escapeHTML(item.image || 'Logo.png')}" alt="${escapeHTML(item.name)}">
        <div>
          <h4>${escapeHTML(item.name)}</h4>
          <p>${item.brand ? `${escapeHTML(item.brand)} · ` : ''}${escapeHTML(item.category || 'Producto')}${item.tone ? ` · ${escapeHTML(item.tone)}` : ''}${item.price ? ` · ${escapeHTML(item.price)}` : ''}</p>
          <div class="ec-order-qty">
            <button type="button" data-qty="-1" data-key="${escapeHTML(item.key)}">−</button>
            <span class="text-xs font-bold">${item.qty}</span>
            <button type="button" data-qty="1" data-key="${escapeHTML(item.key)}">+</button>
          </div>
        </div>
        <button type="button" class="ec-remove-item" data-remove="${escapeHTML(item.key)}" aria-label="Quitar"><i class="fas fa-trash"></i></button>
      </article>
    `).join('');

    $$('[data-qty]', container).forEach(button => {
      button.addEventListener('click', () => updateItem(button.dataset.key, Number(button.dataset.qty)));
    });
    $$('[data-remove]', container).forEach(button => {
      button.addEventListener('click', () => removeItem(button.dataset.remove));
    });
  }

  function ensureModalPricePanel() {
    const title = $('#modal-title');
    if (!title) return null;
    let panel = $('.ec-modal-price-panel');
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'ec-modal-price-panel';
      title.insertAdjacentElement('afterend', panel);
    }
    return panel;
  }

  function ensureProductPageLink() {
    const modalBtn = $('#modal-btn');
    if (!modalBtn) return null;
    let link = $('.ec-product-page-link');
    if (!link) {
      link = document.createElement('a');
      link.className = 'ec-product-page-link';
      link.textContent = 'Ver producto';
      modalBtn.insertAdjacentElement('beforebegin', link);
    }
    return link;
  }

  function updateModalOfficialInfo() {
    const found = findProductByModal();
    const extra = $('.ec-modal-extra');
    const panel = ensureModalPricePanel();
    const pageLink = ensureProductPageLink();
    if (!found) return;

    const price = productPriceLabel(found);
    const state = productStateLabel(found);
    const section = productSection(found);

    if (panel) {
      panel.className = `ec-modal-price-panel ${productPrice(found) ? 'is-ready' : 'is-pending'}`;
      panel.innerHTML = `
        <span>${escapeHTML(brand || SECTION_LABELS[section] || productCategory(found))}</span>
        <strong>${escapeHTML(price)}</strong>
        <small>${escapeHTML(state)}</small>
      `;
    }

    if (extra) {
      extra.innerHTML = `
        ${productBrand(found) ? `<div class="ec-modal-extra-row"><span>Marca</span><strong>${escapeHTML(productBrand(found))}</strong></div>` : ''}
        <div class="ec-modal-extra-row"><span>Precio</span><strong>${escapeHTML(price)}</strong></div>
        <div class="ec-modal-extra-row"><span>Disponibilidad</span><strong>${escapeHTML(state)}</strong></div>
        <div class="ec-modal-extra-row"><span>Pedido</span><strong>Agrega varios productos y envialos juntos</strong></div>
      `;
    }

    if (pageLink) {
      pageLink.href = productUrl(found);
      pageLink.setAttribute('target', '_self');
    }
  }

  function watchModalChanges() {
    const title = $('#modal-title');
    if (!title || title.dataset.ecWatching) return;
    title.dataset.ecWatching = 'true';
    const observer = new MutationObserver(() => window.setTimeout(enhanceCurrentModal, 40));
    observer.observe(title, { childList: true, characterData: true, subtree: true });
  }

  function enhanceModal() {
    const modalBtn = $('#modal-btn');
    const modalTitle = $('#modal-title');
    if (!modalBtn || !modalTitle) return;

    document.body.classList.add('ec-has-product-modal');

    if (!$('.ec-modal-extra')) {
      const extra = document.createElement('div');
      extra.className = 'ec-modal-extra';
      extra.innerHTML = `
        <div class="ec-modal-extra-row"><span>Disponibilidad</span><strong>Confirmar por WhatsApp</strong></div>
        <div class="ec-modal-extra-row"><span>Pedido</span><strong>Agrega varios productos y envialos juntos</strong></div>
      `;
      modalBtn.parentNode.insertBefore(extra, modalBtn);
    }

    if (!$('.ec-add-order-btn')) {
      const addButton = document.createElement('button');
      addButton.type = 'button';
      addButton.className = 'ec-add-order-btn';
      addButton.innerHTML = '<i class="fas fa-plus"></i> Agregar a mi pedido';
      modalBtn.insertAdjacentElement('afterend', addButton);
      addButton.addEventListener('click', () => {
        const toneText = getSelectedToneName();
        const found = findProductByModal();
        addToOfficialOrder({
          name: modalTitle.textContent.trim() || 'Producto',
          category: $('#modal-categoria-text')?.textContent.trim() || productCategory(found) || currentSection(),
          brand: productBrand(found),
          tone: toneText,
          price: productPriceLabel(found),
          image: $('#modal-img')?.getAttribute('src') || productImage(found)
        });
        openDrawer();
      });
    }

    ensureModalPricePanel();
    ensureProductPageLink();
    watchModalChanges();
    updateModalOfficialInfo();
  }

  function applyToneImage() {
    const product = findProductByModal();
    const tone = getSelectedToneName();
    if (!product || !tone || !Array.isArray(product.tonos)) return;
    const toneIndex = product.tonos.findIndex(item => normalizeText(toneName(item)) === normalizeText(tone));
    const selectedTone = product.tonos[toneIndex];
    const image = toneImageFromItem(selectedTone) || inferToneImage(product, toneIndex);
    const modalImage = $('#modal-img');
    if (image && modalImage) modalImage.src = image;
    $$('.thumb-img').forEach(thumb => {
      if (image) thumb.classList.toggle('selected', thumb.getAttribute('src') === image);
    });
  }

  function decorateToneButtons() {
    const product = findProductByModal();
    if (!product || !Array.isArray(product.tonos)) return;
    $$('.tono-btn').forEach((button, index) => {
      const tone = product.tonos[index];
      const image = toneImageFromItem(tone) || inferToneImage(product, index);
      button.classList.add('ec-tone-btn');
      button.dataset.toneIndex = String(index);
      if (image) button.dataset.toneImage = image;
      const name = toneName(tone);
      if (name && !button.getAttribute('aria-label')) button.setAttribute('aria-label', `Seleccionar tono ${name}`);
    });
  }

  function enhanceCurrentModal() {
    enhanceModal();
    decorateToneButtons();
    updateModalOfficialInfo();
    applyToneImage();
  }

  function observeToneImages() {
    document.addEventListener('click', event => {
      if (event.target.closest('.tono-btn')) {
        window.setTimeout(() => {
          decorateToneButtons();
          applyToneImage();
          updateModalOfficialInfo();
        }, 30);
      }
    });
  }

  function wrapOpenModal() {
    if (typeof window.openModal !== 'function' || window.openModal.__ecWrapped) return;
    const originalOpenModal = window.openModal;
    window.openModal = function (...args) {
      const result = originalOpenModal.apply(this, args);
      window.setTimeout(enhanceCurrentModal, 60);
      return result;
    };
    window.openModal.__ecWrapped = true;
  }

  function injectAssistanceCTA() {
    if ($('.ec-assistance') || currentFile() === 'agregar-producto.html') return;
    const footer = $('footer');
    if (!footer) return;
    const section = document.createElement('section');
    section.className = 'ec-assistance';
    section.innerHTML = `
      <div>
        <small>Asesoria personalizada</small>
        <h2>¿No sabes que producto elegir?</h2>
        <p>Escribenos y te ayudamos a elegir tono, acabado, set o regalo. Puedes agregar varios productos a tu pedido y enviarlos juntos por WhatsApp.</p>
      </div>
      <a href="${whatsappUrl('Hola, necesito asesoria para elegir maquillaje.')}" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> Pedir asesoria</a>
    `;
    footer.parentNode.insertBefore(section, footer);
  }

  function markActiveNav() {
    const file = currentFile();
    $$('a[href]').forEach(anchor => {
      const href = anchor.getAttribute('href') || '';
      if (href === file || (file === 'index.html' && href === 'index.html')) anchor.setAttribute('aria-current', 'page');
    });
  }

  function enhanceProductCards() {
    const grids = ['#grid-productos', '#grid-productos-top', '#ec-home-new-grid', '#ec-home-tones-grid', '#ec-related-grid'];
    grids.forEach(selector => {
      const grid = $(selector);
      if (!grid) return;
      $$('.group, .ec-product-card', grid).forEach(card => {
        const title = $('h3', card) || $('[data-product-title]', card);
        if (!title) return;
        const product = findProductByName(title.textContent.trim());
        if (!product) return;

        const brand = productBrand(product);
        if (brand && !$('.ec-card-brand', card)) {
          const brandLine = document.createElement('p');
          brandLine.className = 'ec-card-brand';
          brandLine.textContent = brand;
          title.insertAdjacentElement('beforebegin', brandLine);
        }

        if (!$('.ec-card-price', card)) {
          const price = document.createElement('p');
          price.className = `ec-card-price ${productPrice(product) ? 'is-ready' : 'is-pending'}`;
          price.textContent = productPriceLabel(product);
          title.insertAdjacentElement('afterend', price);
        }

        const url = productUrl(product);
        card.dataset.ecProductUrl = url;
        card.setAttribute('role', 'link');
        card.setAttribute('tabindex', '0');
        card.onclick = event => {
          if (event.target.closest('a')) return;
          window.location.href = url;
        };
        card.onkeydown = event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            window.location.href = url;
          }
        };
        $$('button', card).forEach(button => {
          const text = normalizeText(button.textContent);
          if (text.includes('ver') || text.includes('vista')) button.textContent = 'Ver producto';
          button.type = 'button';
          button.onclick = event => {
            event.stopPropagation();
            window.location.href = url;
          };
        });
        $$('.ec-card-page-link', card).forEach(link => link.remove());
      });
    });
  }

  function observeProductCards() {
    ['#grid-productos', '#grid-productos-top', '#ec-home-new-grid', '#ec-home-tones-grid', '#ec-related-grid'].forEach(selector => {
      const grid = $(selector);
      if (!grid || grid.dataset.ecPriceObserver) return;
      grid.dataset.ecPriceObserver = 'true';
      const observer = new MutationObserver(() => window.setTimeout(enhanceProductCards, 80));
      observer.observe(grid, { childList: true, subtree: true });
    });
    window.setTimeout(enhanceProductCards, 120);
  }

  function updateFooterYear() {
    $$('footer p').forEach(p => {
      if (p.textContent.includes('©')) p.innerHTML = p.innerHTML.replace(/2024|2025|2026/g, new Date().getFullYear());
    });
  }

  function exposeHelpers() {
    window.EC_ADD_TO_ORDER = addToOfficialOrder;
    window.EC_OPEN_ORDER = openDrawer;
    window.EC_PRODUCT_HELPERS = {
      productUrl,
      productPrice,
      productPriceLabel,
      productImage,
      productName,
      productCategory,
      productDescription,
      productBrand,
      productStateLabel,
      productSection,
      getAllProducts,
      whatsappUrl,
      toneName,
      toneHex,
      toneImageFromItem,
      inferToneImage,
      productIsNew,
      productDateScore
    };
  }

  onReady(() => {
    document.body.classList.add('ec-official');
    exposeHelpers();
    insertToolbarForProductPages();
    createFloatingActions();
    createDrawer();
    wrapOpenModal();
    enhanceModal();
    watchModalChanges();
    observeProductCards();
    observeToneImages();
    injectAssistanceCTA();
    markActiveNav();
    updateFooterYear();
  });
})();
