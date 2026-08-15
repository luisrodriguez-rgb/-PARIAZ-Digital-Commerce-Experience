/**
 * PARIAZ DIGITAL STORE — UI & Modals Controller (Clean Luxury Streetwear)
 * Sin emojis, con interactividad completa en lookbook, stories y checkout.
 */

import { formatPriceCOP, generateProductInquiryUrl } from './whatsapp.js';
import { cart } from './cart.js';
import { artists } from '../data/artists.js';
import { products } from '../data/products.js';

let activeProduct = null;
let selectedSize = 'L';
let selectedQty = 1;
let currentStoryIndex = 0;
let storyTimer = null;

/**
 * Renderiza la barra superior de Historias
 */
export function renderStoriesBar() {
  const container = document.getElementById('app-stories-bar');
  if (!container) return;

  container.innerHTML = artists.map((artist, index) => `
    <button class="story-avatar-pill" data-index="${index}" aria-label="Ver historia de ${artist.name}">
      <div class="story-avatar-ring">
        <img src="${artist.avatar}" alt="${artist.name}" class="story-avatar-img">
      </div>
      <span class="story-avatar-name">${artist.name}</span>
    </button>
  `).join('');

  container.querySelectorAll('.story-avatar-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      openStoryViewer(idx);
    });
  });
}

/**
 * Visor de Historias (Story Viewer Modal)
 */
export function openStoryViewer(index) {
  currentStoryIndex = index;
  const artist = artists[currentStoryIndex];
  if (!artist) return;

  const modal = document.getElementById('story-viewer-modal');
  const overlay = document.getElementById('modal-backdrop-overlay');
  if (!modal || !overlay) return;

  document.getElementById('story-artist-name').textContent = artist.name;
  document.getElementById('story-artist-avatar').src = artist.avatar;
  document.getElementById('story-bg-img').src = artist.image;
  document.getElementById('story-headline').textContent = artist.storySlide.headline;
  document.getElementById('story-subhead').textContent = artist.storySlide.subhead;

  const linkBtn = document.getElementById('story-product-btn');
  if (linkBtn) {
    const prod = products.find(p => p.id === artist.storySlide.productLink);
    linkBtn.textContent = prod ? `VER ${prod.name.toUpperCase()} ($${formatPriceCOP(prod.price)})` : 'EXPLORAR EN TIENDA';
    linkBtn.onclick = () => {
      closeStoryViewer();
      if (prod) openProductModal(prod);
    };
  }

  const progressBar = document.getElementById('story-progress-bar');
  if (progressBar) {
    progressBar.style.width = '0%';
    setTimeout(() => { progressBar.style.width = '100%'; }, 50);
  }

  modal.classList.add('is-open');
  overlay.classList.add('is-active');

  clearTimeout(storyTimer);
  storyTimer = setTimeout(() => {
    if (currentStoryIndex < artists.length - 1) {
      openStoryViewer(currentStoryIndex + 1);
    } else {
      closeStoryViewer();
    }
  }, 6000);
}

export function closeStoryViewer() {
  clearTimeout(storyTimer);
  const modal = document.getElementById('story-viewer-modal');
  const overlay = document.getElementById('modal-backdrop-overlay');
  if (modal) modal.classList.remove('is-open');
  if (overlay) overlay.classList.remove('is-active');
}

/**
 * Abre el Modal de Producto detallado
 */
