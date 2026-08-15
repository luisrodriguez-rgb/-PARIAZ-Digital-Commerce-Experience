/**
 * PARIAZ DIGITAL STORE — Main Application Bootstrap
 * Inicializa todos los componentes, estado del carrito y eventos globales.
 */

import { cart } from './cart.js';
import { initFilters } from './filters.js';
import { 
  initProductModalListeners, 
  renderArtistsSection, 
  initShopTheLook, 
  renderDropArchive,
  openCheckoutDemoModal,
  closeCheckoutDemoModal
} from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar suscripción y render del carrito
  cart.subscribe(() => {
    cart.renderCartUI();
  });

  // 2. Inicializar filtros y catálogo de productos
  initFilters();

  // 3. Inicializar modal de detalle de producto
  initProductModalListeners();

  // 4. Renderizar sección WORN BY (Artistas)
  renderArtistsSection();

  // 5. Inicializar sección interactiva Shop The Look
  initShopTheLook();

  // 6. Renderizar Drop Archive
  renderDropArchive();

  // 7. Eventos de apertura y cierre del Cart Drawer
  const cartTriggerBtns = document.querySelectorAll('.trigger-cart-drawer');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartOverlay = document.getElementById('cart-overlay');
  const checkoutOnlineBtn = document.getElementById('btn-checkout-online');
  const checkoutModalClose = document.getElementById('checkout-modal-close-btn');
  const checkoutModalConfirm = document.getElementById('checkout-demo-confirm-btn');

  cartTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      cart.openDrawer();
    });
  });

  if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', () => cart.closeDrawer());
  }

  if (cartOverlay) {
    cartOverlay.addEventListener('click', () => cart.closeDrawer());
  }

  if (checkoutOnlineBtn) {
    checkoutOnlineBtn.addEventListener('click', () => {
      cart.closeDrawer();
      openCheckoutDemoModal();
    });
  }

  if (checkoutModalClose) {
    checkoutModalClose.addEventListener('click', closeCheckoutDemoModal);
  }

  if (checkoutModalConfirm) {
    checkoutModalConfirm.addEventListener('click', () => {
      closeCheckoutDemoModal();
      cart.showToast("⚡ Simulación completada. En producción conectará con Wompi/Bold.");
    });
  }

  // 8. Formulario VIP Drop Club
  const vipForm = document.getElementById('vip-club-form');
  if (vipForm) {
    vipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = vipForm.querySelector('input[type="text"], input[type="email"]');
      const val = input ? input.value.trim() : '';
      if (val) {
        cart.showToast("🔥 ¡Registrado con éxito para el próximo Drop de Pariaz!");
        input.value = '';
      }
    });
  }

  // 9. Header scroll shrink effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('is-scrolled');
    } else {
      header?.classList.remove('is-scrolled');
    }
  }, { passive: true });

  console.log("⚡ PARIAZ Digital Store initialized successfully.");
});
