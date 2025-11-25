import postres1 from "../assets/bizcocho.jfif";
import brioche1 from "../assets/brioche-nutella.jfif";
import brioche2 from "../assets/brioche-arandano.jfif";
import brioche3 from "../assets/brioche-oreo.jfif";
import brioche4 from "../assets/brioche-bacon-aguacate.jfif";

export interface MenuSectionGroup {
  name: string;
}

export interface MenuCategory {
  name: string;
  sections?: MenuSectionGroup[];
}

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: MenuCategory["name"];
  section?: string;
  image: string;
}

export const menuCategories: MenuCategory[] = [
  {
    name: "BRUNCH",
    sections: [{ name: "Brioche Salados" }, { name: "Brioche Dulces" }],
  },
  {
    name: "TOSTADAS ESPECIALIDAD",
  },
  {
    name: "PARA COMPARTIR",
  },
  {
    name: "BAGELS",
  },
  {
    name: "BOWLS",
  },
  {
    name: "ENSALADAS & VERDES",
  },
  {
    name: "LUNCH BOWLS",
  },
  {
    name: "POSTRES",
    sections: [{ name: "Brioche" }, { name: "Pasteles" }],
  },
];

export const menuItems: MenuItem[] = [
  // BRUNCH
  {
    id: "brunch-1",
    category: "BRUNCH",
    section: "Brioche Salados",
    name: "French Brioche de Bacon & Aguacate",
    price: "14,95",
    description: "Bacon, aguacate, hash brown, huevo poche, salsa holandesa.",
    image: brioche4,
  },
  {
    id: "brunch-2",
    category: "BRUNCH",
    section: "Brioche Salados",
    name: "French Brioche de Salmon y Brotes Tiernos",
    price: "15,95",
    description: "Salmon, brotes tiernos, hash brown, huevo poche, brioche, salsa holandesa.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
  {
    id: "brunch-3",
    category: "BRUNCH",
    section: "Brioche Salados",
    name: "French Brioche de Pollo Mostaza Miel",
    price: "14,95",
    description: "Pollo mostaza-miel, brotes tiernos, hash brown, huevo poche, brioche, salsa sesamo japones.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  },
  {
    id: "brunch-4",
    category: "BRUNCH",
    section: "Brioche Salados",
    name: "Huevos Revueltos & Setas a la Carbonara",
    price: "15,95",
    description: "Setas, rucula, huevos revueltos, hash brown, parmesano, bacon crisps, brioche, salsa carbonara.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80",
  },
  {
    id: "brunch-5",
    category: "BRUNCH",
    section: "Brioche Dulces",
    name: "Brioche con Frutas, Nata y Arce",
    price: "13,95",
    description: "Brioche tostado con frutas del dia, nata y arce.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80",
  },
  {
    id: "brunch-6",
    category: "BRUNCH",
    section: "Brioche Dulces",
    name: "Berry, Oats & PB",
    price: "12,95",
    description: "Brioche, mantequilla de cacahuete, arandano, platano, granola, coco.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
  },

  // TOSTADAS ESPECIALIDAD
  {
    id: "toast-1",
    category: "TOSTADAS ESPECIALIDAD",
    section: "Huevos",
    name: "Tostada al Estilo Benedictino",
    price: "10,95",
    description: "Huevo poche, guacamole, bacon y salsa holandesa.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
  },
  {
    id: "toast-2",
    category: "TOSTADAS ESPECIALIDAD",
    section: "Huevos",
    name: "Huevos Benedictinos con Setas",
    price: "11,95",
    description: "Seta a la plancha, huevo poche, rucula, salsa holandesa, parmesano.",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
  },
  {
    id: "toast-3",
    category: "TOSTADAS ESPECIALIDAD",
    section: "Jamon y Salmon",
    name: "Jamon Iberico, Rucula & Cacahuete",
    price: "9,95",
    description: "Jamon iberico, rucula, AOVE, cacahuete, brote de rabano.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
  },
  {
    id: "toast-4",
    category: "TOSTADAS ESPECIALIDAD",
    section: "Huevos",
    name: "Infinito Huevos Revueltos de la Casa",
    price: "10,95",
    description: "Huevos revueltos, aguacate y bacon, con mayo ligero.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80",
  },
  {
    id: "toast-5",
    category: "TOSTADAS ESPECIALIDAD",
    section: "Jamon y Salmon",
    name: "Salmon Lover",
    price: "8,95",
    description: "Salmon, queso crema, cebolla morada, rabanito, brote de rabano.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
  },
  {
    id: "toast-6",
    category: "TOSTADAS ESPECIALIDAD",
    section: "Veggie",
    name: "Avocado Toast (V)",
    price: "7,95",
    description: "Aguacate, semilla de calabaza, chia, AOVE, sal himalaya.",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80",
  },
  {
    id: "toast-7",
    category: "TOSTADAS ESPECIALIDAD",
    section: "Jamon y Salmon",
    name: "Morning Spicy Salmon",
    price: "12,95",
    description: "Salmon noruego, huevos revueltos, guacamole, ensalada, spicy mayo, cebollino, sesamo.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
  },

  // PARA COMPARTIR
  {
    id: "share-1",
    category: "PARA COMPARTIR",
    section: "Huevos",
    name: "Shakshuka con Dos Huevos Poche",
    price: "15,95",
    description: "Huevos en tomate, pimiento, cebolla, harissa, perejil, yogurt griego. Pan masa madre.",
    image: "https://images.unsplash.com/photo-1587411768839-39b53e9da34b?w=800&q=80",
  },
  {
    id: "share-2",
    category: "PARA COMPARTIR",
    section: "Untables",
    name: "Hummus al Toque Tahini",
    price: "9,95",
    description: "Hummus casero con tahini blanco. Pan masa madre.",
    image: "https://images.unsplash.com/photo-1603729362753-f8162ac6c3df?w=800&q=80",
  },

  // BAGELS
  {
    id: "bagel-1",
    category: "BAGELS",
    section: "Carnes",
    name: "Everything Bagel",
    price: "12,95",
    description: "Bacon, huevos revueltos, guacamole, queso crema, brotes tiernos, sesamo.",
    image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29e84?w=800&q=80",
  },
  {
    id: "bagel-2",
    category: "BAGELS",
    section: "Carnes",
    name: "Pastrami Kimchi Bagel",
    price: "13,95",
    description: "Pastrami, mozzarella, kimchi, pepinillo, ensalada, guacamole, spicy mayo.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
  },
  {
    id: "bagel-3",
    category: "BAGELS",
    section: "Pescado",
    name: "Spicy Salmon Bagel",
    price: "13,95",
    description: "Salmon, guacamole, brotes tiernos, spicy mayo.",
    image: "https://images.unsplash.com/photo-1612377545502-21238e44e66c?w=800&q=80",
  },
  {
    id: "bagel-4",
    category: "BAGELS",
    section: "Carnes",
    name: "Eggy Bacon Bagel",
    price: "11,95",
    description: "Bacon, huevos revueltos, queso crema, rucula, mayo.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  },
  {
    id: "bagel-5",
    category: "BAGELS",
    section: "Veggie",
    name: "Veggie Bagel",
    price: "10,95",
    description: "Rucula, pepino, brote de ajo, tomate, guacamole, AOVE.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
  },

  // BOWLS
  {
    id: "bowl-1",
    category: "BOWLS",
    section: "Ligeros",
    name: "Yogurt Bowl",
    price: "8,95",
    description: "Yogurt griego, frutas del dia, granola bio, chia, coco.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
  },
  {
    id: "bowl-2",
    category: "BOWLS",
    section: "Acai",
    name: "Acai Bowl",
    price: "10,95",
    description: "Acai casero, frutas del dia, granola bio, chia, goji, coco.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
  },

  // ENSALADAS & VERDES
  {
    id: "salad-1",
    category: "ENSALADAS & VERDES",
    section: "Fresco",
    name: "Mediterranea Bowl",
    price: "10,95",
    description: "Brotes tiernos, pepino, garbanzo, tomate, cebolla morada, rabano, vinagre blanco.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
  },
  {
    id: "salad-2",
    category: "ENSALADAS & VERDES",
    section: "Fresco",
    name: "Aguacate, Feta & Quinoa",
    price: "12,95",
    description: "Brotes tiernos, aguacate, feta, tomate, quinoa, AOVE, vinagreta PX.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  },
  {
    id: "salad-3",
    category: "ENSALADAS & VERDES",
    section: "Proteina",
    name: "Pollo Mostaza-Miel",
    price: "13,95",
    description: "Pollo, guacamole, quinoa, brotes tiernos, tomate, cebolla frita, salsa sesamo.",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=80",
  },

  // LUNCH BOWLS
  {
    id: "lunch-1",
    category: "LUNCH BOWLS",
    section: "Pollo",
    name: "Pollo Teriyaki Bowl",
    price: "13,95",
    description: "Pollo teriyaki, pepino, cebolla morada, arroz, teriyaki, mayo japonesa.",
    image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=800&q=80",
  },
  {
    id: "lunch-2",
    category: "LUNCH BOWLS",
    section: "Pescado",
    name: "Spicy Salmon Poke Bowl",
    price: "14,95",
    description: "Poke de salmon, arroz, ensalada, mango, pepino, spicy mayo, sesamo.",
    image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=800&q=80",
  },
  {
    id: "lunch-3",
    category: "LUNCH BOWLS",
    section: "Veggie",
    name: "Seta de Miso Rice Bowl",
    price: "11,95",
    description: "Seta a la plancha con miso, cebolla morada, pepino, arroz.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
  },

  // POSTRES
  {
    id: "postres-1",
    category: "POSTRES",
    section: "Brioche",
    name: "Brioche Oreo",
    price: "5,50",
    description: "Brioche dulce con chocolate blanco y galleta Oreo.",
    image: brioche3,
  },
  {
    id: "postres-2",
    category: "POSTRES",
    section: "Brioche",
    name: "Brioche Arandano",
    price: "5,50",
    description: "Brioche dulce con sirope de arandano, frutas y nata.",
    image: brioche2,
  },
  {
    id: "postres-3",
    category: "POSTRES",
    section: "Brioche",
    name: "Brioche Nutella",
    price: "5,50",
    description: "Brioche dulce con crema de cacahuete y Nutella.",
    image: brioche1,
  },
  {
    id: "postres-4",
    category: "POSTRES",
    section: "Pasteles",
    name: "Bizcocho de Calabaza",
    price: "5,50",
    description: "Bizcocho casero de calabaza con especias y glaseado de queso crema.",
    image: postres1,
  },
];
