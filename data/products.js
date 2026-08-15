/**
 * PARIAZ DIGITAL STORE — Catálogo Oficial (Clean Streetwear Luxury Edition)
 * Sin emojis, con tipografías limpias y datos reales.
 */

export const products = [
  {
    id: "pariaz-manos",
    name: "Camiseta Pariaz Manos & Luz",
    price: 140000,
    originalPrice: 180000,
    rating: 5.0,
    reviewsCount: 1420,
    category: "camisetas",
    categoryLabel: "Camisetas",
    collection: "Drop 004 — Signature",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#111115", "#f8fafc"],
    badge: "PIEZA INSIGNIA",
    isLatestDrop: true,
    isTrending: true,
    image: "./assets/products/camisa-manos.jpeg",
    description: "Silueta insignia de Pariaz confeccionada en algodón peinado de 240g con fit streetwear holgado. Estampado serigráfico en tramado semitono de manos elevando la 'P' cósmica.",
    details: [
      "100% Algodón Premium Peinado 240 GSM",
      "Corte Boxy Streetwear con caída pesada",
      "Estampado tramado de alta durabilidad",
      "Confeccionado en Medellín, Colombia"
    ],
    matchingItems: [
      { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "./assets/brand/logo.jpeg" },
      { id: "conjunto-hades", name: "Pantalón Jogger Sand", price: 240000, image: "./assets/artists/hades.jpeg" }
    ],
    accentColor: "#f8fafc",
    tag: "SIGNATURE"
  },
  {
    id: "pariaz-krisr",
    name: "Camiseta Crimson Security & Trust",
    price: 170000,
    originalPrice: 210000,
    rating: 4.9,
    reviewsCount: 890,
    category: "camisetas",
    categoryLabel: "Camisetas",
    collection: "Worn by Kris R",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#09090b", "#e11d48"],
    badge: "WORN BY KRIS R",
    isLatestDrop: true,
    isTrending: true,
    image: "./assets/artists/krisr.jpeg",
    description: "Pieza exclusiva vista en Kris R. Base en negro profundo con la 'P' gótica en serigrafía degradada roja carmesí y firma 'Security and trust' en cursiva.",
    details: [
      "Serigrafía táctil a dos tonos con degradado",
      "Cuello acanalado grueso de 3cm",
      "Gramaje pesado 240 GSM",
      "Etiqueta tejida en dobladillo"
    ],
    matchingItems: [
      { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "./assets/brand/logo.jpeg" },
      { id: "pariaz-manos", name: "Camiseta Manos & Luz", price: 140000, image: "./assets/products/camisa-manos.jpeg" }
    ],
    accentColor: "#e11d48",
    tag: "KRIS R"
  },
  {
    id: "pariaz-jonz",
    name: "Camiseta Ángeles Heaven Gate",
    price: 180000,
    originalPrice: 230000,
    rating: 5.0,
    reviewsCount: 654,
    category: "camisetas",
    categoryLabel: "Camisetas",
    collection: "Worn by Jon Z",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#0f172a", "#38bdf8"],
    badge: "WORN BY JON Z",
    isLatestDrop: true,
    isTrending: true,
    image: "./assets/artists/jonz.jpeg",
    description: "Pieza de autor lucida por Jon Z en vivo. Composición barroca con ángeles heraldos, leones guardianes y la emblemática 'P' abriendo las puertas celestiales.",
    details: [
      "Serigrafía discharge al agua de tacto cero",
      "Algodón pre-lavado con textura vintage",
      "Edición numerada",
      "Costuras reforzadas"
    ],
    matchingItems: [
      { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "./assets/brand/logo.jpeg" },
      { id: "pariaz-krisr", name: "Camiseta Crimson Security", price: 170000, image: "./assets/artists/krisr.jpeg" }
    ],
    accentColor: "#38bdf8",
    tag: "JON Z"
  },
  {
    id: "conjunto-hades",
    name: "Conjunto Corona Desert Sand Suit",
    price: 400000,
    originalPrice: 500000,
    rating: 5.0,
    reviewsCount: 340,
    category: "conjuntos",
    categoryLabel: "Conjuntos",
    collection: "Worn by Hades 66",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#d97706", "#292524"],
    badge: "FULL SUIT",
    isLatestDrop: true,
    isTrending: true,
    image: "./assets/artists/hades.jpeg",
    description: "Set completo de 2 piezas (Camiseta Oversize + Pantalón Jogger) lucido por Hades 66. Diseño de corona de espinas con tipografía Pariaz en tono arena desierto.",
    details: [
      "Set de 2 piezas completas",
      "Algodón perchado y gabardina técnica",
      "Bolsillos funcionales y cordones con punteras",
      "Fit Streetwear auténtico"
    ],
    matchingItems: [
      { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "./assets/brand/logo.jpeg" },
      { id: "pariaz-manos", name: "Camiseta Manos & Luz", price: 140000, image: "./assets/products/camisa-manos.jpeg" }
    ],
    accentColor: "#d97706",
    tag: "HADES 66"
  },
  {
    id: "p-blanca",
    name: "Camiseta de la P Blanca Classic",
    price: 140000,
    originalPrice: 170000,
    rating: 4.8,
    reviewsCount: 1120,
    category: "camisetas",
    categoryLabel: "Camisetas",
    collection: "Drop 001 — La P",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#ffffff", "#000000"],
    badge: "BEST SELLER",
    isLatestDrop: false,
    isTrending: false,
    image: "./assets/products/camisa-manos.jpeg",
    description: "Camiseta blanca de algodón pesado 240 GSM con el monograma 'P' serigrafiado al frente. Un clásico esencial del streetwear colombiano.",
    details: ["100% Algodón Premium 240g", "Cuello grueso de 3cm", "Corte Boxy holgado"],
    matchingItems: [
      { id: "conjunto-hades", name: "Pantalón Jogger Sand", price: 240000, image: "./assets/artists/hades.jpeg" }
    ],
    accentColor: "#ffffff",
    tag: "CLASSIC"
  },
  {
    id: "p-piedras",
    name: "Camiseta P Morada con Pedrería",
    price: 170000,
    originalPrice: 220000,
    rating: 4.9,
    reviewsCount: 430,
    category: "camisetas",
    categoryLabel: "Camisetas",
    collection: "Edición Especial",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#7e22ce", "#000000"],
    badge: "EDICIÓN ESPECIAL",
    isLatestDrop: false,
    isTrending: false,
    image: "./assets/artists/coscu.jpeg",
    description: "Pieza de autor con aplicaciones de cristales y pedrería térmica sobre base púrpura profunda.",
    details: ["Pedrería checa de alta fijación", "Algodón teñido en prenda", "Edición limitada"],
    matchingItems: [
      { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "./assets/brand/logo.jpeg" }
    ],
    accentColor: "#a855f7",
    tag: "RHINESTONES"
  },
  {
    id: "conjunto-azul",
    name: "Conjunto Pariaz Azul Royal Track",
    price: 500000,
    originalPrice: 620000,
    rating: 5.0,
    reviewsCount: 210,
    category: "conjuntos",
    categoryLabel: "Conjuntos",
    collection: "Full Suits",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#1d4ed8", "#0f172a"],
    badge: "VIP SUIT",
    isLatestDrop: false,
    isTrending: true,
    image: "./assets/artists/luar.jpeg",
    description: "Conjunto de dos piezas (Chaqueta Track + Pantalón Cargo) en gabardina técnica con cierres termosellados.",
    details: ["Chaqueta + Pantalón", "Herrajes grabados en láser", "Resistente al agua"],
    matchingItems: [
      { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "./assets/brand/logo.jpeg" }
    ],
    accentColor: "#1d4ed8",
    tag: "TRACK SUIT"
  },
  {
    id: "buzo-pariaz",
    name: "Buzo Hoodie Pariaz Heavyweight",
    price: 220000,
    originalPrice: 280000,
    rating: 4.9,
    reviewsCount: 780,
    category: "buzos",
    categoryLabel: "Buzos & Hoodies",
    collection: "Winter Streets",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#18181b", "#3f3f46"],
    badge: "ESSENTIAL",
    isLatestDrop: true,
    isTrending: false,
    image: "./assets/artists/coscu.jpeg",
    description: "Hoodie de algodón perchado térmico 380 GSM con capucha estructurada doble capa y bolsillo canguro reforzado.",
    details: ["Algodón 380g perchado", "Capucha doble sin cordones", "Bordado tonal Pariaz"],
    matchingItems: [
      { id: "pariaz-manos", name: "Camiseta Manos & Luz", price: 140000, image: "./assets/products/camisa-manos.jpeg" }
    ],
    accentColor: "#27272a",
    tag: "HEAVYWEIGHT"
  },
  {
    id: "gorra-p",
    name: "Gorra Pariaz Corona / P 3D",
    price: 95000,
    originalPrice: 120000,
    rating: 4.8,
    reviewsCount: 950,
    category: "gorras",
    categoryLabel: "Gorras & Headwear",
    collection: "Headwear 01",
    sizes: ["Talla Única (Ajustable)"],
    colors: ["#09090b"],
    badge: "HEADWEAR",
    isLatestDrop: false,
    isTrending: true,
    image: "./assets/brand/logo.jpeg",
    description: "Gorra trucker estructurada de 5 paneles con visera semi-curva, bordado puff 3D y broche snapback ajustable.",
    details: ["Bordado 3D de alta densidad", "Malla trasera transpirable", "Tafilete antitranspirante"],
    matchingItems: [
      { id: "pariaz-manos", name: "Camiseta Manos & Luz", price: 140000, image: "./assets/products/camisa-manos.jpeg" }
    ],
    accentColor: "#0f172a",
    tag: "SNAPBACK"
  },
  {
    id: "mujer-coleccion",
    name: "Top & Crop Tee Pariaz Femme",
    price: 140000,
    originalPrice: 175000,
    rating: 4.9,
    reviewsCount: 310,
    category: "mujer",
    categoryLabel: "Colección Mujer",
    collection: "Pariaz Femme",
    sizes: ["XS", "S", "M", "L"],
    colors: ["#09090b", "#db2777"],
    badge: "PARIAZ FEMME",
    isLatestDrop: false,
    isTrending: false,
    image: "./assets/products/camisa-manos.jpeg",
    description: "Prenda de silueta crop entallada con elastómero acanalado de tacto suave y logo Pariaz micro-grabado.",
    details: ["Algodón elastano acanalado", "Tacto segunda piel", "Bordado sutil"],
    matchingItems: [
      { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "./assets/brand/logo.jpeg" }
    ],
    accentColor: "#db2777",
    tag: "FEMME"
  },
  {
    id: "angeles-verde",
    name: "Edición Limitada Ángeles Verde Bosque",
    price: 180000,
    originalPrice: 240000,
    rating: 5.0,
    reviewsCount: 190,
    category: "limited",
    categoryLabel: "Ediciones Limitadas",
    collection: "Drop Ángeles Vault",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#14532d"],
    badge: "NO VUELVE",
    isLatestDrop: false,
    isTrending: true,
    image: "./assets/artists/jonz.jpeg",
    description: "Tiraje único e irrepetible en verde esmeralda con tintas reflectivas. Incluye certificado de autenticidad.",
    details: ["Certificado seriado de drop", "Tintas ecológicas reflectivas", "Corte holgado"],
    matchingItems: [
      { id: "gorra-p", name: "Gorra Pariaz Corona 3D", price: 95000, image: "./assets/brand/logo.jpeg" }
    ],
    accentColor: "#15803d",
    tag: "VAULT"
  }
];

export const dropArchive = [
  { code: "DROP 001", name: "La P Original", year: "2024", status: "SOLD OUT", itemsCount: 6 },
  { code: "DROP 002", name: "Ángeles & Barroco", year: "2024", status: "ARCHIVED", itemsCount: 4 },
  { code: "DROP 003", name: "Money Talks", year: "2025", status: "VAULT ACCESS", itemsCount: 5 },
  { code: "DROP 004", name: "Pariaz Crimson & Sand", year: "2025", status: "ACTIVE DROP", itemsCount: 6 }
];
