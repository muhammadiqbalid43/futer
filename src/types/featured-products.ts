interface ProductAttributes {
  title: string;
  company: string;
  description: string;
  featured: boolean;
  category: string;
  image: string;
  price: string;
  shipping: boolean;
  colors: string[];
}

export interface Product {
  id: number;
  attributes: ProductAttributes;
}
