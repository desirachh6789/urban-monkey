export type ProductCategory = 'Footwear' | 'Outerwear' | 'Apparel' | 'Bottoms';

export type SneakerColorVariant = 'Obsidian' | 'Bone' | 'Signal';

export interface ProductVariant {
  id: string;
  name: SneakerColorVariant | string;
  colorHex: string;
  secondaryHex?: string;
  accentHex?: string;
  availableSizes: string[];
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number; // in INR
  color: string;
  description: string;
  tagline: string;
  details: string[];
  materials: string[];
  sizes: string[];
  variants?: ProductVariant[];
  badge?: string;
  featured?: boolean;
  has3DModel?: boolean;
  image?: string;
}

export interface CartItem {
  id: string; // unique item cart key (productId + variant + size)
  productId: string;
  product: Product;
  selectedVariant: string;
  selectedSize: string;
  quantity: number;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  content: string[];
}

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  type?: 'success' | 'info' | 'error';
}
