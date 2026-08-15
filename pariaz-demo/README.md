# 💎 PARIAZ — Digital Commerce Experience (Demo)

Demostración interactiva de infraestructura de comercio digital y e-commerce para **PARIAZ STORE** (Medellín / Sabaneta, Colombia).

---

## 🚀 Propuesta de Valor

* **Marca:** Streetwear Conceptual / Cultura Urbana / Medellín.
* **Problema que Resuelve:** Convierte el tráfico masivo de Instagram, TikTok y artistas urbanos en un sistema de ventas propio sin saturar la atención manual por WhatsApp.
* **Estrategia Híbrida:** 
  1. Catálogo interactivo con selector de tallas y carrito.
  2. Generador de pedido ordenado para **WhatsApp Click-to-Chat**.
  3. Simulación de **Pasarela de Pagos en Línea (Wompi/Bold/PSE)**.

---

## 🛠️ Stack Tecnológico de la Demo

* **Frontend:** HTML5 Semántico + CSS3 Moderno (Dark Luxury Streetwear Design System).
* **Tipografías:** Google Fonts (*Bebas Neue*, *Syne*, *Inter*).
* **Lógica:** JavaScript ES6 Modules (Modular, Zero Bundler Overhead, Carga `< 0.8s`).
* **Persistencia:** `localStorage` para estado de carrito continuo.
* **Despliegue:** Optimizado para Vercel o Netlify.

---

## 📁 Estructura del Proyecto

```text
pariaz-demo/
├── index.html         # Maqueta y estructura de la experiencia
├── css/
│   └── styles.css     # Sistema de diseño, tokens, dark mode y responsive
├── js/
│   ├── app.js         # Bootstrap principal y eventos globales
│   ├── cart.js        # Gestor de estado del carrito y Drawer AJAX
│   ├── filters.js     # Filtros por categorías (Camisetas, Conjuntos, Buzos, etc.)
│   ├── ui.js          # Modales de producto, Shop the Look, Artistas y Checkout
│   └── whatsapp.js    # Compilador de pedidos y URLs de WhatsApp
├── data/
│   ├── products.js    # Catálogo con 17 SKUs reales y precios en COP
│   └── artists.js     # Worn By / Prueba social (Blessd, Kris R, Westcol, Anuel, etc.)
└── vercel.json        # Configuración de despliegue en Vercel
```

---

## 💻 Ejecución Local

Para probar la demo localmente:

```bash
cd pariaz-demo
# Usando Python:
python3 -m http.server 3000

# O usando npx serve:
npx serve .
```

Abre en tu navegador `http://localhost:3000`.
