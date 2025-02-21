export type TProductComment = {
  date: string;
  title: string;
  rating: number;
  details?: {
    size: number;
    color: string;
  };
  location: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
};

export type TProduct = {
  id: number;
  title: string;
  brand: string;
  description: string;
  price: number;
  rating: {
    rate: number;
    count: number;
    stars: { [key: number]: number };
  };
  images: string[];
};

export type TProductSeller = {
  name: string;
  shipping: {
    min: number;
    max: number;
  };
};
