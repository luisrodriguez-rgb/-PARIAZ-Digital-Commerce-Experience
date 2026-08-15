/**
 * PARIAZ DIGITAL STORE - WhatsApp Order Engine
 * Convierte el estado actual del carrito en un mensaje con formato limpio listo para enviar.
 */

// Número de WhatsApp oficial o configurable para la demo
export const PARIAZ_WHATSAPP_PHONE = "573000000000"; // Reemplazable con el número oficial de Tienda Pariaz

export function formatPriceCOP(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Genera el enlace wa.me con el texto estructurado del pedido.
 */
export function generateWhatsAppOrderUrl(cartItems, customerData = {}) {
  if (!cartItems || cartItems.length === 0) return null;

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  let message = `🔥 *NUEVO PEDIDO — PARIAZ WEB*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
  message += `Hola equipo Pariaz, quiero confirmar el siguiente pedido desde la tienda online:\n\n`;

  cartItems.forEach((item, index) => {
    message += `*${index + 1}. ${item.name.toUpperCase()}*\n`;
    message += `   • Talla: *${item.selectedSize}*\n`;
    message += `   • Cantidad: *${item.quantity}*\n`;
    message += `   • Precio Unit: ${formatPriceCOP(item.price)}\n`;
    message += `   • Subtotal: ${formatPriceCOP(item.price * item.quantity)}\n\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL A PAGAR:* ${formatPriceCOP(total)} COP\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

  message += `📋 *DATOS DE ENTREGA:*\n`;
  message += `• Nombre: ${customerData.name || '[Escribe tu nombre]'}\n`;
  message += `• Ciudad / Municipio: ${customerData.city || '[Escribe tu ciudad]'}\n`;
  message += `• Dirección: ${customerData.address || '[Escribe tu dirección]'}\n`;
  message += `• Teléfono: ${customerData.phone || '[Escribe tu teléfono]'}\n\n`;
  message += `Quedo atento a la confirmación de disponibilidad y número de cuenta / método de pago. ¡Gracias!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${PARIAZ_WHATSAPP_PHONE}?text=${encodedMessage}`;
}

/**
 * Genera enlace para consulta directa de un producto individual.
 */
export function generateProductInquiryUrl(product, selectedSize = "L") {
  let message = `Hola Pariaz, me interesa este producto visto en la web:\n\n`;
  message += `*${product.name.toUpperCase()}*\n`;
  message += `• Talla: *${selectedSize}*\n`;
  message += `• Precio: ${formatPriceCOP(product.price)}\n\n`;
  message += `¿Tienen disponibilidad inmediata para despacho?`;

  return `https://wa.me/${PARIAZ_WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
