/**
 * PARIAZ DIGITAL STORE — Main Application Bootstrap (Figma App Edition)
 * Inicialización de componentes, Bottom Nav, Stories, Wishlist y Checkout.
 */

import { cart } from './cart.js';
import { initFilters } from './filters.js';
import { 
  initProductModalListeners, 
  renderStoriesBar,
  initShopTheLook, 
  renderDropArchive,
  openWishlistModal,
  closeWishlistModal,
  openCheckoutFlowModal,
  closeCheckoutFlowModal,
  showCheckoutStep
} from './ui.js';
import { generateWhatsAppOrderUrl } from './whatsapp.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar carrito y reactividad
  cart.subscribe(() => {
    cart.renderCartUI();
  });

  // 2. Inicializar barra superior de historias (Stories Bar)
  renderStoriesBar();

  // 3. Inicializar catálogo y filtros
  initFilters();

  // 4. Inicializar modal detallado de producto
  initProductModalListeners();

  // 5. Inicializar Lookbook interactivo con fotos de artistas
  initShopTheLook();

  // 6. Renderizar Drop Archive
  renderDropArchive();

  // 7. Eventos de Drawer del Carrito
  const cartTriggerBtns = document.querySelectorAll('.trigger-cart-drawer');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartOverlay = document.getElementById('cart-overlay');

  cartTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      cart.openDrawer();
    });
  });

  if (cartCloseBtn) cartCloseBtn.addEventListener('click', () => cart.closeDrawer());
  if (cartOverlay) cartOverlay.addEventListener('click', () => cart.closeDrawer());

  // 8. Eventos de Wishlist Modal
  const wishlistTriggerBtns = document.querySelectorAll('.trigger-wishlist-modal');
  const wishlistCloseBtn = document.getElementById('wishlist-close-btn');

  wishlistTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openWishlistModal();
    });
  });

  if (wishlistCloseBtn) wishlistCloseBtn.addEventListener('click', closeWishlistModal);

  // 9. Eventos de Checkout Multi-Paso
  const checkoutTriggerBtns = document.querySelectorAll('#btn-checkout-online, .trigger-checkout-modal');
  const checkoutCloseBtn = document.getElementById('checkout-flow-close-btn');
  const btnToStep2 = document.getElementById('btn-goto-step-2');
  const btnToStep3 = document.getElementById('btn-goto-step-3');
  const btnBackStep1 = document.getElementById('btn-back-step-1');
  const btnBackStep2 = document.getElementById('btn-back-step-2');
  const btnFinishOnlinePay = document.getElementById('btn-finish-online-pay');
  const btnFinishWhatsAppPay = document.getElementById('btn-finish-whatsapp-pay');

  checkoutTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      cart.closeDrawer();
      openCheckoutFlowModal();
    });
  });

  if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', closeCheckoutFlowModal);
  if (btnToStep2) btnToStep2.addEventListener('click', () => showCheckoutStep(2));
  if (btnBackStep1) btnBackStep1.addEventListener('click', () => showCheckoutStep(1));
  if (btnToStep3) {
    btnToStep3.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('checkout-input-name')?.value;
      const city = document.getElementById('checkout-input-city')?.value;
      if (!name || !city) {
        cart.showToast("⚠️ Por favor completa tu nombre y ciudad");
        return;
      }
      showCheckoutStep(3);
    });
  }
  if (btnBackStep2) btnBackStep2.addEventListener('click', () => showCheckoutStep(2));

  if (btnFinishOnlinePay) {
    btnFinishOnlinePay.addEventListener('click', () => {
      closeCheckoutFlowModal();
      cart.clearCart();
      cart.showToast("🎉 ¡Pedido #PRZ-8842 confirmado! Redirigiendo a pasarela Wompi/PSE...");
    });
  }

  if (btnFinishWhatsAppPay) {
    btnFinishWhatsAppPay.addEventListener('click', () => {
      const name = document.getElementById('checkout-input-name')?.value || '';
      const city = document.getElementById('checkout-input-city')?.value || '';
      const address = document.getElementById('checkout-input-address')?.value || '';
      const phone = document.getElementById('checkout-input-phone')?.value || '';

      const waUrl = generateWhatsAppOrderUrl(cart.items, { name, city, address, phone });
      closeCheckoutFlowModal();
      if (waUrl) window.open(waUrl, '_blank');
    });
  }

  // 10. Floating Bottom Nav Actions
  const bottomNavHome = document.getElementById('bnav-home');
  const bottomNavSearch = document.getElementById('bnav-search');
  const bottomNavCart = document.getElementById('bnav-cart');
  const bottomNavWishlist = document.getElementById('bnav-wishlist');
  const bottomNavAccount = document.getElementById('bnav-account');

  if (bottomNavHome) bottomNavHome.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  if (bottomNavSearch) {
    bottomNavSearch.addEventListener('click', () => {
      const searchInput = document.querySelector('.app-search-input');
      if (searchInput) {
        searchInput.focus();
        document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  if (bottomNavCart) bottomNavCart.addEventListener('click', () => cart.openDrawer());
  if (bottomNavWishlist) bottomNavWishlist.addEventListener('click', () => openWishlistModal());
  if (bottomNavAccount) {
    bottomNavAccount.addEventListener('click', () => {
      document.getElementById('vip-club-section')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 11. Formulario VIP Drop Club
  const vipForm = document.getElementById('vip-club-form');
  if (vipForm) {
    vipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = vipForm.querySelector('input');
      if (input && input.value) {
        cart.showToast("🔥 ¡Registrado al VIP Drop Club de Pariaz!");
        input.value = '';
      }
    });
  }

  console.log("⚡ PARIAZ Figma Mobile Experience loaded.");
});
