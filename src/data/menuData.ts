export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

export const menuCategories = [
  "BRUNCH",
  "TOSTADAS ESPECIALIDAD",
  "PARA COMPARTIR",
  "BAGELS",
  "BOWLS",
  "ENSALADAS & VERDES",
  "LUNCH BOWLS",
];

export const menuItems: MenuItem[] = [
  // BRUNCH
  {
    id: "brunch-1",
    category: "BRUNCH",
    name: "French Brioche de Bacon & Aguacate",
    price: "14,95",
    description: "Bacon, aguacate, hash brown, huevo poché, salsa holandesa.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
  },
  {
    id: "brunch-2",
    category: "BRUNCH",
    name: "French Brioche de Salmón y Brotes Tiernos",
    price: "15,95",
    description: "Salmón, brotes tiernos, hash brown, huevo poché, brioche, salsa holandesa.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
  {
    id: "brunch-3",
    category: "BRUNCH",
    name: "French Brioche de Pollo Mostaza Miel",
    price: "14,95",
    description: "Pollo mostaza-miel, brotes tiernos, hash brown, huevo poché, brioche, salsa sésamo japonés.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  },
  {
    id: "brunch-4",
    category: "BRUNCH",
    name: "Huevos Revueltos & Setas a la Carbonara",
    price: "15,95",
    description: "Setas, rúcula, huevos revueltos, hash brown, parmesano, bacon crisps, brioche, salsa carbonara.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80",
  },
  {
    id: "brunch-5",
    category: "BRUNCH",
    name: "Brioche con Frutas, Nata y Arce",
    price: "13,95",
    description: "Brioche tostado con frutas del día, nata y arce.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80",
  },
  {
    id: "brunch-6",
    category: "BRUNCH",
    name: "Berry, Oats & PB",
    price: "12,95",
    description: "Brioche, mantequilla de cacahuete, arándano, plátano, granola, coco.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
  },

  // TOSTADAS ESPECIALIDAD
  {
    id: "toast-1",
    category: "TOSTADAS ESPECIALIDAD",
    name: "Tostada al Estilo Benedictino",
    price: "10,95",
    description: "Huevo poché, guacamole, bacon y salsa holandesa.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
  },
  {
    id: "toast-2",
    category: "TOSTADAS ESPECIALIDAD",
    name: "Huevos Benedictinos con Setas",
    price: "11,95",
    description: "Seta a la plancha, huevo poché, rúcula, salsa holandesa, parmesano.",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
  },
  {
    id: "toast-3",
    category: "TOSTADAS ESPECIALIDAD",
    name: "Jamón Ibérico, Rúcula & Cacahuete",
    price: "9,95",
    description: "Jamón ibérico, rúcula, AOVE, cacahuete, brote de rábano.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
  },
  {
    id: "toast-4",
    category: "TOSTADAS ESPECIALIDAD",
    name: "Infinito Huevos Revueltos de la Casa",
    price: "10,95",
    description: "Huevos revueltos, aguacate y bacon, con mayo ligero.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80",
  },
  {
    id: "toast-5",
    category: "TOSTADAS ESPECIALIDAD",
    name: "Salmon Lover",
    price: "8,95",
    description: "Salmón, queso crema, cebolla morada, rabanito, brote de rábano.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
  },
  {
    id: "toast-6",
    category: "TOSTADAS ESPECIALIDAD",
    name: "Avocado Toast (V)",
    price: "7,95",
    description: "Aguacate, semilla de calabaza, chia, AOVE, sal himalaya.",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80",
  },
  {
    id: "toast-7",
    category: "TOSTADAS ESPECIALIDAD",
    name: "Morning Spicy Salmon",
    price: "12,95",
    description: "Salmón noruego, huevos revueltos, guacamole, ensalada, spicy mayo, cebollino, sésamo.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
  },

  // PARA COMPARTIR
  {
    id: "share-1",
    category: "PARA COMPARTIR",
    name: "Shakshuka con Dos Huevos Poché",
    price: "15,95",
    description: "Huevos en tomate, pimiento, cebolla, harissa, perejil, yogurt griego. Pan masa madre.",
    image: "https://images.unsplash.com/photo-1587411768839-39b53e9da34b?w=800&q=80",
  },
  {
    id: "share-2",
    category: "PARA COMPARTIR",
    name: "Hummus al Toque Tahini",
    price: "9,95",
    description: "Hummus casero con Tahini blanco. Pan masa madre.",
    image: "https://images.unsplash.com/photo-1603729362753-f8162ac6c3df?w=800&q=80",
  },

  // BAGELS
  {
    id: "bagel-1",
    category: "BAGELS",
    name: "Everything Bagel",
    price: "12,95",
    description: "Bacon, huevos revueltos, guacamole, queso crema, brotes tiernos, sésamo.",
    image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29e84?w=800&q=80",
  },
  {
    id: "bagel-2",
    category: "BAGELS",
    name: "Pastrami Kimchi Bagel",
    price: "13,95",
    description: "Pastrami, mozzarella, kimchi, pepinillo, ensalada, guacamole, spicy mayo.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
  },
  {
    id: "bagel-3",
    category: "BAGELS",
    name: "Spicy Salmon Bagel",
    price: "13,95",
    description: "Salmón, guacamole, brotes tiernos, spicy mayo.",
    image: "https://images.unsplash.com/photo-1612377545502-21238e44e66c?w=800&q=80",
  },
  {
    id: "bagel-4",
    category: "BAGELS",
    name: "Eggy Bacon Bagel",
    price: "11,95",
    description: "Bacon, huevos revueltos, queso crema, rúcula, mayo.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  },
  {
    id: "bagel-5",
    category: "BAGELS",
    name: "Veggie Bagel",
    price: "10,95",
    description: "Rúcula, pepino, brote de ajo, tomate, guacamole, AOVE.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
  },

  // BOWLS
  {
    id: "bowl-1",
    category: "BOWLS",
    name: "Yogurt Bowl",
    price: "8,95",
    description: "Yogurt griego, frutas del día, granola bio, chia, coco.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
  },
  {
    id: "bowl-2",
    category: "BOWLS",
    name: "Açaí Bowl",
    price: "10,95",
    description: "Açaí casero, frutas del día, granola bio, chia, goji, coco.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
  },

  // ENSALADAS & VERDES
  {
    id: "salad-1",
    category: "ENSALADAS & VERDES",
    name: "Mediterránea Bowl",
    price: "10,95",
    description: "Brotes tiernos, pepino, garbanzo, tomate, cebolla morada, rábano, vinagre blanco.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
  },
  {
    id: "salad-2",
    category: "ENSALADAS & VERDES",
    name: "Aguacate, Feta & Quinoa",
    price: "12,95",
    description: "Brotes tiernos, aguacate, feta, tomate, quinoa, AOVE, vinagreta PX.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  },
  {
    id: "salad-3",
    category: "ENSALADAS & VERDES",
    name: "Pollo Mostaza-Miel",
    price: "13,95",
    description: "Pollo, guacamole, quinoa, brotes tiernos, tomate, cebolla frita, salsa sésamo.",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=80",
  },

  // LUNCH BOWLS
  {
    id: "lunch-1",
    category: "LUNCH BOWLS",
    name: "Pollo Teriyaki Bowl",
    price: "13,95",
    description: "Pollo teriyaki, pepino, cebolla morada, arroz, teriyaki, mayo japonesa.",
    image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=800&q=80",
  },
  {
    id: "lunch-2",
    category: "LUNCH BOWLS",
    name: "Spicy Salmon Poke Bowl",
    price: "14,95",
    description: "Poke de salmón, arroz, ensalada, mango, pepino, spicy mayo, sésamo.",
    image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=800&q=80",
  },
  {
    id: "lunch-3",
    category: "LUNCH BOWLS",
    name: "Seta de Miso Rice Bowl",
    price: "11,95",
    description: "Seta a la plancha con miso, cebolla morada, pepino, arroz.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
  },
];
