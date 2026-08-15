/**
 * PARIAZ DIGITAL STORE - UI Components & Interaction Controller
 * Modales de producto, Shop the Look con fotos reales de artistas y microinteracciones.
 */

import { formatPriceCOP, generateProductInquiryUrl } from './whatsapp.js';
import { cart } from './cart.js';
import { artists } from '../data/artists.js';
import { dropArchive, products } from '../data/products.js';

let activeProduct = null;
let selectedSize = 'L';
let selectedQty = 1;

/**
 * Abre el Modal de Producto con selector de tallas y botones de acción dual
 */
export function openProductModal(product) {
  activeProduct = product;
  selectedSize = product.sizes.includes('L') ? 'L' : product.sizes[0];
  selectedQty = 1;

  const modal = document.getElementById('product-detail-modal');
  const overlay = document.getElementById('modal-backdrop-overlay');
  if (!modal || !overlay) return;

  // Llenar datos
  document.getElementById('modal-product-name').textContent = product.name;
  document.getElementById('modal-product-collection').textContent = product.collection;
  document.getElementById('modal-product-price').textContent = formatPriceCOP(product.price);
  document.getElementById('modal-product-desc').textContent = product.description;
  document.getElementById('modal-qty-val').textContent = selectedQty;

  const badgeEl = document.getElementById('modal-product-badge');
  if (badgeEl) {
    if (product.badge) {
      badgeEl.textContent = product.badge;
      badgeEl.style.display = 'inline-block';
    } else {
      badgeEl.style.display = 'none';
    }
  }

  // Detalles / Especificaciones
  const detailsList = document.getElementById('modal-product-specs');
  if (detailsList) {
    detailsList.innerHTML = product.details.map(d => `<li>• ${d}</li>`).join('');
  }

  // Visual del modal (con foto real o arte gráfico)
  const visualEl = document.getElementById('modal-product-visual');
  if (visualEl) {
    if (product.image) {
      visualEl.style.background = '#0a0a0d';
      visualEl.innerHTML = `
        <div class="modal-real-photo-box">
          <img src="${product.image}" alt="${product.name}" class="modal-real-img">
          <span class="modal-tag-pill" style="position: absolute; bottom: 16px; left: 16px; background: rgba(0,0,0,0.8);">${product.tag}</span>
        </div>
      `;
    } else {
      visualEl.style.background = `radial-gradient(circle at 50% 40%, ${product.accentColor}25 0%, #0d0d10 80%)`;
      visualEl.innerHTML = `
        <div class="modal-art-box">
          <span class="modal-brand-stamp">PARIAZ MEDELLÍN</span>
          <div class="modal-hero-monogram" style="border-color: ${product.accentColor}55">
            <span>${product.name.includes('P') ? 'P' : product.name.charAt(0)}</span>
          </div>
          <span class="modal-tag-pill">${product.tag}</span>
        </div>
      `;
    }
  }

  // Generar selector de tallas
  const sizesContainer = document.getElementById('modal-size-selector');
  if (sizesContainer) {
    sizesContainer.innerHTML = product.sizes.map(size => `
      <button class="size-select-btn ${size === selectedSize ? 'active' : ''}" data-size="${size}">
        ${size}
      </button>
    `).join('');

    sizesContainer.querySelectorAll('.size-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sizesContainer.querySelectorAll('.size-select-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = btn.getAttribute('data-size');
        updateModalWhatsAppButton();
      });
    });
  }

  updateModalWhatsAppButton();

  // Mostrar modal
  modal.classList.add('is-open');
  overlay.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

export function closeProductModal() {
  const modal = document.getElementById('product-detail-modal');
  const overlay = document.getElementById('modal-backdrop-overlay');
  if (modal && overlay) {
    modal.classList.remove('is-open');
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }
}

function updateModalWhatsAppButton() {
  const waBtn = document.getElementById('modal-btn-whatsapp-inquiry');
  if (waBtn && activeProduct) {
    const url = generateProductInquiryUrl(activeProduct, selectedSize);
    waBtn.onclick = () => window.open(url, '_blank');
  }
}

/**
 * Inicializa los eventos del modal de producto
 */
