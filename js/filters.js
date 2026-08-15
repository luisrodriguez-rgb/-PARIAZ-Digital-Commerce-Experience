/**
 * PARIAZ DIGITAL STORE - Category & Collection Filter Engine
 * Filtrado dinámico por pestañas con renderizado de fotos reales e interactividad 3D.
 */

import { products } from '../data/products.js';
import { formatPriceCOP } from './whatsapp.js';
import { openProductModal } from './ui.js';
import { cart } from './cart.js';

let currentFilter = 'all';

export function initFilters() {
  const tabButtons = document.querySelectorAll('.filter-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-category');
      renderCatalogGrid();
    });
  });

  renderCatalogGrid();
  renderLatestDropGrid();
}

/**
 * Renderiza el grid principal del catálogo filtrado
 */
export function renderCatalogGrid() {
  const container = document.getElementById('catalog-products-grid');
  if (!container) return;

  const filtered = currentFilter === 'all' 
    ? products 
    : products.filter(p => p.category === currentFilter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-products-message">
        <p>No hay prendas disponibles en esta categoría actualmente.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => createProductCardHtml(product)).join('');
  attachProductCardEvents(container);
}

/**
 * Renderiza la sección LATEST DROP (prendas destacadas con fotos reales)
 */
export function renderLatestDropGrid() {
  const container = document.getElementById('latest-drop-grid');
  if (!container) return;

  const latestItems = products.filter(p => p.isLatestDrop).slice(0, 6);
  container.innerHTML = latestItems.map(product => createProductCardHtml(product, true)).join('');
  attachProductCardEvents(container);
}

/**
 * Plantilla HTML para una tarjeta de producto con fotos reales y microinteracciones
 */
function createProductCardHtml(product, isFeatured = false) {
  const badgeHtml = product.badge 
    ? `<span class="product-badge ${product.badge.includes('REAL') || product.badge.includes('KRIS') || product.badge.includes('JON') || product.badge.includes('HADES') ? 'badge-real-photo' : (product.badge === 'LIMITED' || product.badge === 'NO VUELVE' ? 'badge-limited' : '')}">${product.badge}</span>` 
    : '';

  const sizePills = product.sizes.map(s => `<span class="size-dot">${s}</span>`).join('');

  // Si tiene imagen real
  let mediaContent = '';
  if (product.image) {
    mediaContent = `
      <div class="product-real-photo-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-real-img" loading="lazy">
        <div class="photo-ambient-glow" style="--glow-color: ${product.accentColor}44"></div>
      </div>
    `;
  } else {
    mediaContent = `
      <div class="product-visual-art" style="background: radial-gradient(circle at 50% 40%, ${product.accentColor}18 0%, #0d0d10 80%)">
        <div class="streetwear-graphic-silhouette">
          <span class="silhouette-brand">PARIAZ</span>
          <div class="silhouette-core" style="border-color: ${product.accentColor}44">
            <span class="silhouette-letter">${product.name.includes('P') ? 'P' : product.name.charAt(0)}</span>
          </div>
          <span class="silhouette-tag">${product.tag}</span>
        </div>
      </div>
    `;
  }

  return `
    <article class="product-card ${isFeatured ? 'product-card-featured' : ''} ${product.image ? 'has-real-photo' : ''}" data-id="${product.id}">
      <div class="product-card-media" style="--accent-glow: ${product.accentColor}33">
        ${badgeHtml}
        ${mediaContent}

        <div class="product-card-hover-overlay">
          <div class="hover-sizes-preview">
            <span class="sizes-label">TALLAS DISPONIBLES:</span>
            <div class="sizes-row">${sizePills}</div>
          </div>
          <button class="btn-quick-view" data-id="${product.id}">
            VER DETALLES & TALLAS
          </button>
        </div>
      </div>

      <div class="product-card-body">
        <div class="product-card-header">
          <span class="product-collection-tag">${product.collection}</span>
          <span class="product-status-dot" title="Stock listo para despacho">Disponible</span>
        </div>
        <h3 class="product-card-title">${product.name}</h3>
        <div class="product-card-footer">
          <div class="product-price-block">
            <span class="price-currency">COP</span>
            <span class="price-amount">${formatPriceCOP(product.price)}</span>
          </div>
          <button class="btn-card-add-direct" data-id="${product.id}" title="Añadir talla estándar L">
            + AGREGAR
          </button>
        </div>
      </div>
    </article>
  `;
}

function attachProductCardEvents(container) {
  // Click en la tarjeta o botón de ver detalles -> abre modal de producto
  container.querySelectorAll('.btn-quick-view, .product-card-media, .product-card-title').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = el.closest('.product-card');
      if (card) {
        const prodId = card.getAttribute('data-id');
        const prod = products.find(p => p.id === prodId);
        if (prod) openProductModal(prod);
      }
    });
  });

  // Botón directo de agregar
  container.querySelectorAll('.btn-card-add-direct').forEach(btn => {
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

  // Efecto de inclinación 3D en tarjetas (3D Card Tilt)
  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}
