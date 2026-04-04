export interface Product {
  id: string;
  title: string;
  subtitle: string;
  background?: string;
  media: {
    images?: string[];
    videos?: string[];
    htmlFiles?: string[];
  };
  sections: {
    title: string;
    description: string;
    features?: string[];
  }[];
}