export function initProductModalListeners() {
  const closeBtn = document.getElementById('modal-close-btn');
  const overlay = document.getElementById('modal-backdrop-overlay');
  const btnMinus = document.getElementById('modal-qty-minus');
  const btnPlus = document.getElementById('modal-qty-plus');
  const btnAddCart = document.getElementById('modal-btn-add-cart');

  if (closeBtn) closeBtn.addEventListener('click', closeProductModal);
  if (overlay) overlay.addEventListener('click', () => {
    closeProductModal();
    closeCheckoutDemoModal();
  });

  if (btnMinus) {
    btnMinus.addEventListener('click', () => {
      if (selectedQty > 1) {
        selectedQty--;
        document.getElementById('modal-qty-val').textContent = selectedQty;
      }
    });
  }

  if (btnPlus) {
    btnPlus.addEventListener('click', () => {
      selectedQty++;
      document.getElementById('modal-qty-val').textContent = selectedQty;
    });
  }

  if (btnAddCart) {
    btnAddCart.addEventListener('click', () => {
      if (activeProduct) {
        cart.addItem(activeProduct, selectedSize, selectedQty);
        closeProductModal();
      }
    });
  }
}

/**
 * Renderiza la sección WORN BY / SEEN ON con fotografías reales de artistas
 */
