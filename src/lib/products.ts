import headphones from "@/assets/prod-headphones.jpg";
import smartwatch from "@/assets/prod-smartwatch.jpg";
import earbuds from "@/assets/prod-earbuds.jpg";
import airfryer from "@/assets/prod-airfryer.jpg";
import carvac from "@/assets/prod-carvac.jpg";
import ringlight from "@/assets/prod-ringlight.jpg";
import desklamp from "@/assets/prod-desklamp.jpg";
import speaker from "@/assets/prod-speaker.jpg";

export type CategorySlug =
  | "tecnologia"
  | "casa"
  | "carro"
  | "utilidades"
  | "promocoes"
  | "favoritos";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string; // lucide icon name
}

export const categories: Category[] = [
  { slug: "tecnologia", name: "Tecnologia", description: "Gadgets e eletrônicos", icon: "Cpu" },
  { slug: "casa", name: "Casa", description: "Praticidade para o lar", icon: "Home" },
  { slug: "carro", name: "Carro", description: "Automotivo e viagem", icon: "Car" },
  { slug: "utilidades", name: "Utilidades", description: "Ferramentas do dia a dia", icon: "Wrench" },
  { slug: "promocoes", name: "Promoções", description: "Ofertas relâmpago", icon: "Flame" },
  { slug: "favoritos", name: "Favoritos", description: "Os mais amados", icon: "Star" },
];

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: CategorySlug;
  affiliateUrl: string;
  featured?: boolean;
  hot?: boolean;
  rating: number;
  reviews: number;
  description: string;
}

const shopee = (id: string) => `https://shopee.com.br/product/${id}`;

export const products: Product[] = [
  {
    id: "headphones-pro",
    name: "Headphone Bluetooth Pro",
    tagline: "Cancelamento de ruído ativo",
    price: 189.9,
    oldPrice: 349.9,
    image: headphones,
    category: "tecnologia",
    affiliateUrl: shopee("headphones-pro"),
    featured: true,
    hot: true,
    rating: 4.8,
    reviews: 1284,
    description:
      "Áudio imersivo com cancelamento ativo de ruído, bateria de 40h e conexão Bluetooth 5.3. Confortável para uso prolongado.",
  },
  {
    id: "smartwatch-x",
    name: "Smartwatch Série X",
    tagline: "Saúde e esportes",
    price: 149.9,
    oldPrice: 299.0,
    image: smartwatch,
    category: "tecnologia",
    affiliateUrl: shopee("smartwatch-x"),
    featured: true,
    rating: 4.7,
    reviews: 892,
    description:
      "Monitoramento cardíaco, oxímetro, GPS integrado, notificações e mais de 100 modos esportivos.",
  },
  {
    id: "earbuds-air",
    name: "Fones Air Pods TWS",
    tagline: "Toque touch e case magnético",
    price: 89.9,
    oldPrice: 179.9,
    image: earbuds,
    category: "tecnologia",
    affiliateUrl: shopee("earbuds-air"),
    hot: true,
    rating: 4.6,
    reviews: 2103,
    description:
      "Fones sem fio com Bluetooth 5.3, controle touch, cancelamento de ruído e estojo com carregamento rápido.",
  },
  {
    id: "airfryer-4l",
    name: "Airfryer 4L Digital",
    tagline: "Sem óleo, sem culpa",
    price: 259.0,
    oldPrice: 459.0,
    image: airfryer,
    category: "casa",
    affiliateUrl: shopee("airfryer-4l"),
    featured: true,
    rating: 4.9,
    reviews: 3456,
    description:
      "Fritadeira elétrica de 4 litros com painel digital touch, 8 programas automáticos e desligamento seguro.",
  },
  {
    id: "car-vacuum",
    name: "Aspirador Automotivo",
    tagline: "Portátil e potente",
    price: 79.9,
    oldPrice: 149.9,
    image: carvac,
    category: "carro",
    affiliateUrl: shopee("car-vacuum"),
    rating: 4.5,
    reviews: 512,
    description:
      "Aspirador de pó portátil 12V com 3 bicos, ideal para limpar bancos, carpetes e cantos do carro.",
  },
  {
    id: "ring-light",
    name: "Ring Light 26cm Tripé",
    tagline: "Luz perfeita para vídeos",
    price: 119.9,
    oldPrice: 219.0,
    image: ringlight,
    category: "utilidades",
    affiliateUrl: shopee("ring-light"),
    rating: 4.7,
    reviews: 780,
    description:
      "Iluminador LED profissional com 3 tonalidades, 10 níveis de brilho e tripé ajustável até 2m.",
  },
  {
    id: "desk-lamp",
    name: "Luminária LED Slim",
    tagline: "Foco e estilo",
    price: 89.0,
    image: desklamp,
    category: "casa",
    affiliateUrl: shopee("desk-lamp"),
    rating: 4.6,
    reviews: 340,
    description:
      "Luminária de mesa com braço articulado, controle touch e proteção para os olhos.",
  },
  {
    id: "mini-speaker",
    name: "Caixa de Som Mini Bluetooth",
    tagline: "Som potente no bolso",
    price: 49.9,
    oldPrice: 99.9,
    image: speaker,
    category: "tecnologia",
    affiliateUrl: shopee("mini-speaker"),
    hot: true,
    rating: 4.5,
    reviews: 1590,
    description:
      "Speaker Bluetooth compacto com graves potentes, à prova d'água e bateria de 8h.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const getByCategory = (slug: CategorySlug) =>
  products.filter((p) => p.category === slug);
export const getFeatured = () => products.filter((p) => p.featured);
export const getHotDeals = () => products.filter((p) => p.hot || p.oldPrice);
export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Contact
export const WHATSAPP_NUMBER = "5511999999999"; // troque pelo seu número
export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
export const INSTAGRAM_URL = "https://instagram.com/vitrio_ofc";
