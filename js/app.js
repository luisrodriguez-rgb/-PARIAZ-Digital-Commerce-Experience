/**
 * PARIAZ DIGITAL STORE — Core Application Engine
 * Compatible con file:// y http:// (Cero dependencias externas, 100% robusto).
 */

(function () {
  'use strict';

  // =========================================================================
  // 01. BASE DE DATOS DE PRODUCTOS Y ARTISTAS
  // =========================================================================
  const PRODUCTS = [
    {
      id: "pariaz-manos",
      name: "Camiseta Pariaz Manos & Luz",
      price: 140000,
      originalPrice: 180000,
      rating: "5.0",
      reviewsCount: "1.4k",
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Drop 004 — Signature",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "PIEZA INSIGNIA",
      image: "assets/products/camisa-manos.jpeg",
      description: "Silueta insignia de Pariaz confeccionada en algodón peinado de 240g con fit streetwear holgado. Estampado serigráfico en tramado semitono de manos elevando la 'P' cósmica.",
      details: ["100% Algodón Premium 240 GSM", "Corte Boxy Streetwear", "Estampado tramado de alta durabilidad", "Hecho en Medellín"],
      matching: [
        { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/brand/logo.jpeg" },
        { id: "conjunto-hades", name: "Pantalón Jogger Sand", price: 240000, image: "assets/artists/hades.jpeg" }
      ]
    },
    {
      id: "pariaz-krisr",
      name: "Camiseta Crimson Security & Trust",
      price: 170000,
      originalPrice: 210000,
      rating: "4.9",
      reviewsCount: "890",
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Worn by Kris R",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "WORN BY KRIS R",
      image: "assets/artists/krisr.jpeg",
      description: "Pieza exclusiva vista en Kris R. Base en negro profundo con la 'P' gótica en serigrafía degradada roja carmesí y firma 'Security and trust'.",
      details: ["Serigrafía táctil degradada", "Cuello acanalado de 3cm", "Gramaje pesado 240 GSM", "Etiqueta tejida en dobladillo"],
      matching: [
        { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/brand/logo.jpeg" },
        { id: "pariaz-manos", name: "Camiseta Manos & Luz", price: 140000, image: "assets/products/camisa-manos.jpeg" }
      ]
    },
    {
      id: "pariaz-jonz",
      name: "Camiseta Ángeles Heaven Gate",
      price: 180000,
      originalPrice: 230000,
      rating: "5.0",
      reviewsCount: "654",
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Worn by Jon Z",
      sizes: ["S", "M", "L", "XL"],
      badge: "WORN BY JON Z",
      image: "assets/artists/jonz.jpeg",
      description: "Pieza de autor lucida por Jon Z en vivo. Composición barroca con ángeles heraldos, leones guardianes y la emblemática 'P' celestial.",
      details: ["Serigrafía discharge al agua", "Algodón pre-lavado vintage", "Edición numerada", "Costuras reforzadas"],
      matching: [
        { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/brand/logo.jpeg" }
      ]
    },
    {
      id: "conjunto-hades",
      name: "Conjunto Corona Desert Sand Suit",
      price: 400000,
      originalPrice: 500000,
      rating: "5.0",
      reviewsCount: "340",
      category: "conjuntos",
      categoryLabel: "Conjuntos",
      collection: "Worn by Hades 66",
      sizes: ["S", "M", "L", "XL"],
      badge: "FULL SUIT",
      image: "assets/artists/hades.jpeg",
      description: "Set completo de 2 piezas (Camiseta Oversize + Pantalón Jogger) lucido por Hades 66. Diseño de corona de espinas en tono arena desierto.",
      details: ["Set de 2 piezas completas", "Algodón perchado y gabardina", "Bolsillos funcionales y cordones", "Fit Streetwear auténtico"],
      matching: [
        { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/brand/logo.jpeg" }
      ]
    },
    {
      id: "p-blanca",
      name: "Camiseta de la P Blanca Classic",
      price: 140000,
      originalPrice: 170000,
      rating: "4.8",
      reviewsCount: "1.1k",
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Drop 001 — La P",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "BEST SELLER",
      image: "assets/products/camisa-manos.jpeg",
      description: "Camiseta blanca de algodón pesado 240 GSM con el monograma 'P' serigrafiado al frente. Un clásico esencial del streetwear.",
      details: ["100% Algodón 240g", "Cuello grueso de 3cm", "Corte Boxy holgado"],
      matching: [
        { id: "conjunto-hades", name: "Pantalón Jogger Sand", price: 240000, image: "assets/artists/hades.jpeg" }
      ]
    },
    {
      id: "p-piedras",
      name: "Camiseta P Morada con Pedrería",
      price: 170000,
      originalPrice: 220000,
      rating: "4.9",
      reviewsCount: "430",
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Edición Especial",
      sizes: ["S", "M", "L", "XL"],
      badge: "SPECIAL EDITION",
      image: "assets/artists/coscu.jpeg",
      description: "Pieza de autor con aplicaciones de cristales y pedrería térmica sobre base púrpura profunda.",
      details: ["Pedrería checa de alta fijación", "Algodón teñido en prenda", "Edición limitada"],
      matching: [
        { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/brand/logo.jpeg" }
      ]
    },
    {
      id: "conjunto-azul",
      name: "Conjunto Pariaz Azul Royal Track",
      price: 500000,
      originalPrice: 620000,
      rating: "5.0",
      reviewsCount: "210",
      category: "conjuntos",
      categoryLabel: "Conjuntos",
      collection: "Full Suits",
      sizes: ["S", "M", "L", "XL"],
      badge: "VIP SUIT",
      image: "assets/artists/luar.jpeg",
      description: "Conjunto de dos piezas (Chaqueta Track + Pantalón Cargo) en gabardina técnica con cierres termosellados.",
      details: ["Chaqueta + Pantalón", "Herrajes grabados en láser", "Resistente al agua"],
      matching: [
        { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/brand/logo.jpeg" }
      ]
    },
    {
      id: "buzo-pariaz",
      name: "Buzo Hoodie Pariaz Heavyweight",
      price: 220000,
      originalPrice: 280000,
      rating: "4.9",
      reviewsCount: "780",
      category: "buzos",
      categoryLabel: "Buzos",
      collection: "Winter Streets",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "ESSENTIAL",
      image: "assets/artists/coscu.jpeg",
      description: "Hoodie de algodón perchado térmico 380 GSM con capucha estructurada doble capa y bolsillo canguro reforzado.",
      details: ["Algodón 380g perchado", "Capucha doble sin cordones", "Bordado tonal Pariaz"],
      matching: [
        { id: "pariaz-manos", name: "Camiseta Manos & Luz", price: 140000, image: "assets/products/camisa-manos.jpeg" }
      ]
    },
    {
      id: "gorra-p",
      name: "Gorra Pariaz Corona / P 3D",
      price: 95000,
      originalPrice: 120000,
      rating: "4.8",
      reviewsCount: "950",
      category: "gorras",
      categoryLabel: "Gorras",
      collection: "Headwear 01",
      sizes: ["Talla Única"],
      badge: "HEADWEAR",
      image: "assets/brand/logo.jpeg",
      description: "Gorra trucker estructurada de 5 paneles con visera semi-curva, bordado puff 3D y broche snapback ajustable.",
      details: ["Bordado 3D de alta densidad", "Malla trasera transpirable", "Broche snapback ajustable"],
      matching: [
        { id: "pariaz-manos", name: "Camiseta Manos & Luz", price: 140000, image: "assets/products/camisa-manos.jpeg" }
      ]
    },
    {
      id: "mujer-coleccion",
      name: "Top & Crop Tee Pariaz Femme",
      price: 140000,
      originalPrice: 175000,
      rating: "4.9",
      reviewsCount: "310",
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Pariaz Femme",
      sizes: ["XS", "S", "M", "L"],
      badge: "PARIAZ FEMME",
      image: "assets/products/camisa-manos.jpeg",
      description: "Prenda de silueta crop entallada con elastómero acanalado de tacto suave y logo Pariaz micro-grabado.",
      details: ["Algodón elastano acanalado", "Tacto segunda piel", "Bordado sutil"],
      matching: [
        { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/brand/logo.jpeg" }
      ]
    },
    {
      id: "angeles-verde",
      name: "Edición Limitada Ángeles Verde Bosque",
      price: 180000,
      originalPrice: 240000,
      rating: "5.0",
      reviewsCount: "190",
      category: "limited",
      categoryLabel: "Limitadas",
      collection: "Drop Ángeles Vault",
      sizes: ["S", "M", "L", "XL"],
      badge: "NO VUELVE",
      image: "assets/artists/jonz.jpeg",
      description: "Tiraje único e irrepetible en verde esmeralda con tintas reflectivas. Incluye certificado seriado de autenticidad.",
      details: ["Certificado seriado de drop", "Tintas ecológicas reflectivas", "Corte holgado"],
      matching: [
        { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/brand/logo.jpeg" }
      ]
    }
  ];

  const ARTISTS = [
    { name: "Kris R", avatar: "assets/artists/krisr.jpeg", image: "assets/artists/krisr.jpeg", headline: "KRIS R EN VIVO CON PARIAZ", subhead: "Camiseta Crimson Security & Trust.", prodId: "pariaz-krisr" },
    { name: "Hades 66", avatar: "assets/artists/hades.jpeg", image: "assets/artists/hades.jpeg", headline: "HADES 66 — DESERT SUIT", subhead: "Conjunto Corona Desert Sand Suit de 2 piezas.", prodId: "conjunto-hades" },
    { name: "Jon Z", avatar: "assets/artists/jonz.jpeg", image: "assets/artists/jonz.jpeg", headline: "JON Z ON TOUR CON PARIAZ", subhead: "Camiseta Ángeles Heaven Gate en tarima.", prodId: "pariaz-jonz" },
    { name: "Cosculluela", avatar: "assets/artists/coscu.jpeg", image: "assets/artists/coscu.jpeg", headline: "COSCU x PARIAZ CULTURE", subhead: "Prendas exclusivas de autor.", prodId: "buzo-pariaz" },
    { name: "Luar La L", avatar: "assets/artists/luar.jpeg", image: "assets/artists/luar.jpeg", headline: "LUAR LA L EN ESTUDIO", subhead: "Conjunto Pariaz Azul Royal Track.", prodId: "conjunto-azul" }
  ];

  const LOOKS_DATA = {
    'hades': {
      title: 'HADES 66 — FULL DESERT SUIT',
      image: 'assets/looks/hades-look.jpeg',
      items: [
        { num: '01', name: 'Camiseta Corona de Espinas Sand', price: '$160.000 COP', id: 'conjunto-hades', size: 'L' },
        { num: '02', name: 'Pantalón Jogger Pariaz Desert Sand', price: '$240.000 COP', id: 'conjunto-hades', size: 'L' }
      ],
      totalCOP: '$400.000 COP',
      hotspots: [
        { top: '35%', left: '46%', label: 'Camiseta Corona ($160k)', id: 'conjunto-hades' },
        { top: '68%', left: '42%', label: 'Jogger Desert Sand ($240k)', id: 'conjunto-hades' }
      ]
    },
    'krisr': {
      title: 'KRIS R — CRIMSON SECURITY OUTFIT',
      image: 'assets/looks/krisr-look.jpeg',
      items: [
        { num: '01', name: 'Camiseta Crimson Security & Trust', price: '$170.000 COP', id: 'pariaz-krisr', size: 'XL' },
        { num: '02', name: 'Gorra Pariaz Corona 3D', price: '$95.000 COP', id: 'gorra-p', size: 'Talla Única' }
      ],
      totalCOP: '$265.000 COP',
      hotspots: [
        { top: '48%', left: '48%', label: 'Camiseta Crimson ($170k)', id: 'pariaz-krisr' }
      ]
    },
    'jonz': {
      title: 'JON Z — ÁNGELES HEAVEN OUTFIT',
      image: 'assets/artists/jonz.jpeg',
      items: [
        { num: '01', name: 'Camiseta Ángeles Heaven Gate', price: '$180.000 COP', id: 'pariaz-jonz', size: 'L' },
        { num: '02', name: 'Gorra Pariaz Corona 3D', price: '$95.000 COP', id: 'gorra-p', size: 'Talla Única' }
      ],
      totalCOP: '$275.000 COP',
      hotspots: [
        { top: '46%', left: '48%', label: 'Camiseta Ángeles ($180k)', id: 'pariaz-jonz' }
      ]
    }
  };

  // =========================================================================
  // 02. ESTADO DEL CARRITO & WISHLIST
  // =========================================================================
  let cartItems = [];
  let wishlist = [];
  let appliedCoupon = null;
  let activeProduct = null;
  let selectedSize = 'L';
  let selectedQty = 1;
  let currentCategory = 'all';
  let searchQuery = '';
  let currentLookKey = 'hades';
  let storyTimer = null;

  function formatCOP(val) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(val) + ' COP';
  }

  function showToast(msg) {
    let toast = document.getElementById('pariaz-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'pariaz-toast';
      toast.className = 'pariaz-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  function loadState() {
    try {
      const c = localStorage.getItem('prz_cart_v4');
      if (c) cartItems = JSON.parse(c);
      const w = localStorage.getItem('prz_wish_v4');
      if (w) wishlist = JSON.parse(w);
    } catch (e) {}
  }

  function saveState() {
    try {
      localStorage.setItem('prz_cart_v4', JSON.stringify(cartItems));
      localStorage.setItem('prz_wish_v4', JSON.stringify(wishlist));
    } catch (e) {}
    renderCart();
  }

  function addToCart(product, size, qty) {
    size = size || (product.sizes ? product.sizes[0] : 'L');
    qty = qty || 1;
    const key = `${product.id}_${size}`;
    const exist = cartItems.find(i => i.key === key);
    if (exist) {
      exist.qty += qty;
    } else {
      cartItems.push({
        key,
        id: product.id,
        name: product.name,
        price: product.price,
        size: size,
        qty: qty,
        image: product.image
      });
    }
    saveState();
    openCart();
    showToast(`Añadido a la bolsa: ${product.name} (${size})`);
  }

  function toggleWishlist(id) {
    const idx = wishlist.indexOf(id);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast('Eliminado de tus guardados');
    } else {
      wishlist.push(id);
      showToast('Guardado en tus favoritos');
    }
    saveState();
    renderCatalog();
  }

  function getSubtotal() {
    let sub = cartItems.reduce((acc, i) => acc + (i.price * i.qty), 0);
    if (appliedCoupon === 'PARIAZVIP') {
      sub = sub * 0.9;
    }
    return Math.round(sub);
  }

  function openCart() {
    const d = document.getElementById('cart-drawer');
    const o = document.getElementById('cart-overlay');
    if (d && o) {
      d.classList.add('is-open');
      o.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    const d = document.getElementById('cart-drawer');
    const o = document.getElementById('cart-overlay');
    if (d && o) {
      d.classList.remove('is-open');
      o.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  function generateWhatsAppUrl(delivery) {
    const phone = '573009299777';
    if (cartItems.length === 0) return `https://wa.me/${phone}?text=Hola%20Pariaz,%20quiero%20informaci%C3%B3n%20sobre%20las%20prendas`;

    let msg = `*NUEVO PEDIDO — TIENDA PARIAZ*\n\n`;
    cartItems.forEach(i => {
      msg += `• 1x ${i.name} (Talla ${i.size}) — ${formatCOP(i.price * i.qty)}\n`;
    });

    const sub = getSubtotal();
    msg += `\n*TOTAL:* ${formatCOP(sub)}\n`;

    if (delivery && delivery.name) {
      msg += `\n*DATOS DE ENVÍO:*\n`;
      msg += `• Cliente: ${delivery.name}\n`;
      msg += `• Ciudad: ${delivery.city || 'No especificada'}\n`;
      msg += `• Dirección: ${delivery.address || 'Pendiente'}\n`;
      msg += `• Teléfono: ${delivery.phone || ''}\n`;
    }

    msg += `\n_Pedido generado desde la tienda oficial de Pariaz_`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }

  // =========================================================================
  // 03. RENDERIZADORES
  // =========================================================================
  function renderCatalog() {
    const container = document.getElementById('catalog-products-grid');
    if (!container) return;

    let list = PRODUCTS;
    if (currentCategory !== 'all') {
      list = list.filter(p => p.category === currentCategory);
    }
    if (searchQuery) {
      list = list.filter(p => p.name.toLowerCase().includes(searchQuery) || p.collection.toLowerCase().includes(searchQuery));
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 48px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 8px;">No encontramos prendas con "${searchQuery}"</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Prueba con camiseta, conjunto, buzo o gorra.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(p => {
      const isW = wishlist.includes(p.id);
      const origHtml = p.originalPrice && p.originalPrice > p.price ? `<span class="product-price-original">${formatCOP(p.originalPrice)}</span>` : '';
      return `
        <article class="app-product-card" data-id="${p.id}">
          <div class="app-card-media-wrap">
            <span class="app-card-badge">${p.badge}</span>
            <button class="app-wishlist-heart-btn" data-id="${p.id}" aria-label="Favorito">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="${isW ? '#e11d48' : 'none'}" stroke="${isW ? '#e11d48' : '#ffffff'}" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <img src="${p.image}" alt="${p.name}" class="app-product-thumb" loading="lazy">
          </div>
          <div class="app-card-body">
            <div class="app-card-meta-row">
              <span class="app-card-collection">${p.collection}</span>
              <div class="app-card-rating">
                <span class="star-icon">★</span>
                <span class="rating-num">${p.rating}</span>
                <span class="reviews-count">(${p.reviewsCount})</span>
              </div>
            </div>
            <h3 class="app-card-title">${p.name}</h3>
            <div class="app-card-footer">
              <div class="app-card-pricing">
                <span class="product-price-current">${formatCOP(p.price)}</span>
                ${origHtml}
              </div>
              <button class="app-card-quick-add-btn" data-id="${p.id}" title="Añadir">+</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    container.querySelectorAll('.app-card-media-wrap, .app-card-title').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('.app-wishlist-heart-btn')) return;
        const card = el.closest('.app-product-card');
        const prod = PRODUCTS.find(p => p.id === card.getAttribute('data-id'));
        if (prod) openProductModal(prod);
      });
    });

    container.querySelectorAll('.app-wishlist-heart-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(b.getAttribute('data-id'));
      });
    });

    container.querySelectorAll('.app-card-quick-add-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        const prod = PRODUCTS.find(p => p.id === b.getAttribute('data-id'));
        if (prod) addToCart(prod, prod.sizes[0], 1);
      });
    });
  }

  function renderStories() {
    const c = document.getElementById('app-stories-bar');
    if (!c) return;
    c.innerHTML = ARTISTS.map((a, i) => `
      <button class="story-avatar-pill" data-index="${i}">
        <div class="story-avatar-ring">
          <img src="${a.avatar}" alt="${a.name}" class="story-avatar-img">
        </div>
        <span class="story-avatar-name">${a.name}</span>
      </button>
    `).join('');

    c.querySelectorAll('.story-avatar-pill').forEach(b => {
      b.addEventListener('click', () => {
        openStory(parseInt(b.getAttribute('data-index'), 10));
      });
    });
  }

  function openStory(idx) {
    const a = ARTISTS[idx];
    if (!a) return;
    const modal = document.getElementById('story-viewer-modal');
    const overlay = document.getElementById('modal-backdrop-overlay');
    if (!modal || !overlay) return;

    document.getElementById('story-artist-name').textContent = a.name;
    document.getElementById('story-artist-avatar').src = a.avatar;
    document.getElementById('story-bg-img').src = a.image;
    document.getElementById('story-headline').textContent = a.headline;
    document.getElementById('story-subhead').textContent = a.subhead;

    const btn = document.getElementById('story-product-btn');
    if (btn) {
      const prod = PRODUCTS.find(p => p.id === a.prodId);
      btn.textContent = prod ? `VER ${prod.name.toUpperCase()} (${formatCOP(prod.price)})` : 'VER PRENDA';
      btn.onclick = () => {
        closeStory();
        if (prod) openProductModal(prod);
      };
    }

    const pBar = document.getElementById('story-progress-bar');
    if (pBar) {
      pBar.style.width = '0%';
      setTimeout(() => pBar.style.width = '100%', 50);
    }

    modal.classList.add('is-open');
    overlay.classList.add('is-active');

    clearTimeout(storyTimer);
    storyTimer = setTimeout(() => {
      if (idx < ARTISTS.length - 1) openStory(idx + 1);
      else closeStory();
    }, 6000);
  }

  function closeStory() {
    clearTimeout(storyTimer);
    const m = document.getElementById('story-viewer-modal');
    const o = document.getElementById('modal-backdrop-overlay');
    if (m) m.classList.remove('is-open');
    if (o) o.classList.remove('is-active');
  }

  function openProductModal(p) {
    activeProduct = p;
    selectedSize = p.sizes.includes('L') ? 'L' : p.sizes[0];
    selectedQty = 1;

    const modal = document.getElementById('product-detail-modal');
    const overlay = document.getElementById('modal-backdrop-overlay');
    if (!modal || !overlay) return;

    document.getElementById('modal-product-name').textContent = p.name;
    document.getElementById('modal-product-collection').textContent = p.collection;
    document.getElementById('modal-product-price').textContent = formatCOP(p.price);
    document.getElementById('modal-product-desc').textContent = p.description;
    document.getElementById('modal-qty-val').textContent = selectedQty;

    const orig = document.getElementById('modal-product-original-price');
    if (orig) {
      if (p.originalPrice && p.originalPrice > p.price) {
        orig.textContent = formatCOP(p.originalPrice);
        orig.style.display = 'inline-block';
      } else {
        orig.style.display = 'none';
      }
    }

    document.getElementById('modal-rating-num').textContent = p.rating;
    document.getElementById('modal-reviews-count').textContent = `(${p.reviewsCount} reviews)`;

    const vis = document.getElementById('modal-product-visual');
    if (vis) vis.innerHTML = `<img src="${p.image}" alt="${p.name}" class="modal-hero-img">`;

    // Sizes
    const sCont = document.getElementById('modal-size-selector');
    if (sCont) {
      sCont.innerHTML = p.sizes.map(s => `
        <button class="size-pill-btn ${s === selectedSize ? 'active' : ''}" data-size="${s}">${s}</button>
      `).join('');
      sCont.querySelectorAll('.size-pill-btn').forEach(b => {
        b.onclick = () => {
          sCont.querySelectorAll('.size-pill-btn').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          selectedSize = b.getAttribute('data-size');
          updateModalActions();
        };
      });
    }

    // Matching items
    const mCont = document.getElementById('modal-matching-items-list');
    if (mCont) {
      if (p.matching && p.matching.length > 0) {
        mCont.innerHTML = p.matching.map(m => `
          <div class="matching-item-card">
            <img src="${m.image}" alt="${m.name}" class="matching-item-thumb">
            <div class="matching-item-info">
              <span class="matching-item-name">${m.name}</span>
              <span class="matching-item-price">${formatCOP(m.price)}</span>
            </div>
            <button class="btn-add-matching-item" data-id="${m.id}">+ Añadir</button>
          </div>
        `).join('');
        mCont.querySelectorAll('.btn-add-matching-item').forEach(b => {
          b.onclick = () => {
            const matchProd = PRODUCTS.find(x => x.id === b.getAttribute('data-id'));
            if (matchProd) addToCart(matchProd, matchProd.sizes[0], 1);
          };
        });
      } else {
        mCont.innerHTML = '';
      }
    }

    // Wishlist button
    const wishBtn = document.getElementById('modal-wishlist-toggle');
    if (wishBtn) {
      const isW = wishlist.includes(p.id);
      wishBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="20" height="20" fill="${isW ? '#e11d48' : 'none'}" stroke="${isW ? '#e11d48' : '#ffffff'}" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      `;
      wishBtn.onclick = () => {
        toggleWishlist(p.id);
        openProductModal(p);
      };
    }

    updateModalActions();
    modal.classList.add('is-open');
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    const modal = document.getElementById('product-detail-modal');
    const overlay = document.getElementById('modal-backdrop-overlay');
    if (modal) modal.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  function updateModalActions() {
    const addBtn = document.getElementById('modal-btn-add-cart');
    const waBtn = document.getElementById('modal-btn-whatsapp-inquiry');

    if (addBtn && activeProduct) {
      addBtn.textContent = `Añadir a la bolsa • ${formatCOP(activeProduct.price * selectedQty)}`;
      addBtn.onclick = () => {
        addToCart(activeProduct, selectedSize, selectedQty);
        closeProductModal();
      };
    }

    if (waBtn && activeProduct) {
      const text = `Hola Pariaz, me interesa la prenda: ${activeProduct.name} en Talla ${selectedSize} (${formatCOP(activeProduct.price)}). ¿Tienen disponibilidad?`;
      waBtn.onclick = () => {
        window.open(`https://wa.me/573009299777?text=${encodeURIComponent(text)}`, '_blank');
      };
    }
  }

  function renderLook(key) {
    const data = LOOKS_DATA[key];
    if (!data) return;

    document.getElementById('shop-look-title').textContent = data.title;
    document.getElementById('shop-look-bg-img').src = data.image;

    const list = document.getElementById('shop-look-items-list');
    if (list) {
      list.innerHTML = data.items.map(item => `
        <div class="look-item-entry">
          <div>
            <span style="font-size: 0.7rem; color: var(--text-muted); display: block;">ITEM ${item.num}</span>
            <span class="look-item-title">${item.name}</span>
          </div>
          <span class="look-item-price">${item.price}</span>
        </div>
      `).join('');
    }

    const btn = document.getElementById('btn-add-full-outfit');
    if (btn) {
      btn.textContent = `AGREGAR OUTFIT COMPLETO (${data.totalCOP})`;
      btn.onclick = () => {
        data.items.forEach(item => {
          const prod = PRODUCTS.find(p => p.id === item.id);
          if (prod) addToCart(prod, item.size, 1);
        });
        showToast(`Outfit de ${data.title} añadido a la bolsa`);
      };
    }

    const hCont = document.getElementById('shop-look-hotspots-container');
    if (hCont) {
      hCont.innerHTML = data.hotspots.map((h, i) => `
        <div class="look-hotspot-dot" style="top: ${h.top}; left: ${h.left};" data-id="${h.id}">
          <span>${i + 1}</span>
          <div class="hotspot-tooltip">${h.label}</div>
        </div>
      `).join('');

      hCont.querySelectorAll('.look-hotspot-dot').forEach(dot => {
        dot.onclick = (e) => {
          e.stopPropagation();
          const prod = PRODUCTS.find(p => p.id === dot.getAttribute('data-id'));
          if (prod) openProductModal(prod);
        };
      });
    }
  }

  function renderCart() {
    const countBadges = document.querySelectorAll('.cart-count-badge');
    const totalCount = cartItems.reduce((a, b) => a + b.qty, 0);
    countBadges.forEach(b => {
      b.textContent = totalCount;
      b.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    });

    const wishBadges = document.querySelectorAll('.wishlist-count-badge');
    wishBadges.forEach(b => {
      b.textContent = wishlist.length;
      b.style.display = wishlist.length > 0 ? 'inline-flex' : 'none';
    });

    const list = document.getElementById('cart-items-list');
    const empty = document.getElementById('cart-empty-state');
    const footer = document.getElementById('cart-drawer-footer');
    const subEl = document.getElementById('cart-subtotal-val');
    const bar = document.getElementById('free-shipping-progress');
    const barText = document.getElementById('free-shipping-text');
    const waBtn = document.getElementById('btn-checkout-whatsapp');

    const sub = getSubtotal();
    if (subEl) subEl.textContent = formatCOP(sub);

    if (bar && barText) {
      if (sub >= 300000) {
        bar.style.width = '100%';
        bar.style.backgroundColor = '#10b981';
        barText.innerHTML = '<strong>Envío Gratis activo</strong> a todo Colombia.';
      } else {
        const diff = 300000 - sub;
        const pct = Math.min(100, (sub / 300000) * 100);
        bar.style.width = `${pct}%`;
        bar.style.backgroundColor = '#ffffff';
        barText.innerHTML = `Agrega <strong>${formatCOP(diff)}</strong> para <strong>Envío Gratis</strong>.`;
      }
    }

    if (cartItems.length === 0) {
      if (empty) empty.style.display = 'block';
      if (list) list.innerHTML = '';
      if (footer) footer.style.display = 'none';
      return;
    }

    if (empty) empty.style.display = 'none';
    if (footer) footer.style.display = 'block';

    if (list) {
      list.innerHTML = cartItems.map(item => `
        <div class="cart-item-row" data-key="${item.key}">
          <div class="cart-item-visual">
            <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-header">
              <h4 class="cart-item-name">${item.name}</h4>
              <button class="cart-item-remove-btn" data-key="${item.key}">&times;</button>
            </div>
            <div class="cart-item-meta">
              <span>Talla: <strong>${item.size}</strong></span>
              <span>${formatCOP(item.price)}</span>
            </div>
            <div class="cart-item-actions">
              <div class="qty-stepper">
                <button class="qty-btn btn-cart-minus" data-key="${item.key}">−</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn btn-cart-plus" data-key="${item.key}">+</button>
              </div>
              <span class="cart-item-line-total">${formatCOP(item.price * item.qty)}</span>
            </div>
          </div>
        </div>
      `).join('');

      list.querySelectorAll('.cart-item-remove-btn').forEach(b => {
        b.onclick = () => {
          cartItems = cartItems.filter(i => i.key !== b.getAttribute('data-key'));
          saveState();
        };
      });

      list.querySelectorAll('.btn-cart-minus').forEach(b => {
        b.onclick = () => {
          const it = cartItems.find(i => i.key === b.getAttribute('data-key'));
          if (it) {
            it.qty--;
            if (it.qty <= 0) cartItems = cartItems.filter(i => i.key !== it.key);
            saveState();
          }
        };
      });

      list.querySelectorAll('.btn-cart-plus').forEach(b => {
        b.onclick = () => {
          const it = cartItems.find(i => i.key === b.getAttribute('data-key'));
          if (it) {
            it.qty++;
            saveState();
          }
        };
      });
    }

    if (waBtn) {
      waBtn.onclick = () => {
        window.open(generateWhatsAppUrl(), '_blank');
      };
    }
  }

  // Countdown timer
  function initCountdown() {
    const el = document.getElementById('drop-countdown-val');
    if (!el) return;
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(23, 59, 59);

    function update() {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) {
        el.textContent = "00D : 00H : 00M : 00S";
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      el.textContent = `${String(d).padStart(2,'0')}D : ${String(h).padStart(2,'0')}H : ${String(m).padStart(2,'0')}M : ${String(s).padStart(2,'0')}S`;
    }
    setInterval(update, 1000);
    update();
  }

  // =========================================================================
  // 04. BOOTSTRAP DE EVENTOS GLOBALES
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderStories();
    renderCatalog();
    renderCart();
    renderLook('hades');
    initCountdown();

    // Filtros de categoría
    document.querySelectorAll('.filter-tab-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab-pill').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderCatalog();
      });
    });

    // Buscador en vivo
    const sInput = document.querySelector('.app-search-input');
    if (sInput) {
      sInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderCatalog();
      });
    }

    // Lookbook Tabs
    document.querySelectorAll('.look-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.look-tab-btn').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        currentLookKey = btn.getAttribute('data-look');
        renderLook(currentLookKey);
      });
    });

    // Drawer de Carrito
    document.querySelectorAll('.trigger-cart-drawer').forEach(b => {
      b.onclick = (e) => { e.preventDefault(); openCart(); };
    });
    const cClose = document.getElementById('cart-close-btn');
    if (cClose) cClose.onclick = closeCart;
    const cOverlay = document.getElementById('cart-overlay');
    if (cOverlay) cOverlay.onclick = closeCart;

    // Modal de Producto
    const mClose = document.getElementById('modal-close-btn');
    if (mClose) mClose.onclick = closeProductModal;
    const bOverlay = document.getElementById('modal-backdrop-overlay');
    if (bOverlay) {
      bOverlay.onclick = () => {
        closeProductModal();
        closeStory();
        closeWishlist();
        closeCheckout();
        closeSizeGuide();
      };
    }

    // Modal Qty buttons
    const qMinus = document.getElementById('modal-qty-minus');
    const qPlus = document.getElementById('modal-qty-plus');
    if (qMinus) {
      qMinus.onclick = () => {
        if (selectedQty > 1) {
          selectedQty--;
          document.getElementById('modal-qty-val').textContent = selectedQty;
          updateModalActions();
        }
      };
    }
    if (qPlus) {
      qPlus.onclick = () => {
        selectedQty++;
        document.getElementById('modal-qty-val').textContent = selectedQty;
        updateModalActions();
      };
    }

    // Wishlist Modal
    function openWishlist() {
      const modal = document.getElementById('wishlist-modal');
      const overlay = document.getElementById('modal-backdrop-overlay');
      const list = document.getElementById('wishlist-items-container');
      if (!modal || !overlay || !list) return;

      const wished = PRODUCTS.filter(p => wishlist.includes(p.id));
      if (wished.length === 0) {
        list.innerHTML = `
          <div style="text-align: center; padding: 40px 20px;">
            <h4 style="font-size: 1.1rem; margin-bottom: 8px;">Tu lista de guardados está vacía</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Toca el corazón en cualquier prenda para guardarla.</p>
          </div>
        `;
      } else {
        list.innerHTML = wished.map(p => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: var(--bg-card); border-radius: var(--radius-sm); margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="${p.image}" alt="${p.name}" style="width: 44px; height: 44px; object-fit: contain;">
              <div>
                <h4 style="font-size: 0.88rem; font-weight: 700;">${p.name}</h4>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">${formatCOP(p.price)}</span>
              </div>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="btn-wish-add" data-id="${p.id}" style="padding: 6px 12px; background: #fff; color: #000; font-size: 0.75rem; font-weight: 800; border-radius: 100px;">Añadir</button>
              <button class="btn-wish-del" data-id="${p.id}" style="color: var(--text-muted); font-size: 1.2rem; padding: 0 4px;">&times;</button>
            </div>
          </div>
        `).join('');

        list.querySelectorAll('.btn-wish-add').forEach(b => {
          b.onclick = () => {
            const p = PRODUCTS.find(x => x.id === b.getAttribute('data-id'));
            if (p) { addToCart(p, p.sizes[0], 1); closeWishlist(); }
          };
        });

        list.querySelectorAll('.btn-wish-del').forEach(b => {
          b.onclick = () => { toggleWishlist(b.getAttribute('data-id')); openWishlist(); };
        });
      }

      modal.classList.add('is-open');
      overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }

    function closeWishlist() {
      const modal = document.getElementById('wishlist-modal');
      const overlay = document.getElementById('modal-backdrop-overlay');
      if (modal) modal.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.trigger-wishlist-modal').forEach(b => {
      b.onclick = (e) => { e.preventDefault(); openWishlist(); };
    });
    const wClose = document.getElementById('wishlist-close-btn');
    if (wClose) wClose.onclick = closeWishlist;

    // Checkout Flow
    function openCheckout() {
      const modal = document.getElementById('checkout-flow-modal');
      const overlay = document.getElementById('modal-backdrop-overlay');
      if (!modal || !overlay) return;

      const sub = getSubtotal();
      document.getElementById('checkout-summary-subtotal').textContent = formatCOP(sub);
      document.getElementById('checkout-summary-total').textContent = formatCOP(sub);

      document.getElementById('checkout-step-1').style.display = 'block';
      document.getElementById('checkout-step-2').style.display = 'none';
      document.getElementById('checkout-step-3').style.display = 'none';

      modal.classList.add('is-open');
      overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }

    function closeCheckout() {
      const modal = document.getElementById('checkout-flow-modal');
      const overlay = document.getElementById('modal-backdrop-overlay');
      if (modal) modal.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.trigger-checkout-modal').forEach(b => {
      b.onclick = (e) => { e.preventDefault(); closeCart(); openCheckout(); };
    });
    const cFlowClose = document.getElementById('checkout-flow-close-btn');
    if (cFlowClose) cFlowClose.onclick = closeCheckout;

    document.getElementById('btn-goto-step-2')?.addEventListener('click', () => {
      document.getElementById('checkout-step-1').style.display = 'none';
      document.getElementById('checkout-step-2').style.display = 'block';
    });

    document.getElementById('btn-back-step-1')?.addEventListener('click', () => {
      document.getElementById('checkout-step-1').style.display = 'block';
      document.getElementById('checkout-step-2').style.display = 'none';
    });

    document.getElementById('btn-goto-step-3')?.addEventListener('click', () => {
      const name = document.getElementById('checkout-input-name')?.value;
      const city = document.getElementById('checkout-input-city')?.value;
      if (!name || !city) {
        showToast('Completa tu nombre y ciudad');
        return;
      }
      document.getElementById('checkout-step-2').style.display = 'none';
      document.getElementById('checkout-step-3').style.display = 'block';
    });

    document.getElementById('btn-back-step-2')?.addEventListener('click', () => {
      document.getElementById('checkout-step-2').style.display = 'block';
      document.getElementById('checkout-step-3').style.display = 'none';
    });

    document.getElementById('btn-finish-whatsapp-pay')?.addEventListener('click', () => {
      const delivery = {
        name: document.getElementById('checkout-input-name')?.value,
        city: document.getElementById('checkout-input-city')?.value,
        address: document.getElementById('checkout-input-address')?.value,
        phone: document.getElementById('checkout-input-phone')?.value
      };
      closeCheckout();
      window.open(generateWhatsAppUrl(delivery), '_blank');
    });

    document.getElementById('btn-finish-online-pay')?.addEventListener('click', () => {
      closeCheckout();
      cartItems = [];
      saveState();
      showToast('¡Pedido #PRZ-8842 confirmado! Conectando con pasarela...');
    });

    // Cupón de Descuento
    document.getElementById('btn-apply-coupon')?.addEventListener('click', () => {
      const input = document.getElementById('cart-coupon-input');
      const val = input ? input.value.trim().toUpperCase() : '';
      if (val === 'PARIAZVIP') {
        appliedCoupon = 'PARIAZVIP';
        showToast('Cupón PARIAZVIP aplicado: 10% de Descuento');
        renderCart();
      } else {
        showToast('Cupón no válido. Prueba PARIAZVIP');
      }
    });

    // Modal Guía de Tallas
    function openSizeGuide() {
      const modal = document.getElementById('size-guide-modal');
      const overlay = document.getElementById('modal-backdrop-overlay');
      if (modal && overlay) {
        modal.classList.add('is-open');
        overlay.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeSizeGuide() {
      const modal = document.getElementById('size-guide-modal');
      const overlay = document.getElementById('modal-backdrop-overlay');
      if (modal) modal.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.trigger-size-guide').forEach(b => {
      b.onclick = (e) => { e.preventDefault(); openSizeGuide(); };
    });
    document.getElementById('size-guide-close-btn')?.addEventListener('click', closeSizeGuide);

    // Bottom Navigation
    document.getElementById('bnav-home')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.getElementById('bnav-search')?.addEventListener('click', () => {
      const inp = document.querySelector('.app-search-input');
      if (inp) { inp.focus(); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }); }
    });
    document.getElementById('bnav-cart')?.addEventListener('click', openCart);
    document.getElementById('bnav-wishlist')?.addEventListener('click', openWishlist);

    console.log("PARIAZ Store Engine Active (Zero CORS / Instant Exec).");
  });

})();
