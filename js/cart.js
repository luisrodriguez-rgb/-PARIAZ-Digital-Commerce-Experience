/**
 * PARIAZ DIGITAL STORE — Shopping Cart & Wishlist State Manager
 * Persistencia en localStorage, wishlist y cálculo de subtotales en COP.
 */

import { formatPriceCOP, generateWhatsAppOrderUrl } from './whatsapp.js';

const CART_STORAGE_KEY = 'pariaz_cart_state_v3';
const WISHLIST_STORAGE_KEY = 'pariaz_wishlist_state_v3';
const FREE_SHIPPING_THRESHOLD = 300000; // $300.000 COP para envío gratis

class CartManager {
  constructor() {
    this.items = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.listeners = [];
  }

  loadCart() {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
      this.notifyListeners();
    } catch (e) {
      console.error(e);
    }
  }

  loadWishlist() {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(this.wishlist));
      this.notifyListeners();
    } catch (e) {
      console.error(e);
    }
  }

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      this.showToast("Eliminado de tu lista de guardados");
    } else {
      this.wishlist.push(productId);
      this.showToast("Guardado en tus favoritos");
    }
    this.saveWishlist();
  }

  isWishlisted(productId) {
    return this.wishlist.includes(productId);
  }

  subscribe(callback) {
    this.listeners.push(callback);
    callback(this);
  }

  notifyListeners() {
    this.listeners.forEach(cb => cb(this));
  }

  addItem(product, size = "L", quantity = 1) {
    const itemKey = `${product.id}_${size}`;
    const existingIndex = this.items.findIndex(item => item.itemKey === itemKey);

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        itemKey,
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice || product.price,
        image: product.image || './assets/brand/logo.jpeg',
        selectedSize: size,
        quantity: quantity,
        category: product.category,
        accentColor: product.accentColor || '#ffffff',
        tag: product.tag || 'STREETWEAR'
      });
    }

    this.saveCart();
    this.openDrawer();
    this.showToast(`Añadido a tu bolsa: ${product.name} (${size})`);
  }

  removeItem(itemKey) {
    this.items = this.items.filter(item => item.itemKey !== itemKey);
    this.saveCart();
  }

  updateQuantity(itemKey, delta) {
    const item = this.items.find(i => i.itemKey === itemKey);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(itemKey);
    } else {
      this.saveCart();
    }
  }

  getTotalCount() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  getSubtotal() {
    return this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  openDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      drawer.classList.add('is-open');
      overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      drawer.classList.remove('is-open');
      overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  showToast(message) {
    let toast = document.getElementById('pariaz-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'pariaz-toast';
      toast.className = 'pariaz-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  renderCartUI() {
    const countBadges = document.querySelectorAll('.cart-count-badge');
    const totalCount = this.getTotalCount();
    countBadges.forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    });

    const wishlistBadges = document.querySelectorAll('.wishlist-count-badge');
    wishlistBadges.forEach(badge => {
      badge.textContent = this.wishlist.length;
      badge.style.display = this.wishlist.length > 0 ? 'inline-flex' : 'none';
    });

    const itemsContainer = document.getElementById('cart-items-list');
    const subtotalEl = document.getElementById('cart-subtotal-val');
    const freeShippingBar = document.getElementById('free-shipping-progress');
    const freeShippingText = document.getElementById('free-shipping-text');
    const emptyState = document.getElementById('cart-empty-state');
    const footerContainer = document.getElementById('cart-drawer-footer');
    const whatsappBtn = document.getElementById('btn-checkout-whatsapp');

    const subtotal = this.getSubtotal();

    if (subtotalEl) {
      subtotalEl.textContent = formatPriceCOP(subtotal);
    }

    if (freeShippingBar && freeShippingText) {
      if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        freeShippingBar.style.width = '100%';
        freeShippingBar.style.backgroundColor = '#10b981';
        freeShippingText.innerHTML = `<strong>Envío Gratis activo</strong> a todo Colombia.`;
      } else {
        const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
        const percent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
        freeShippingBar.style.width = `${percent}%`;
        freeShippingBar.style.backgroundColor = '#ffffff';
        freeShippingText.innerHTML = `Agrega <strong>${formatPriceCOP(remaining)}</strong> para <strong>Envío Gratis</strong>.`;
      }
    }

    if (this.items.length === 0) {
      if (emptyState) emptyState.style.display = 'flex';
      if (itemsContainer) itemsContainer.innerHTML = '';
      if (footerContainer) footerContainer.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (footerContainer) footerContainer.style.display = 'block';

    if (itemsContainer) {
      itemsContainer.innerHTML = this.items.map(item => `
        <div class="cart-item-row" data-key="${item.itemKey}">
          <div class="cart-item-visual">
            <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-header">
              <h4 class="cart-item-name">${item.name}</h4>
              <button class="cart-item-remove-btn" data-key="${item.itemKey}" aria-label="Eliminar">&times;</button>
            </div>
            <div class="cart-item-meta">
              <span class="cart-item-size-pill">Talla: <strong>${item.selectedSize}</strong></span>
              <span class="cart-item-price-unit">${formatPriceCOP(item.price)}</span>
            </div>
            <div class="cart-item-actions">
              <div class="qty-stepper">
                <button class="qty-btn btn-qty-minus" data-key="${item.itemKey}">−</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn btn-qty-plus" data-key="${item.itemKey}">+</button>
              </div>
              <span class="cart-item-line-total">${formatPriceCOP(item.price * item.quantity)}</span>
            </div>
          </div>
        </div>
      `).join('');

      itemsContainer.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.removeItem(e.currentTarget.getAttribute('data-key'));
        });
      });

      itemsContainer.querySelectorAll('.btn-qty-minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.updateQuantity(e.currentTarget.getAttribute('data-key'), -1);
        });
      });

      itemsContainer.querySelectorAll('.btn-qty-plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.updateQuantity(e.currentTarget.getAttribute('data-key'), 1);
        });
      });
    }

    if (whatsappBtn) {
      const waUrl = generateWhatsAppOrderUrl(this.items);
      whatsappBtn.onclick = () => {
        if (waUrl) window.open(waUrl, '_blank');
      };
    }
  }
}

export const cart = new CartManager();
