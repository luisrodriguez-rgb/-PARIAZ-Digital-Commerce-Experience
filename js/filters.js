/**
 * PARIAZ DIGITAL STORE — Category & Search Filter Engine (Clean Streetwear)
 * Filtrado en vivo, catálogo modular y tarjetas limpias sin emojis.
 */

import { products } from '../data/products.js';
import { formatPriceCOP } from './whatsapp.js';
import { openProductModal } from './ui.js';
import { cart } from './cart.js';

let currentCategory = 'all';
let searchQuery = '';

export function initFilters() {
  // 1. Pestañas de categoría (Pill buttons)
  const tabButtons = document.querySelectorAll('.filter-tab-pill');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderCatalogGrid();
    });
  });

  // 2. Buscador en vivo
  const searchInputs = document.querySelectorAll('.app-search-input');
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderCatalogGrid();
    });
  });

  renderCatalogGrid();
}

/**
 * Renderiza el grid principal del catálogo
 */
export function renderCatalogGrid() {
  const container = document.getElementById('catalog-products-grid');
  if (!container) return;

  let filtered = products;

  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (searchQuery) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchQuery) ||
      p.collection.toLowerCase().includes(searchQuery) ||
      p.categoryLabel.toLowerCase().includes(searchQuery)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 8px;">No encontramos prendas con "${searchQuery}"</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Prueba con términos como camiseta, hoodie, conjunto o gorra.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => createProductCardHtml(product)).join('');
  attachProductCardEvents(container);
}

/**
 * Tarjeta de Producto limpia (Sin emojis, diseño tipográfico y de autor)
 */
function createProductCardHtml(product) {
  const isWish = cart.isWishlisted(product.id);
  const discountHtml = product.originalPrice && product.originalPrice > product.price
    ? `<span class="product-price-original">${formatPriceCOP(product.originalPrice)}</span>`
    : '';

  const badgeHtml = product.badge
    ? `<span class="app-card-badge">${product.badge}</span>`
    : '';

  return `
    <article class="app-product-card" data-id="${product.id}">
      
      <!-- Contenedor Visual con Botón de Wishlist -->
      <div class="app-card-media-wrap">
        ${badgeHtml}
        
        <button class="app-wishlist-heart-btn" data-id="${product.id}" aria-label="Guardar en favoritos">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="${isWish ? '#e11d48' : 'none'}" stroke="${isWish ? '#e11d48' : '#ffffff'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <img src="${product.image || './assets/brand/logo.jpeg'}" alt="${product.name}" class="app-product-thumb" loading="lazy">
      </div>

      <!-- Cuerpo de la Tarjeta con Rating, Título y Precios -->
      <div class="app-card-body">
        
        <div class="app-card-meta-row">
          <span class="app-card-collection">${product.collection}</span>
          <div class="app-card-rating">
            <span class="star-icon">★</span>
            <span class="rating-num">${product.rating || '5.0'}</span>
            <span class="reviews-count">(${product.reviewsCount || '1.2k'})</span>
          </div>
        </div>

        <h3 class="app-card-title">${product.name}</h3>

        <div class="app-card-footer">
          <div class="app-card-pricing">
            <span class="product-price-current">${formatPriceCOP(product.price)}</span>
            ${discountHtml}
          </div>

          <button class="app-card-quick-add-btn" data-id="${product.id}" title="Añadir al carrito">
            <span>+</span>
          </button>
        </div>

      </div>
    </article>
  `;
}

function attachProductCardEvents(container) {
  // Click en la tarjeta o título abre el modal detallado
  container.querySelectorAll('.app-card-media-wrap, .app-card-title').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.app-wishlist-heart-btn')) return;
      const card = el.closest('.app-product-card');
      if (card) {
        const prodId = card.getAttribute('data-id');
        const prod = products.find(p => p.id === prodId);
        if (prod) openProductModal(prod);
      }
    });
  });

  // Toggle de Wishlist
  container.querySelectorAll('.app-wishlist-heart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute('data-id');
      cart.toggleWishlist(prodId);
      renderCatalogGrid();
    });
  });

  // Botón directo de agregar
  container.querySelectorAll('.app-card-quick-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute('data-id');
      const prod = products.find(p => p.id === prodId);
      if (prod) {
        const defaultSize = prod.sizes.includes('L') ? 'L' : prod.sizes[0];
        cart.addItem(prod, defaultSize, 1);
      }
    });
  });
}
