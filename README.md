# 💎 PARIAZ — Digital Commerce Experience

Demostración interactiva de infraestructura de comercio digital y e-commerce para **PARIAZ STORE** (Medellín / Sabaneta, Colombia).

---

## 🚀 Propuesta de Valor

* **Marca:** Streetwear Conceptual / Cultura Urbana / Medellín.
* **Problema que Resuelve:** Convierte el tráfico masivo de Instagram, TikTok y artistas urbanos en un sistema de ventas propio sin saturar la atención manual por WhatsApp.
* **Estrategia Híbrida:** 
  1. Catálogo interactivo con selector de tallas y carrito reactivo.
  2. Generador de pedido ordenado para **WhatsApp Click-to-Chat**.
  3. Simulación de **Pasarela de Pagos en Línea (Wompi / Bold / PSE / Addi)**.

---

## 🛠️ Stack Tecnológico de la Demo

* **Frontend:** HTML5 Semántico + CSS3 Moderno (Dark Luxury Streetwear Design System).
* **Tipografías:** Google Fonts (*Bebas Neue*, *Syne*, *Inter*).
* **Lógica:** JavaScript ES6 Modules (Modular, Zero Bundler Overhead, Carga `< 0.8s`).
* **Persistencia:** `localStorage` para estado de carrito continuo.
* **Despliegue:** Optimizado para Vercel o Netlify.

---

## 📁 Estructura del Repositorio

```text
├── index.html         # Maqueta y estructura principal de la experiencia
├── css/
│   └── styles.css     # Sistema de diseño, tokens, dark mode y responsive
├── js/
│   ├── app.js         # Bootstrap principal y eventos globales
│   ├── cart.js        # Gestor de estado del carrito y Drawer AJAX
│   ├── filters.js     # Filtros por categorías (Camisetas, Conjuntos, Buzos, etc.)
│   ├── ui.js          # Modales de producto, Shop the Look, Artistas y Checkout
│   └── whatsapp.js    # Compilador de pedidos y URLs de WhatsApp
├── data/
│   ├── products.js    # Catálogo con 14 SKUs reales y precios en COP
│   └── artists.js     # Worn By / Prueba social (Kris R, Hades 66, Jon Z, Coscu, Luar)
├── assets/            # Fotografías reales de marca, catálogo y artistas
├── docs/              # Documentación de estrategia, roadmap y análisis comercial
└── vercel.json        # Configuración de despliegue en Vercel
```

---

## 💻 Ejecución Local

Para probar la demo localmente:

```bash
# Usando Python:
python3 -m http.server 3000

# O usando npx serve:
npx serve .
```

Abre en tu navegador `http://localhost:3000`.