export function renderArtistsSection() {
  const container = document.getElementById('artists-grid-container');
  if (!container) return;

  container.innerHTML = artists.map(artist => `
    <div class="artist-card has-real-artist-photo" style="--artist-color: ${artist.accent}">
      <div class="artist-card-inner">
        <div class="artist-badge-tag">${artist.badge}</div>
        
        <div class="artist-real-media-box">
          <img src="${artist.image}" alt="${artist.name}" class="artist-photo-img" loading="lazy">
          <div class="artist-photo-overlay"></div>
        </div>

        <div class="artist-info">
          <span class="artist-role">${artist.role}</span>
          <h3 class="artist-name">${artist.name}</h3>
          <p class="artist-quote">"${artist.quote}"</p>
          <div class="artist-piece-link">
            <span class="piece-label">Prenda Usada:</span>
            <span class="piece-name">${artist.featuredPiece}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Inicializa los Hotspots interactivos de "Shop The Look" con conmutador de artistas
 */
export function initShopTheLook() {
  const modelFrame = document.getElementById('shop-look-model-frame');
  const btnFullOutfit = document.getElementById('btn-add-full-outfit');
  const lookTabs = document.querySelectorAll('.look-tab-btn');

  const looksData = {
    'hades': {
      title: 'HADES 66 — DESERT SAND SUIT',
      image: './assets/looks/hades-look.jpeg',
      items: [
        { num: '01', name: 'Camiseta Corona de Espinas Sand', price: '$160.000 COP', id: 'conjunto-hades', size: 'L' },
        { num: '02', name: 'Pantalón Jogger Pariaz Desert Sand', price: '$240.000 COP', id: 'conjunto-hades', size: 'L' }
      ],
      totalCOP: '$400.000 COP',
      hotspots: [
        { top: '35%', left: '46%', label: 'Camiseta Corona de Espinas ($160k)', id: 'conjunto-hades' },
        { top: '68%', left: '42%', label: 'Pantalón Jogger Pariaz ($240k)', id: 'conjunto-hades' }
      ]
    },
    'krisr': {
      title: 'KRIS R — CRIMSON SECURITY OUTFIT',
      image: './assets/looks/krisr-look.jpeg',
      items: [
        { num: '01', name: 'Camiseta Pariaz Crimson — Security & Trust', price: '$170.000 COP', id: 'pariaz-krisr', size: 'XL' },
        { num: '02', name: 'Gorra Pariaz Corona / P 3D', price: '$95.000 COP', id: 'gorra-p', size: 'Talla Única' }
      ],
      totalCOP: '$265.000 COP',
      hotspots: [
        { top: '48%', left: '48%', label: 'Camiseta Pariaz Crimson ($170k)', id: 'pariaz-krisr' }
      ]
    },
    'jonz': {
      title: 'JON Z — ÁNGELES HEAVEN OUTFIT',
      image: './assets/artists/jonz.jpeg',
      items: [
        { num: '01', name: 'Camiseta Pariaz Ángeles Heaven Gate', price: '$180.000 COP', id: 'pariaz-jonz', size: 'L' },
        { num: '02', name: 'Gorra Pariaz León Street', price: '$95.000 COP', id: 'gorra-leon', size: 'Talla Única' }
      ],
      totalCOP: '$275.000 COP',
      hotspots: [
        { top: '46%', left: '48%', label: 'Camiseta Pariaz Ángeles ($180k)', id: 'pariaz-jonz' }
      ]
    }
  };

  let currentLookKey = 'hades';

  function renderCurrentLook(key) {
    const data = looksData[key];
    if (!data) return;

    const titleEl = document.getElementById('shop-look-title');
    const itemsList = document.getElementById('shop-look-items-list');
    const imgEl = document.getElementById('shop-look-bg-img');
    const hotspotsContainer = document.getElementById('shop-look-hotspots-container');

    if (titleEl) titleEl.textContent = data.title;
    if (imgEl) imgEl.src = data.image;

    if (itemsList) {
      itemsList.innerHTML = data.items.map(item => `
        <div class="look-item-entry">
          <div>
            <span style="font-size: 0.7rem; color: var(--text-muted); display: block;">ITEM ${item.num}</span>
            <span class="look-item-title">${item.name}</span>
          </div>
          <span class="look-item-price">${item.price}</span>
        </div>
      `).join('');
    }

    if (btnFullOutfit) {
      btnFullOutfit.innerHTML = `AGREGAR OUTFIT COMPLETO (${data.totalCOP}) &rarr;`;
    }

    if (hotspotsContainer) {
      hotspotsContainer.innerHTML = data.hotspots.map((h, i) => `
        <div class="look-hotspot-dot" style="top: ${h.top}; left: ${h.left};" data-prod="${h.id}">
          <span>${i + 1}</span>
          <div class="hotspot-tooltip">${h.label}</div>
        </div>
      `).join('');

      hotspotsContainer.querySelectorAll('.look-hotspot-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          const prodId = dot.getAttribute('data-prod');
          const prod = products.find(p => p.id === prodId);
          if (prod) openProductModal(prod);
        });
      });
    }
  }

  lookTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      lookTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentLookKey = tab.getAttribute('data-look');
      renderCurrentLook(currentLookKey);
    });
  });

  if (btnFullOutfit) {
    btnFullOutfit.addEventListener('click', () => {
      const data = looksData[currentLookKey];
      data.items.forEach(item => {
        const prod = products.find(p => p.id === item.id);
        if (prod) cart.addItem(prod, item.size, 1);
      });
      cart.showToast(`🔥 Outfit de ${data.title} añadido al carrito`);
    });
  }

  // Render inicial
  renderCurrentLook('hades');
}

/**
 * Renderiza el histórico de Drops (Drop Archive)
 */
export function renderDropArchive() {
  const container = document.getElementById('drop-archive-container');
  if (!container) return;

  container.innerHTML = dropArchive.map(drop => `
    <div class="drop-archive-card ${drop.status === 'ACTIVE DROP' ? 'drop-active' : ''}">
      <div class="drop-code-badge">${drop.code}</div>
      <h4 class="drop-name">${drop.name}</h4>
      <div class="drop-meta">
        <span class="drop-year">${drop.year}</span>
        <span class="drop-status-pill">${drop.status}</span>
      </div>
    </div>
  `).join('');
}

/**
 * Modal informativo de Checkout Demo
 */
export function openCheckoutDemoModal() {
  const modal = document.getElementById('checkout-demo-modal');
  const overlay = document.getElementById('modal-backdrop-overlay');
  if (modal && overlay) {
    modal.classList.add('is-open');
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }
}

export function closeCheckoutDemoModal() {
  const modal = document.getElementById('checkout-demo-modal');
  const overlay = document.getElementById('modal-backdrop-overlay');
  if (modal) modal.classList.remove('is-open');
  if (overlay) overlay.classList.remove('is-active');
  document.body.style.overflow = '';
}