export function openProductModal(product) {
  activeProduct = product;
  selectedSize = product.sizes.includes('L') ? 'L' : product.sizes[0];
  selectedQty = 1;

  const modal = document.getElementById('product-detail-modal');
  const overlay = document.getElementById('modal-backdrop-overlay');
  if (!modal || !overlay) return;

  document.getElementById('modal-product-name').textContent = product.name;
  document.getElementById('modal-product-collection').textContent = product.collection;
  document.getElementById('modal-product-price').textContent = formatPriceCOP(product.price);
  document.getElementById('modal-product-desc').textContent = product.description;
  document.getElementById('modal-qty-val').textContent = selectedQty;

  const origPriceEl = document.getElementById('modal-product-original-price');
  if (origPriceEl) {
    if (product.originalPrice && product.originalPrice > product.price) {
      origPriceEl.textContent = formatPriceCOP(product.originalPrice);
      origPriceEl.style.display = 'inline-block';
    } else {
      origPriceEl.style.display = 'none';
    }
  }

  const ratingNumEl = document.getElementById('modal-rating-num');
  const reviewsCountEl = document.getElementById('modal-reviews-count');
  if (ratingNumEl) ratingNumEl.textContent = product.rating || '5.0';
  if (reviewsCountEl) reviewsCountEl.textContent = `(${product.reviewsCount || '1.4k'} reviews)`;

  // Visual
  const visualEl = document.getElementById('modal-product-visual');
  if (visualEl) {
    visualEl.innerHTML = `
      <div class="modal-photo-hero-wrap">
        <img src="${product.image || './assets/brand/logo.jpeg'}" alt="${product.name}" class="modal-hero-img">
      </div>
    `;
  }

  // Selector de Tallas
  const sizesContainer = document.getElementById('modal-size-selector');
  if (sizesContainer) {
    sizesContainer.innerHTML = product.sizes.map(size => `
      <button class="size-pill-btn ${size === selectedSize ? 'active' : ''}" data-size="${size}">
        ${size}
      </button>
    `).join('');

    sizesContainer.querySelectorAll('.size-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sizesContainer.querySelectorAll('.size-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = btn.getAttribute('data-size');
        updateModalBottomBar();
      });
    });
  }

  // Combinaciones sugeridas
  const bundleContainer = document.getElementById('modal-matching-items-list');
  if (bundleContainer) {
    if (product.matchingItems && product.matchingItems.length > 0) {
      bundleContainer.innerHTML = product.matchingItems.map(item => `
        <div class="matching-item-card" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="matching-item-thumb">
          <div class="matching-item-info">
            <span class="matching-item-name">${item.name}</span>
            <span class="matching-item-price">${formatPriceCOP(item.price)}</span>
          </div>
          <button class="btn-add-matching-item" data-id="${item.id}">+ Añadir</button>
        </div>
      `).join('');

      bundleContainer.querySelectorAll('.btn-add-matching-item').forEach(b => {
        b.addEventListener('click', (e) => {
          e.stopPropagation();
          const mId = b.getAttribute('data-id');
          const mProd = products.find(p => p.id === mId);
          if (mProd) cart.addItem(mProd, mProd.sizes[0], 1);
        });
      });
    } else {
      bundleContainer.innerHTML = '';
    }
  }

  // Wishlist Heart Modal Button
  const modalWishBtn = document.getElementById('modal-wishlist-toggle');
  if (modalWishBtn) {
    const isWish = cart.isWishlisted(product.id);
    modalWishBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="${isWish ? '#e11d48' : 'none'}" stroke="${isWish ? '#e11d48' : '#ffffff'}" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    `;
    modalWishBtn.onclick = () => {
      cart.toggleWishlist(product.id);
      openProductModal(product);
    };
  }

  updateModalBottomBar();

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

function updateModalBottomBar() {
  const addCartBtn = document.getElementById('modal-btn-add-cart');
  const waBtn = document.getElementById('modal-btn-whatsapp-inquiry');

  if (addCartBtn && activeProduct) {
    addCartBtn.innerHTML = `
      <span>Añadir a la bolsa &bull; ${formatPriceCOP(activeProduct.price * selectedQty)}</span>
    `;
    addCartBtn.onclick = () => {
      cart.addItem(activeProduct, selectedSize, selectedQty);
      closeProductModal();
    };
  }

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

  if (closeBtn) closeBtn.addEventListener('click', closeProductModal);
  if (overlay) overlay.addEventListener('click', () => {
    closeProductModal();
    closeStoryViewer();
    closeWishlistModal();
    closeCheckoutFlowModal();
  });

  if (btnMinus) {
    btnMinus.addEventListener('click', () => {
      if (selectedQty > 1) {
        selectedQty--;
        document.getElementById('modal-qty-val').textContent = selectedQty;
        updateModalBottomBar();
      }
    });
  }

  if (btnPlus) {
    btnPlus.addEventListener('click', () => {
      selectedQty++;
      document.getElementById('modal-qty-val').textContent = selectedQty;
      updateModalBottomBar();
    });
  }
}

/**
 * Modal de Wishlist
 */
export function openWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  const overlay = document.getElementById('modal-backdrop-overlay');
  const listContainer = document.getElementById('wishlist-items-container');
  if (!modal || !overlay || !listContainer) return;

  const wishedProducts = products.filter(p => cart.isWishlisted(p.id));

  if (wishedProducts.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 20px;">
        <h4 style="font-size: 1.1rem; margin-bottom: 8px;">Tu lista de guardados está vacía</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem;">Toca el corazón en cualquier prenda para guardarla.</p>
      </div>
    `;
  } else {
    listContainer.innerHTML = wishedProducts.map(p => `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: var(--bg-card); border-radius: var(--radius-sm); margin-bottom: 10px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="${p.image || './assets/brand/logo.jpeg'}" alt="${p.name}" style="width: 44px; height: 44px; object-fit: contain;">
          <div>
            <h4 style="font-size: 0.88rem; font-weight: 700;">${p.name}</h4>
            <span style="font-size: 0.8rem; color: var(--text-secondary);">${formatPriceCOP(p.price)}</span>
          </div>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn-wishlist-move-cart" data-id="${p.id}" style="padding: 6px 12px; background: #fff; color: #000; font-size: 0.75rem; font-weight: 800; border-radius: 100px;">Añadir</button>
          <button class="btn-wishlist-remove" data-id="${p.id}" style="color: var(--text-muted); font-size: 1.2rem; padding: 0 4px;">&times;</button>
        </div>
      </div>
    `).join('');

    listContainer.querySelectorAll('.btn-wishlist-move-cart').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-id');
        const p = products.find(prod => prod.id === id);
        if (p) {
          cart.addItem(p, p.sizes[0], 1);
          closeWishlistModal();
        }
      });
    });

    listContainer.querySelectorAll('.btn-wishlist-remove').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-id');
        cart.toggleWishlist(id);
        openWishlistModal();
      });
    });
  }

  modal.classList.add('is-open');
  overlay.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

