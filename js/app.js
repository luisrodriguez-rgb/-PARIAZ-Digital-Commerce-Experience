/**
 * PARIAZ DIGITAL STORE — Core Application Engine
 * Compatible con file:// y http:// (Cero dependencias externas, 100% robusto).
 * Enfoque Comercial: Sin métricas falsas, flujo Instagram->WhatsApp, Upselling y Drops.
 */

(function () {
  'use strict';

  // =========================================================================
  // 01. BASE DE DATOS DE PRODUCTOS Y ARTISTAS (PRECIOS REALES)
  // =========================================================================
  const PRODUCTS = [
    // --- CAMISETAS ---
    {
      id: "camisa-1",
      name: "Camiseta Pariaz Manos & Luz",
      price: 140000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Drop 004 — Manos & Luz",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "DROP 004",
      image: "assets/products/camisa.jpeg",
      description: "Silueta insignia de Pariaz en algodón peinado de 240g con fit streetwear holgado. Estampado serigráfico en tramado semitono de manos elevando la 'P' cósmica.",
      details: ["100% Algodón Premium 240 GSM", "Corte Boxy Streetwear", "Estampado tramado de alta durabilidad", "Hecho en Medellín"],
      matching: [
        { id: "gorra-blessd", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/products/blessd_gorra.png" }
      ]
    },
    {
      id: "camisa-4-almighty",
      name: "Camiseta Pariaz x Almighty Edition",
      price: 170000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Worn by Almighty",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "VISTO EN ALMIGHTY",
      image: "assets/products/camisa_4_almaygthhy.png",
      description: "Edición especial lucida por Almighty. Confección en algodón pesado con diseño de autor en el pecho y espalda.",
      details: ["Algodón 240g perchado", "Serigrafía discharge táctil", "Cuello grueso 3cm", "Edición limitada"],
      matching: [
        { id: "conjunto-morado", name: "Conjunto Morado Almighty", price: 480000, image: "assets/products/conjunto_morado.png" }
      ]
    },
    {
      id: "camisa-5-jonz",
      name: "Camiseta Ángeles Heaven Gate",
      price: 180000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Worn by Jon Z",
      sizes: ["S", "M", "L", "XL"],
      badge: "VISTO EN JON Z",
      image: "assets/products/camisa_5_jonz.png",
      description: "Pieza de autor lucida por Jon Z en vivo. Composición barroca con ángeles heraldos, leones guardianes y la emblemática 'P' celestial.",
      details: ["Serigrafía discharge al agua", "Algodón pre-lavado vintage", "Edición numerada", "Costuras reforzadas"],
      matching: [
        { id: "gorra-blessd", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/products/blessd_gorra.png" }
      ]
    },
    {
      id: "pariaz-krisr",
      name: "Camiseta Crimson Security & Trust",
      price: 170000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Worn by Kris R",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "VISTO EN KRIS R",
      image: "assets/products/krisr.jpeg",
      description: "Pieza exclusiva vista en Kris R. Base en negro profundo con la 'P' gótica en serigrafía degradada roja carmesí y firma 'Security and trust'.",
      details: ["Serigrafía táctil degradada", "Cuello acanalado de 3cm", "Gramaje pesado 240 GSM", "Etiqueta tejida en dobladillo"],
      matching: [
        { id: "gorra-krisr", name: "Gorra Pariaz Snapback", price: 95000, image: "assets/products/gorra_krisr.jpeg" }
      ]
    },
    {
      id: "camisa-6",
      name: "Camiseta Pariaz Double Print (Front & Back)",
      price: 160000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Drop 004",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "DOBLE ESTAMPADO",
      image: "assets/products/camisa_6.png",
      description: "Diseño completo con arte frontal y gráfica de gran formato en la espalda. Algodón pesado de confección colombiana.",
      details: ["Estampado doble (Frente y Espalda)", "Algodón 240 GSM", "Corte holgado Boxy Fit"],
      matching: [
        { id: "conjunto-negro", name: "Pantalón Track Black", price: 220000, image: "assets/products/conjunto_negro.jpeg" }
      ]
    },
    {
      id: "camisa-7",
      name: "Camiseta Pariaz Gothic Lettering Black",
      price: 150000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Drop 003",
      sizes: ["S", "M", "L", "XL"],
      badge: "GOTHIC CORE",
      image: "assets/products/camisa_7.png",
      description: "Tipografía gótica en relieve sobre base negra mate. Esencial para combinaciones streetwear finas.",
      details: ["Algodón peinado 240g", "Cuello reforzado", "Tacto suave y resistente"],
      matching: [
        { id: "gorra-blessd", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/products/blessd_gorra.png" }
      ]
    },
    {
      id: "camisa-8",
      name: "Camiseta Pariaz Raw Boxy Edition",
      price: 160000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Editorial Look",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "EDITORIAL FIT",
      image: "assets/products/camisa_8.png",
      description: "Silueta pesada con corte y caída limpia. Testeada en sesiones editoriales de moda urbana.",
      details: ["Gramaje pesado 240 GSM", "Pre-lavado industrial", "Hecho en Sabaneta"],
      matching: [
        { id: "buzo-cafe", name: "Buzo Hoodie Brown", price: 240000, image: "assets/products/buzo_cafe.png" }
      ]
    },
    {
      id: "camisa-9",
      name: "Camiseta Pariaz Street Royalty",
      price: 160000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Drop 004",
      sizes: ["S", "M", "L", "XL"],
      badge: "ROYALTY",
      image: "assets/products/camisa_9.png",
      description: "Gráfica exclusiva con elementos heráldicos y el león insignia de Pariaz.",
      details: ["100% Algodón Peinado", "Serigrafía a 4 tintas", "Corte Boxy"],
      matching: [
        { id: "gorra-blessd", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/products/blessd_gorra.png" }
      ]
    },
    {
      id: "camisa-10",
      name: "Camiseta Pariaz Core Monogram",
      price: 150000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Core Collection",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "CORE ESSENTIAL",
      image: "assets/products/camisa_10.png",
      description: "El monograma esencial 'P' en formato central. La base de todo guardarropa streetwear.",
      details: ["Algodón pesado 240 GSM", "Cuello de 3cm", "Corte Boxy"],
      matching: [
        { id: "conjunto-azul", name: "Conjunto Azul Royal", price: 500000, image: "assets/products/conjunto_azul.jpeg" }
      ]
    },
    {
      id: "camisa-2",
      name: "Camiseta Pariaz Monograma White Vintage",
      price: 140000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "White Vault",
      sizes: ["S", "M", "L", "XL"],
      badge: "WHITE VAULT",
      image: "assets/products/camisa_2.jpeg",
      description: "Base blanca en algodón pesado de 240g con serigrafía en contraste.",
      details: ["100% Algodón Premium 240g", "Cuello grueso 3cm", "Corte holgado"],
      matching: [
        { id: "conjunto-hades", name: "Pantalón Jogger Sand", price: 240000, image: "assets/products/Hades.jpeg" }
      ]
    },
    {
      id: "camisa-3",
      name: "Camiseta Pariaz Street Classic Black",
      price: 140000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Classics",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "CLASSIC",
      image: "assets/products/camisa_3.jpeg",
      description: "Un clásico eterno de la marca con estampado limpio frontal.",
      details: ["Algodón 240g", "Corte Boxy Fit", "Alta durabilidad"],
      matching: [
        { id: "gorra-blessd", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/products/blessd_gorra.png" }
      ]
    },
    {
      id: "camisa-4",
      name: "Camiseta Pariaz Graphic Dark Night",
      price: 150000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Dark Nights",
      sizes: ["S", "M", "L", "XL"],
      badge: "DARK NIGHT",
      image: "assets/products/camisa_4.jpeg",
      description: "Gráfica de autor inspirada en la vida nocturna y la cultura urbana de Medellín.",
      details: ["Serigrafía de alto detalle", "Algodón pesado 240g", "Costuras reforzadas"],
      matching: [
        { id: "conjunto-negro", name: "Conjunto Black Shadow", price: 420000, image: "assets/products/conjunto_negro.jpeg" }
      ]
    },
    {
      id: "camisa-tury",
      name: "Camiseta Pariaz x Tury Signature",
      price: 160000,
      category: "camisetas",
      categoryLabel: "Camisetas",
      collection: "Worn by Tury",
      sizes: ["S", "M", "L", "XL"],
      badge: "VISTO EN TURY",
      image: "assets/products/camisa_5_tury.png",
      description: "Pieza exclusiva vista en Tury. Serigrafía discharge de autor con estética de alta costura callejera.",
      details: ["Algodón 240 GSM", "Estampado discharge al agua", "Corte Boxy holgado"],
      matching: [
        { id: "gorra-krisr", name: "Gorra Pariaz Snapback", price: 95000, image: "assets/products/gorra_krisr.jpeg" }
      ]
    },

    // --- CONJUNTOS ---
    {
      id: "conjunto-hades",
      name: "Conjunto Corona Desert Sand Suit",
      price: 400000,
      category: "conjuntos",
      categoryLabel: "Conjuntos",
      collection: "Worn by Hades 66",
      sizes: ["S", "M", "L", "XL"],
      badge: "VISTO EN HADES 66",
      image: "assets/products/Hades.jpeg",
      description: "Set completo de 2 piezas (Camiseta Oversize + Pantalón Jogger) lucido por Hades 66. Diseño de corona de espinas en tono arena desierto.",
      details: ["Set de 2 piezas completas", "Algodón perchado y gabardina", "Bolsillos funcionales y cordones", "Fit Streetwear auténtico"],
      matching: [
        { id: "gorra-blessd", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/products/blessd_gorra.png" }
      ]
    },
    {
      id: "conjunto-morado",
      name: "Conjunto Pariaz Morado x Almighty Track",
      price: 480000,
      category: "conjuntos",
      categoryLabel: "Conjuntos",
      collection: "Worn by Almighty",
      sizes: ["S", "M", "L", "XL"],
      badge: "VISTO EN ALMIGHTY",
      image: "assets/products/conjunto_morado.png",
      description: "Conjunto de 2 piezas en púrpura profundo con detalles reflectivos y herrajes premium. Visto en Almighty.",
      details: ["Chaqueta + Pantalón", "Tela técnica repelente", "Bordados y aplicaciones de autor"],
      matching: [
        { id: "camisa-4-almighty", name: "Camiseta Almighty", price: 170000, image: "assets/products/camisa_4_almaygthhy.png" }
      ]
    },
    {
      id: "conjunto-negro",
      name: "Conjunto Pariaz Black Shadow Tracksuit",
      price: 420000,
      category: "conjuntos",
      categoryLabel: "Conjuntos",
      collection: "Shadow Series",
      sizes: ["S", "M", "L", "XL"],
      badge: "SHADOW SUIT",
      image: "assets/products/conjunto_negro.jpeg",
      description: "Conjunto negro mate de dos piezas con corte holgado y cierres termosellados.",
      details: ["Chaqueta + Pantalón Jogger", "Gabardina técnica", "Ajustes elásticos con tanca"],
      matching: [
        { id: "gorra-krisr", name: "Gorra Pariaz Snapback", price: 95000, image: "assets/products/gorra_krisr.jpeg" }
      ]
    },
    {
      id: "conjunto-azul",
      name: "Conjunto Pariaz Azul Royal Track",
      price: 500000,
      category: "conjuntos",
      categoryLabel: "Conjuntos",
      collection: "Full Suits",
      sizes: ["S", "M", "L", "XL"],
      badge: "VISTO EN LUAR",
      image: "assets/products/conjunto_azul.jpeg",
      description: "Conjunto impermeable de dos piezas lucido por Luar La L en sesiones de estudio.",
      details: ["Chaqueta + Pantalón Cargo", "Herrajes grabados en láser", "Resistente al agua"],
      matching: [
        { id: "gorra-blessd", name: "Gorra Pariaz Corona 3D", price: 95000, image: "assets/products/blessd_gorra.png" }
      ]
    },
    {
      id: "conjunto-rojo",
      name: "Conjunto Pariaz Crimson Blood Suit",
      price: 450000,
      category: "conjuntos",
      categoryLabel: "Conjuntos",
      collection: "Crimson Line",
      sizes: ["S", "M", "L", "XL"],
      badge: "CRIMSON SUIT",
      image: "assets/products/conjunto_rojo.jpeg",
      description: "Conjunto de impacto en rojo carmesí con franjas negras y detalles de confección artesanal.",
      details: ["Set 2 piezas", "Algodón perchado 380g", "Bolsillos reforzados"],
      matching: [
        { id: "pariaz-krisr", name: "Camiseta Crimson Kris R", price: 170000, image: "assets/products/krisr.jpeg" }
      ]
    },

    // --- BUZOS & HOODIES ---
    {
      id: "buzo-cafe",
      name: "Buzo Hoodie Pariaz Brown Heavyweight 380G",
      price: 240000,
      category: "buzos",
      categoryLabel: "Buzos & Hoodies",
      collection: "Earth Tones",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "HEAVYWEIGHT 380G",
      image: "assets/products/buzo_cafe.png",
      description: "Hoodie en tono café tierra confeccionado en algodón perchado de 380g. Capucha estructurada de doble capa sin cordones.",
      details: ["Algodón 380 GSM perchado", "Capucha doble capa estructurada", "Bolsillo canguro oculto", "Hecho en Sabaneta"],
      matching: [
        { id: "camisa-8", name: "Camiseta Raw Boxy", price: 160000, image: "assets/products/camisa_8.png" }
      ]
    },
    {
      id: "buzo-pariaz",
      name: "Buzo Hoodie Pariaz Black Night Heavyweight",
      price: 220000,
      category: "buzos",
      categoryLabel: "Buzos & Hoodies",
      collection: "Worn by Coscu",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "VISTO EN COSCU",
      image: "assets/products/coscu.jpeg",
      description: "Hoodie de algodón perchado térmico 380 GSM con bordado tonal de la 'P'.",
      details: ["Algodón 380g perchado", "Capucha doble", "Bordado de alta densidad"],
      matching: [
        { id: "camisa-1", name: "Camiseta Manos & Luz", price: 140000, image: "assets/products/camisa.jpeg" }
      ]
    },

    // --- GORRAS & HEADWEAR ---
    {
      id: "gorra-blessd",
      name: "Gorra Pariaz Corona 3D Trucker",
      price: 95000,
      category: "gorras",
      categoryLabel: "Gorras & Headwear",
      collection: "Seen on Blessd",
      sizes: ["Talla Única (Ajustable)"],
      badge: "VISTO EN BLESSD",
      image: "assets/products/blessd_gorra.png",
      description: "La icónica gorra trucker con la corona 3D de Pariaz bordada en alto relieve. Vista en tarima con Blessd.",
      details: ["Bordado 3D puff de alta densidad", "Malla trasera transpirable", "Broche snapback regulable", "Edición original"],
      matching: [
        { id: "camisa-1", name: "Camiseta Manos & Luz", price: 140000, image: "assets/products/camisa.jpeg" }
      ]
    },
    {
      id: "gorra-krisr",
      name: "Gorra Pariaz Snapback",
      price: 95000,
      category: "gorras",
      categoryLabel: "Gorras & Headwear",
      collection: "Seen on Kris R",
      sizes: ["Talla Única (Ajustable)"],
      badge: "VISTO EN KRIS R",
      image: "assets/products/gorra_krisr.jpeg",
      description: "Gorra plana estructurada de 6 paneles lucida por Kris R. Bordado lateral y frontal.",
      details: ["Bordado 3D frontal", "Visera plana rígida", "Tafilete antitranspirante"],
      matching: [
        { id: "pariaz-krisr", name: "Camiseta Crimson Kris R", price: 170000, image: "assets/products/krisr.jpeg" }
      ]
    },
    {
      id: "gorra-p",
      name: "Gorra Pariaz León Official 3D",
      price: 95000,
      category: "gorras",
      categoryLabel: "Gorras & Headwear",
      collection: "Headwear 01",
      sizes: ["Talla Única (Ajustable)"],
      badge: "LOGO OFICIAL",
      image: "assets/brand/logo.jpeg",
      description: "Gorra con el isotipo oficial de león de Pariaz bordado en relieve.",
      details: ["Bordado 3D", "Malla trasera", "Broche ajustable"],
      matching: [
        { id: "camisa-1", name: "Camiseta Manos & Luz", price: 140000, image: "assets/products/camisa.jpeg" }
      ]
    }
  ];

  const ARTISTS = [
    { name: "Blessd", avatar: "assets/products/blessd_gorra.png", image: "assets/products/blessd_gorra.png", headline: "BLESSD EN VIVO CON LA GORRA PARIAZ", subhead: "Gorra Pariaz Corona 3D Trucker en concierto.", prodId: "gorra-blessd" },
    { name: "Almighty", avatar: "assets/products/camisa_4_almaygthhy.png", image: "assets/products/camisa_4_almaygthhy.png", headline: "ALMIGHTY x PARIAZ DROP", subhead: "Camiseta Pariaz x Almighty Edition.", prodId: "camisa-4-almighty" },
    { name: "Kris R", avatar: "assets/products/krisr.jpeg", image: "assets/products/krisr.jpeg", headline: "KRIS R EN VIVO CON PARIAZ", subhead: "Camiseta Crimson Security & Trust y Gorra Snapback.", prodId: "pariaz-krisr" },
    { name: "Hades 66", avatar: "assets/products/Hades.jpeg", image: "assets/products/Hades.jpeg", headline: "HADES 66 — FULL DESERT SUIT", subhead: "Conjunto Corona Desert Sand Suit de 2 piezas.", prodId: "conjunto-hades" },
    { name: "Jon Z", avatar: "assets/products/camisa_5_jonz.png", image: "assets/products/camisa_5_jonz.png", headline: "JON Z ON TOUR CON PARIAZ", subhead: "Camiseta Ángeles Heaven Gate en tarima.", prodId: "camisa-5-jonz" },
    { name: "Tury", avatar: "assets/products/camisa_5_tury.png", image: "assets/products/camisa_5_tury.png", headline: "TURY x PARIAZ STREETWEAR", subhead: "Camiseta Pariaz x Tury Signature Edition.", prodId: "camisa-tury" },
    { name: "Luar La L", avatar: "assets/products/luar.jpeg", image: "assets/products/luar.jpeg", headline: "LUAR LA L EN ESTUDIO", subhead: "Conjunto Pariaz Azul Royal Track.", prodId: "conjunto-azul" },
    { name: "Cosculluela", avatar: "assets/products/coscu.jpeg", image: "assets/products/coscu.jpeg", headline: "COSCU x PARIAZ CULTURE", subhead: "Buzo Hoodie Pariaz Black Night Heavyweight.", prodId: "buzo-pariaz" }
  ];

  const LOOKS_DATA = {
    'hades': {
      title: 'HADES 66 — FULL DESERT SUIT',
      image: 'assets/products/Hades.jpeg',
      items: [
        { num: '01', name: 'Camiseta Corona de Espinas Sand', price: '$160.000 COP', id: 'conjunto-hades', size: 'L' },
        { num: '02', name: 'Pantalón Jogger Pariaz Desert Sand', price: '$240.000 COP', id: 'conjunto-hades', size: 'L' }
      ],
      totalCOP: '$400.000 COP',
      hotspots: [
        { top: '35%', left: '46%', label: 'Camiseta Corona ($160k)', id: 'conjunto-hades' },
        { top: '68%', left: '42%', label: 'Jogger Desert Sand ($240k)', id: 'conjunto-hades' }
      ]
    },
    'blessd': {
      title: 'BLESSD — GORRA CORONA 3D EN TARIMA',
      image: 'assets/products/blessd_gorra.png',
      items: [
        { num: '01', name: 'Gorra Pariaz Corona 3D Trucker', price: '$95.000 COP', id: 'gorra-blessd', size: 'Talla Única' },
        { num: '02', name: 'Camiseta Pariaz Manos & Luz', price: '$140.000 COP', id: 'camisa-1', size: 'L' }
      ],
      totalCOP: '$235.000 COP',
      hotspots: [
        { top: '25%', left: '50%', label: 'Gorra Corona 3D ($95k)', id: 'gorra-blessd' },
        { top: '60%', left: '50%', label: 'Camiseta Manos & Luz ($140k)', id: 'camisa-1' }
      ]
    },
    'almighty': {
      title: 'ALMIGHTY — PURPLE SPECIAL EDITION',
      image: 'assets/products/conjunto_morado_alma.png',
      items: [
        { num: '01', name: 'Camiseta Pariaz x Almighty Edition', price: '$170.000 COP', id: 'camisa-4-almighty', size: 'L' },
        { num: '02', name: 'Conjunto Pariaz Morado Track', price: '$480.000 COP', id: 'conjunto-morado', size: 'L' }
      ],
      totalCOP: '$650.000 COP',
      hotspots: [
        { top: '40%', left: '48%', label: 'Camiseta Almighty ($170k)', id: 'camisa-4-almighty' },
        { top: '70%', left: '45%', label: 'Conjunto Morado ($480k)', id: 'conjunto-morado' }
      ]
    },
    'krisr': {
      title: 'KRIS R — CRIMSON SECURITY OUTFIT',
      image: 'assets/products/krisr.jpeg',
      items: [
        { num: '01', name: 'Camiseta Crimson Security & Trust', price: '$170.000 COP', id: 'pariaz-krisr', size: 'XL' },
        { num: '02', name: 'Gorra Pariaz Snapback', price: '$95.000 COP', id: 'gorra-krisr', size: 'Talla Única' }
      ],
      totalCOP: '$265.000 COP',
      hotspots: [
        { top: '48%', left: '48%', label: 'Camiseta Crimson ($170k)', id: 'pariaz-krisr' }
      ]
    },
    'jonz': {
      title: 'JON Z — ÁNGELES HEAVEN OUTFIT',
      image: 'assets/products/camisa_5_jonz.png',
      items: [
        { num: '01', name: 'Camiseta Ángeles Heaven Gate', price: '$180.000 COP', id: 'camisa-5-jonz', size: 'L' },
        { num: '02', name: 'Gorra Pariaz Corona 3D', price: '$95.000 COP', id: 'gorra-blessd', size: 'Talla Única' }
      ],
      totalCOP: '$275.000 COP',
      hotspots: [
        { top: '46%', left: '48%', label: 'Camiseta Ángeles ($180k)', id: 'camisa-5-jonz' }
      ]
    }
  };

  // =========================================================================
  // 02. ESTADO DEL CARRITO & WISHLIST
  // =========================================================================
  let cartItems = [];
  let wishlist = [];
  let appliedCoupon = null;
  let activeProduct = null;
  let selectedSize = 'L';
  let selectedQty = 1;
  let currentCategory = 'all';
  let searchQuery = '';
  let currentLookKey = 'hades';
  let storyTimer = null;

  function formatCOP(val) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(val) + ' COP';
  }

  function showToast(msg) {
    let toast = document.getElementById('pariaz-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'pariaz-toast';
      toast.className = 'pariaz-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  function loadState() {
    try {
      const c = localStorage.getItem('prz_cart_v6');
      if (c) cartItems = JSON.parse(c);
      const w = localStorage.getItem('prz_wish_v6');
      if (w) wishlist = JSON.parse(w);
    } catch (e) {}
  }

  function saveState() {
    try {
      localStorage.setItem('prz_cart_v6', JSON.stringify(cartItems));
      localStorage.setItem('prz_wish_v6', JSON.stringify(wishlist));
    } catch (e) {}
    renderCart();
  }

  function addToCart(product, size, qty) {
    size = size || (product.sizes ? product.sizes[0] : 'L');
    qty = qty || 1;
    const key = `${product.id}_${size}`;
    const exist = cartItems.find(i => i.key === key);
    if (exist) {
      exist.qty += qty;
    } else {
      cartItems.push({
        key,
        id: product.id,
        name: product.name,
        price: product.price,
        size: size,
        qty: qty,
        image: product.image
      });
    }
    saveState();
    openCart();
    showToast(`Añadido a la bolsa: ${product.name} (Talla ${size})`);
  }

  function toggleWishlist(id) {
    const idx = wishlist.indexOf(id);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast('Eliminado de guardados');
    } else {
      wishlist.push(id);
      showToast('Guardado en favoritos');
    }
    saveState();
    renderCatalog();
  }

  function getSubtotal() {
    let sub = cartItems.reduce((acc, i) => acc + (i.price * i.qty), 0);
    if (appliedCoupon === 'PARIAZVIP') {
      sub = sub * 0.9;
    }
    return Math.round(sub);
  }

  function openCart() {
    const d = document.getElementById('cart-drawer');
    const o = document.getElementById('cart-overlay');
    if (d && o) {
      d.classList.add('is-open');
      o.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    const d = document.getElementById('cart-drawer');
    const o = document.getElementById('cart-overlay');
    if (d && o) {
      d.classList.remove('is-open');
      o.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  function generateWhatsAppUrl(delivery) {
    const phone = '573009299777';
    if (cartItems.length === 0) return `https://wa.me/${phone}?text=Hola%20Pariaz,%20quiero%20informaci%C3%B3n%20sobre%20las%20prendas`;

    let msg = `*NUEVO PEDIDO — TIENDA OFICIAL PARIAZ*\n\n`;
    cartItems.forEach(i => {
      msg += `• 1x *${i.name}* (Talla ${i.size}) — ${formatCOP(i.price * i.qty)}\n`;
    });

    const sub = getSubtotal();
    msg += `\n*TOTAL A PAGAR:* ${formatCOP(sub)}\n`;

    if (delivery && delivery.name) {
      msg += `\n*DATOS DE ENTREGA:*\n`;
      msg += `• Cliente: ${delivery.name}\n`;
      msg += `• Ciudad: ${delivery.city || 'No especificada'}\n`;
      msg += `• Dirección: ${delivery.address || 'Pendiente'}\n`;
      msg += `• Teléfono: ${delivery.phone || ''}\n`;
    }

    msg += `\n_Pedido generado desde la tienda digital de Pariaz_`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }

  // =========================================================================
  // 03. RENDERIZADORES
  // =========================================================================
  function renderCatalog() {
    const container = document.getElementById('catalog-products-grid');
    if (!container) return;

    let list = PRODUCTS;
    if (currentCategory !== 'all') {
      list = list.filter(p => p.category === currentCategory);
    }
    if (searchQuery) {
      list = list.filter(p => p.name.toLowerCase().includes(searchQuery) || p.collection.toLowerCase().includes(searchQuery));
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 48px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 8px;">No encontramos prendas con "${searchQuery}"</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Prueba buscando camiseta, conjunto, buzo o gorra.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(p => {
      const isW = wishlist.includes(p.id);
      return `
        <article class="app-product-card" data-id="${p.id}">
          <div class="app-card-media-wrap">
            <span class="app-card-badge">${p.badge}</span>
            <button class="app-wishlist-heart-btn" data-id="${p.id}" aria-label="Favorito">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="${isW ? '#e11d48' : 'none'}" stroke="${isW ? '#e11d48' : '#ffffff'}" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <img src="${p.image}" alt="${p.name}" class="app-product-thumb" loading="lazy">
          </div>
          <div class="app-card-body">
            <div class="app-card-meta-row">
              <span class="app-card-collection">${p.collection}</span>
              <span style="font-size: 0.68rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Medellín</span>
            </div>
            <h3 class="app-card-title">${p.name}</h3>
            <div class="app-card-footer">
              <div class="app-card-pricing">
                <span class="product-price-current">${formatCOP(p.price)}</span>
                <span style="font-size: 0.72rem; color: var(--text-muted); display: block;">Envíos a Colombia</span>
              </div>
              <button class="app-card-quick-add-btn" data-id="${p.id}" title="Añadir a la bolsa">+</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    container.querySelectorAll('.app-card-media-wrap, .app-card-title').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('.app-wishlist-heart-btn')) return;
        const card = el.closest('.app-product-card');
        const prod = PRODUCTS.find(p => p.id === card.getAttribute('data-id'));
        if (prod) openProductModal(prod);
      });
    });

    container.querySelectorAll('.app-wishlist-heart-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(b.getAttribute('data-id'));
      });
    });

    container.querySelectorAll('.app-card-quick-add-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        const prod = PRODUCTS.find(p => p.id === b.getAttribute('data-id'));
        if (prod) addToCart(prod, prod.sizes[0], 1);
      });
    });
  }

  function renderStories() {
    const c = document.getElementById('app-stories-bar');
    if (!c) return;
    c.innerHTML = ARTISTS.map((a, i) => `
      <button class="story-avatar-pill" data-index="${i}">
        <div class="story-avatar-ring">
          <img src="${a.avatar}" alt="${a.name}" class="story-avatar-img">
        </div>
        <span class="story-avatar-name">${a.name}</span>
      </button>
    `).join('');

    c.querySelectorAll('.story-avatar-pill').forEach(b => {
      b.addEventListener('click', () => {
        openStory(parseInt(b.getAttribute('data-index'), 10));
      });
    });
  }

  function openStory(idx) {
    const a = ARTISTS[idx];
    if (!a) return;
    const modal = document.getElementById('story-viewer-modal');
    const overlay = document.getElementById('modal-backdrop-overlay');
    if (!modal || !overlay) return;

    document.getElementById('story-artist-name').textContent = a.name;
    document.getElementById('story-artist-avatar').src = a.avatar;
    document.getElementById('story-bg-img').src = a.image;
    document.getElementById('story-headline').textContent = a.headline;
    document.getElementById('story-subhead').textContent = a.subhead;

    const btn = document.getElementById('story-product-btn');
    if (btn) {
      const prod = PRODUCTS.find(p => p.id === a.prodId);
      btn.textContent = prod ? `COMPRAR ESTE LOOK (${formatCOP(prod.price)}) →` : 'COMPRAR ESTE LOOK →';
      btn.onclick = () => {
        closeStory();
        if (prod) openProductModal(prod);
      };
    }

    const pBar = document.getElementById('story-progress-bar');
    if (pBar) {
      pBar.style.width = '0%';
      setTimeout(() => pBar.style.width = '100%', 50);
    }

    modal.classList.add('is-open');
    overlay.classList.add('is-active');

    clearTimeout(storyTimer);
    storyTimer = setTimeout(() => {
      if (idx < ARTISTS.length - 1) openStory(idx + 1);
      else closeStory();
    }, 6000);
  }

  function closeStory() {
    clearTimeout(storyTimer);
    const m = document.getElementById('story-viewer-modal');
    const o = document.getElementById('modal-backdrop-overlay');
    if (m) m.classList.remove('is-open');
    if (o) o.classList.remove('is-active');
  }

  function openProductModal(p) {
    activeProduct = p;
    selectedSize = p.sizes.includes('L') ? 'L' : p.sizes[0];
    selectedQty = 1;

    const modal = document.getElementById('product-detail-modal');
    const overlay = document.getElementById('modal-backdrop-overlay');
    if (!modal || !overlay) return;

    document.getElementById('modal-product-name').textContent = p.name;
    document.getElementById('modal-product-collection').textContent = p.collection;
    document.getElementById('modal-product-price').textContent = formatCOP(p.price);
    document.getElementById('modal-product-desc').textContent = p.description;
    document.getElementById('modal-qty-val').textContent = selectedQty;

    const vis = document.getElementById('modal-product-visual');
    if (vis) vis.innerHTML = `<img src="${p.image}" alt="${p.name}" class="modal-hero-img">`;

    // Sizes
    const sCont = document.getElementById('modal-size-selector');
    if (sCont) {
      sCont.innerHTML = p.sizes.map(s => `
        <button class="size-pill-btn ${s === selectedSize ? 'active' : ''}" data-size="${s}">${s}</button>
      `).join('');
      sCont.querySelectorAll('.size-pill-btn').forEach(b => {
        b.onclick = () => {
          sCont.querySelectorAll('.size-pill-btn').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          selectedSize = b.getAttribute('data-size');
          updateModalActions();
        };
      });
    }

    // Upselling: Completa el Look
    const mCont = document.getElementById('modal-matching-items-list');
    if (mCont) {
      if (p.matching && p.matching.length > 0) {
        const matchItem = p.matching[0];
        const comboTotal = p.price + matchItem.price;
        mCont.innerHTML = `
          <div class="matching-item-card" style="display: flex; align-items: center; justify-content: space-between; padding: 14px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); margin-top: 10px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="${matchItem.image}" alt="${matchItem.name}" style="width: 48px; height: 48px; object-fit: contain; background: #000; border-radius: var(--radius-xs);">
              <div>
                <span style="font-size: 0.7rem; font-weight: 800; color: var(--accent-red); text-transform: uppercase;">COMBINACIÓN SUGERIDA</span>
                <h4 style="font-size: 0.88rem; font-weight: 800;">${matchItem.name}</h4>
                <span style="font-size: 0.82rem; color: var(--text-secondary);">${formatCOP(matchItem.price)}</span>
              </div>
            </div>
            <button class="btn-add-combo-pill" id="btn-add-combo" style="padding: 8px 16px; background: #fff; color: #000; font-size: 0.78rem; font-weight: 800; border-radius: 100px;">
              Llevar Look Completo (${formatCOP(comboTotal)})
            </button>
          </div>
        `;
        document.getElementById('btn-add-combo').onclick = () => {
          addToCart(p, selectedSize, 1);
          const matchProd = PRODUCTS.find(x => x.id === matchItem.id);
          if (matchProd) addToCart(matchProd, matchProd.sizes[0], 1);
          closeProductModal();
          showToast(`Look completo añadido a tu bolsa (${formatCOP(comboTotal)})`);
        };
      } else {
        mCont.innerHTML = '';
      }
    }

    // Wishlist button
    const wishBtn = document.getElementById('modal-wishlist-toggle');
    if (wishBtn) {
      const isW = wishlist.includes(p.id);
      wishBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="20" height="20" fill="${isW ? '#e11d48' : 'none'}" stroke="${isW ? '#e11d48' : '#ffffff'}" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      `;
      wishBtn.onclick = () => {
        toggleWishlist(p.id);
        openProductModal(p);
      };
    }

    updateModalActions();
    modal.classList.add('is-open');
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    const modal = document.getElementById('product-detail-modal');
    const overlay = document.getElementById('modal-backdrop-overlay');
    if (modal) modal.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  function updateModalActions() {
    const addBtn = document.getElementById('modal-btn-add-cart');
    const waBtn = document.getElementById('modal-btn-whatsapp-inquiry');

    if (addBtn && activeProduct) {
      addBtn.textContent = `Añadir a la bolsa • ${formatCOP(activeProduct.price * selectedQty)}`;
      addBtn.onclick = () => {
        addToCart(activeProduct, selectedSize, selectedQty);
        closeProductModal();
      };
    }

    if (waBtn && activeProduct) {
      const text = `Hola Pariaz, quiero comprar la prenda:\n\n• *${activeProduct.name}*\n• Talla: ${selectedSize}\n• Precio: ${formatCOP(activeProduct.price)}\n\n¿Tienen disponibilidad para envío inmediato?`;
      waBtn.onclick = () => {
        window.open(`https://wa.me/573009299777?text=${encodeURIComponent(text)}`, '_blank');
      };
    }
  }

  function renderLook(key) {
    const data = LOOKS_DATA[key];
    if (!data) return;

    document.getElementById('shop-look-title').textContent = data.title;
    document.getElementById('shop-look-bg-img').src = data.image;

    const list = document.getElementById('shop-look-items-list');
    if (list) {
      list.innerHTML = data.items.map(item => `
        <div class="look-item-entry">
          <div>
            <span style="font-size: 0.7rem; color: var(--text-muted); display: block;">ITEM ${item.num}</span>
            <span class="look-item-title">${item.name}</span>
          </div>
          <span class="look-item-price">${item.price}</span>
        </div>
      `).join('');
    }

    const btn = document.getElementById('btn-add-full-outfit');
    if (btn) {
      btn.textContent = `COMPRAR ESTE LOOK COMPLETO (${data.totalCOP}) →`;
      btn.onclick = () => {
        data.items.forEach(item => {
          const prod = PRODUCTS.find(p => p.id === item.id);
          if (prod) addToCart(prod, item.size, 1);
        });
        showToast(`Look de ${data.title} añadido a tu bolsa`);
      };
    }

    const hCont = document.getElementById('shop-look-hotspots-container');
    if (hCont) {
      hCont.innerHTML = data.hotspots.map((h, i) => `
        <div class="look-hotspot-dot" style="top: ${h.top}; left: ${h.left};" data-id="${h.id}">
          <span>${i + 1}</span>
          <div class="hotspot-tooltip">${h.label}</div>
        </div>
      `).join('');

      hCont.querySelectorAll('.look-hotspot-dot').forEach(dot => {
        dot.onclick = (e) => {
          e.stopPropagation();
          const prod = PRODUCTS.find(p => p.id === dot.getAttribute('data-id'));
          if (prod) openProductModal(prod);
        };
      });
    }
  }

  function renderCart() {
    const countBadges = document.querySelectorAll('.cart-count-badge');
    const totalCount = cartItems.reduce((a, b) => a + b.qty, 0);
    countBadges.forEach(b => {
      b.textContent = totalCount;
      b.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    });

    const wishBadges = document.querySelectorAll('.wishlist-count-badge');
    wishBadges.forEach(b => {
      b.textContent = wishlist.length;
      b.style.display = wishlist.length > 0 ? 'inline-flex' : 'none';
    });

    const list = document.getElementById('cart-items-list');
    const empty = document.getElementById('cart-empty-state');
    const footer = document.getElementById('cart-drawer-footer');
    const subEl = document.getElementById('cart-subtotal-val');
    const bar = document.getElementById('free-shipping-progress');
    const barText = document.getElementById('free-shipping-text');
    const waBtn = document.getElementById('btn-checkout-whatsapp');

    const sub = getSubtotal();
    if (subEl) subEl.textContent = formatCOP(sub);

    if (bar && barText) {
      if (sub >= 300000) {
        bar.style.width = '100%';
        bar.style.backgroundColor = '#10b981';
        barText.innerHTML = '<strong>Envío Gratis activo</strong> a todo Colombia.';
      } else {
        const diff = 300000 - sub;
        const pct = Math.min(100, (sub / 300000) * 100);
        bar.style.width = `${pct}%`;
        bar.style.backgroundColor = '#ffffff';
        barText.innerHTML = `Te faltan <strong>${formatCOP(diff)}</strong> para <strong>Envío Gratis</strong>.`;
      }
    }

    if (cartItems.length === 0) {
      if (empty) empty.style.display = 'block';
      if (list) list.innerHTML = '';
      if (footer) footer.style.display = 'none';
      return;
    }

    if (empty) empty.style.display = 'none';
    if (footer) footer.style.display = 'block';

    if (list) {
      list.innerHTML = cartItems.map(item => `
        <div class="cart-item-row" data-key="${item.key}">
          <div class="cart-item-visual">
            <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-header">
              <h4 class="cart-item-name">${item.name}</h4>
              <button class="cart-item-remove-btn" data-key="${item.key}">&times;</button>
            </div>
            <div class="cart-item-meta">
              <span>Talla: <strong>${item.size}</strong></span>
              <span>${formatCOP(item.price)}</span>
            </div>
            <div class="cart-item-actions">
              <div class="qty-stepper">
                <button class="qty-btn btn-cart-minus" data-key="${item.key}">−</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn btn-cart-plus" data-key="${item.key}">+</button>
              </div>
              <span class="cart-item-line-total">${formatCOP(item.price * item.qty)}</span>
            </div>
          </div>
        </div>
      `).join('');

      list.querySelectorAll('.cart-item-remove-btn').forEach(b => {
        b.onclick = () => {
          cartItems = cartItems.filter(i => i.key !== b.getAttribute('data-key'));
          saveState();
        };
      });

      list.querySelectorAll('.btn-cart-minus').forEach(b => {
        b.onclick = () => {
          const it = cartItems.find(i => i.key === b.getAttribute('data-key'));
          if (it) {
            it.qty--;
            if (it.qty <= 0) cartItems = cartItems.filter(i => i.key !== it.key);
            saveState();
          }
        };
      });

      list.querySelectorAll('.btn-cart-plus').forEach(b => {
        b.onclick = () => {
          const it = cartItems.find(i => i.key === b.getAttribute('data-key'));
          if (it) {
            it.qty++;
            saveState();
          }
        };
      });
    }

    if (waBtn) {
      waBtn.onclick = () => {
        window.open(generateWhatsAppUrl(), '_blank');
      };
    }
  }

  function initCountdown() {
    const el = document.getElementById('drop-countdown-val');
    if (!el) return;
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(23, 59, 59);

    function update() {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) {
        el.textContent = "00D : 00H : 00M : 00S";
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      el.textContent = `${String(d).padStart(2,'0')}D : ${String(h).padStart(2,'0')}H : ${String(m).padStart(2,'0')}M : ${String(s).padStart(2,'0')}S`;
    }
    setInterval(update, 1000);
    update();
  }

  // =========================================================================
  // 04. BOOTSTRAP DE EVENTOS GLOBALES
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderStories();
    renderCatalog();
    renderCart();
    renderLook('hades');
    initCountdown();

    // Filtros de categoría
    document.querySelectorAll('.filter-tab-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab-pill').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderCatalog();
      });
    });

    // Buscador en vivo
    const sInput = document.querySelector('.app-search-input');
    if (sInput) {
      sInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderCatalog();
      });
    }

    // Lookbook Tabs
    document.querySelectorAll('.look-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.look-tab-btn').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        currentLookKey = btn.getAttribute('data-look');
        renderLook(currentLookKey);
      });
    });

    // Drawer de Carrito
    document.querySelectorAll('.trigger-cart-drawer').forEach(b => {
      b.onclick = (e) => { e.preventDefault(); openCart(); };
    });
    const cClose = document.getElementById('cart-close-btn');
    if (cClose) cClose.onclick = closeCart;
    const cOverlay = document.getElementById('cart-overlay');
    if (cOverlay) cOverlay.onclick = closeCart;

    // Modal de Producto
    const mClose = document.getElementById('modal-close-btn');
    if (mClose) mClose.onclick = closeProductModal;
    const bOverlay = document.getElementById('modal-backdrop-overlay');
    if (bOverlay) {
      bOverlay.onclick = () => {
        closeProductModal();
        closeStory();
        closeWishlist();
        closeCheckout();
        closeSizeGuide();
      };
    }

    // Modal Qty buttons
    const qMinus = document.getElementById('modal-qty-minus');
    const qPlus = document.getElementById('modal-qty-plus');
    if (qMinus) {
      qMinus.onclick = () => {
        if (selectedQty > 1) {
          selectedQty--;
          document.getElementById('modal-qty-val').textContent = selectedQty;
          updateModalActions();
        }
      };
    }
    if (qPlus) {
      qPlus.onclick = () => {
        selectedQty++;
        document.getElementById('modal-qty-val').textContent = selectedQty;
        updateModalActions();
      };
    }

    // Wishlist Modal
    function openWishlist() {
      const modal = document.getElementById('wishlist-modal');
      const overlay = document.getElementById('modal-backdrop-overlay');
      const list = document.getElementById('wishlist-items-container');
      if (!modal || !overlay || !list) return;

      const wished = PRODUCTS.filter(p => wishlist.includes(p.id));
      if (wished.length === 0) {
        list.innerHTML = `
          <div style="text-align: center; padding: 40px 20px;">
            <h4 style="font-size: 1.1rem; margin-bottom: 8px;">Tu lista de guardados está vacía</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Toca el corazón en cualquier prenda para guardarla.</p>
          </div>
        `;
      } else {
        list.innerHTML = wished.map(p => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: var(--bg-card); border-radius: var(--radius-sm); margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="${p.image}" alt="${p.name}" style="width: 44px; height: 44px; object-fit: contain;">
              <div>
                <h4 style="font-size: 0.88rem; font-weight: 700;">${p.name}</h4>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">${formatCOP(p.price)}</span>
              </div>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="btn-wish-add" data-id="${p.id}" style="padding: 6px 12px; background: #fff; color: #000; font-size: 0.75rem; font-weight: 800; border-radius: 100px;">Añadir</button>
              <button class="btn-wish-del" data-id="${p.id}" style="color: var(--text-muted); font-size: 1.2rem; padding: 0 4px;">&times;</button>
            </div>
          </div>
        `).join('');

        list.querySelectorAll('.btn-wish-add').forEach(b => {
          b.onclick = () => {
            const p = PRODUCTS.find(x => x.id === b.getAttribute('data-id'));
            if (p) { addToCart(p, p.sizes[0], 1); closeWishlist(); }
          };
        });

        list.querySelectorAll('.btn-wish-del').forEach(b => {
          b.onclick = () => { toggleWishlist(b.getAttribute('data-id')); openWishlist(); };
        });
      }

      modal.classList.add('is-open');
      overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }

    function closeWishlist() {
      const modal = document.getElementById('wishlist-modal');
      const overlay = document.getElementById('modal-backdrop-overlay');
      if (modal) modal.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.trigger-wishlist-modal').forEach(b => {
      b.onclick = (e) => { e.preventDefault(); openWishlist(); };
    });
    const wClose = document.getElementById('wishlist-close-btn');
    if (wClose) wClose.onclick = closeWishlist;

    // Checkout Flow
    function openCheckout() {
      const modal = document.getElementById('checkout-flow-modal');
      const overlay = document.getElementById('modal-backdrop-overlay');
      if (!modal || !overlay) return;

      const sub = getSubtotal();
      document.getElementById('checkout-summary-subtotal').textContent = formatCOP(sub);
      document.getElementById('checkout-summary-total').textContent = formatCOP(sub);

      document.getElementById('checkout-step-1').style.display = 'block';
      document.getElementById('checkout-step-2').style.display = 'none';
      document.getElementById('checkout-step-3').style.display = 'none';

      modal.classList.add('is-open');
      overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }

    function closeCheckout() {
      const modal = document.getElementById('checkout-flow-modal');
      const overlay = document.getElementById('modal-backdrop-overlay');
      if (modal) modal.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.trigger-checkout-modal').forEach(b => {
      b.onclick = (e) => { e.preventDefault(); closeCart(); openCheckout(); };
    });
    const cFlowClose = document.getElementById('checkout-flow-close-btn');
    if (cFlowClose) cFlowClose.onclick = closeCheckout;

    document.getElementById('btn-goto-step-2')?.addEventListener('click', () => {
      document.getElementById('checkout-step-1').style.display = 'none';
      document.getElementById('checkout-step-2').style.display = 'block';
    });

    document.getElementById('btn-back-step-1')?.addEventListener('click', () => {
      document.getElementById('checkout-step-1').style.display = 'block';
      document.getElementById('checkout-step-2').style.display = 'none';
    });

    document.getElementById('btn-goto-step-3')?.addEventListener('click', () => {
      const name = document.getElementById('checkout-input-name')?.value;
      const city = document.getElementById('checkout-input-city')?.value;
      if (!name || !city) {
        showToast('Completa tu nombre y ciudad');
        return;
      }
      document.getElementById('checkout-step-2').style.display = 'none';
      document.getElementById('checkout-step-3').style.display = 'block';
    });

    document.getElementById('btn-back-step-2')?.addEventListener('click', () => {
      document.getElementById('checkout-step-2').style.display = 'block';
      document.getElementById('checkout-step-3').style.display = 'none';
    });

    document.getElementById('btn-finish-whatsapp-pay')?.addEventListener('click', () => {
      const delivery = {
        name: document.getElementById('checkout-input-name')?.value,
        city: document.getElementById('checkout-input-city')?.value,
        address: document.getElementById('checkout-input-address')?.value,
        phone: document.getElementById('checkout-input-phone')?.value
      };
      closeCheckout();
      window.open(generateWhatsAppUrl(delivery), '_blank');
    });

    document.getElementById('btn-finish-online-pay')?.addEventListener('click', () => {
      closeCheckout();
      cartItems = [];
      saveState();
      showToast('¡Pedido confirmado! Redirigiendo a pasarela...');
    });

    // Modal Guía de Tallas
    function openSizeGuide() {
      const modal = document.getElementById('size-guide-modal');
      const overlay = document.getElementById('modal-backdrop-overlay');
      if (modal && overlay) {
        modal.classList.add('is-open');
        overlay.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeSizeGuide() {
      const modal = document.getElementById('size-guide-modal');
      const overlay = document.getElementById('modal-backdrop-overlay');
      if (modal) modal.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.trigger-size-guide').forEach(b => {
      b.onclick = (e) => { e.preventDefault(); openSizeGuide(); };
    });
    document.getElementById('size-guide-close-btn')?.addEventListener('click', closeSizeGuide);

    // Bottom Navigation
    document.getElementById('bnav-home')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.getElementById('bnav-search')?.addEventListener('click', () => {
      const inp = document.querySelector('.app-search-input');
      if (inp) { inp.focus(); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }); }
    });
    document.getElementById('bnav-cart')?.addEventListener('click', openCart);
    document.getElementById('bnav-wishlist')?.addEventListener('click', openWishlist);

    console.log("PARIAZ Commercial Experience Ready.");
  });

})();