export function closeWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  const overlay = document.getElementById('modal-backdrop-overlay');
  if (modal) modal.classList.remove('is-open');
  if (overlay) overlay.classList.remove('is-active');
  document.body.style.overflow = '';
}

/**
 * Modal de Checkout Multi-Paso
 */
export function openCheckoutFlowModal() {
  const modal = document.getElementById('checkout-flow-modal');
  const overlay = document.getElementById('modal-backdrop-overlay');
  if (!modal || !overlay) return;

  showCheckoutStep(1);

  modal.classList.add('is-open');
  overlay.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

export function closeCheckoutFlowModal() {
  const modal = document.getElementById('checkout-flow-modal');
  const overlay = document.getElementById('modal-backdrop-overlay');
  if (modal) modal.classList.remove('is-open');
  if (overlay) overlay.classList.remove('is-active');
  document.body.style.overflow = '';
}

export function showCheckoutStep(step) {
  const step1 = document.getElementById('checkout-step-1');
  const step2 = document.getElementById('checkout-step-2');
  const step3 = document.getElementById('checkout-step-3');

  if (step1) step1.style.display = step === 1 ? 'block' : 'none';
  if (step2) step2.style.display = step === 2 ? 'block' : 'none';
  if (step3) step3.style.display = step === 3 ? 'block' : 'none';

  const summarySubtotal = document.getElementById('checkout-summary-subtotal');
  const summaryTotal = document.getElementById('checkout-summary-total');
  if (summarySubtotal) summarySubtotal.textContent = formatPriceCOP(cart.getSubtotal());
  if (summaryTotal) summaryTotal.textContent = formatPriceCOP(cart.getSubtotal());
}

/**
 * Inicializa Shop The Look interactivo
 */
export function initShopTheLook() {
  const lookTabs = document.querySelectorAll('.look-tab-btn');
  const btnFullOutfit = document.getElementById('btn-add-full-outfit');

  const looksData = {
    'hades': {
      title: 'HADES 66 — FULL DESERT SUIT',
      image: './assets/looks/hades-look.jpeg',
      items: [
        { num: '01', name: 'Camiseta Corona de Espinas Sand', price: '$160.000 COP', id: 'conjunto-hades', size: 'L' },
        { num: '02', name: 'Pantalón Jogger Pariaz Desert Sand', price: '$240.000 COP', id: 'conjunto-hades', size: 'L' }
      ],
      totalCOP: '$400.000 COP',
      hotspots: [
        { top: '35%', left: '46%', label: 'Camiseta Corona de Espinas ($160.000 COP)', id: 'conjunto-hades' },
        { top: '68%', left: '42%', label: 'Pantalón Jogger Pariaz ($240.000 COP)', id: 'conjunto-hades' }
      ]
    },
    'krisr': {
      title: 'KRIS R — CRIMSON SECURITY OUTFIT',
      image: './assets/looks/krisr-look.jpeg',
      items: [
        { num: '01', name: 'Camiseta Crimson Security & Trust', price: '$170.000 COP', id: 'pariaz-krisr', size: 'XL' },
        { num: '02', name: 'Gorra Pariaz Corona 3D', price: '$95.000 COP', id: 'gorra-p', size: 'Talla Única' }
      ],
      totalCOP: '$265.000 COP',
      hotspots: [
        { top: '48%', left: '48%', label: 'Camiseta Pariaz Crimson ($170.000 COP)', id: 'pariaz-krisr' }
      ]
    },
    'jonz': {
      title: 'JON Z — ÁNGELES HEAVEN OUTFIT',
      image: './assets/artists/jonz.jpeg',
      items: [
        { num: '01', name: 'Camiseta Ángeles Heaven Gate', price: '$180.000 COP', id: 'pariaz-jonz', size: 'L' },
        { num: '02', name: 'Gorra Pariaz Corona 3D', price: '$95.000 COP', id: 'gorra-p', size: 'Talla Única' }
      ],
      totalCOP: '$275.000 COP',
      hotspots: [
        { top: '46%', left: '48%', label: 'Camiseta Ángeles Heaven ($180.000 COP)', id: 'pariaz-jonz' }
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
            <span style="font-size: 0.7rem; color: var(--text-muted); display: block; letter-spacing: 0.06em;">ITEM ${item.num}</span>
            <span class="look-item-title">${item.name}</span>
          </div>
          <span class="look-item-price">${item.price}</span>
        </div>
      `).join('');
    }

    if (btnFullOutfit) {
      btnFullOutfit.innerHTML = `AGREGAR OUTFIT COMPLETO (${data.totalCOP})`;
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
      cart.showToast(`Outfit de ${data.title} añadido a la bolsa`);
    });
  }

  renderCurrentLook('hades');
}
