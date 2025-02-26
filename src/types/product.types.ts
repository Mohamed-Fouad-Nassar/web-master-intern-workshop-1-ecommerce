export type TProductComment = {
  id: number;
  date: string;
  title: string;
  rating: number;
  userId: number;
  content: string;
  location: string;
  productId: number;
  details?: {
    size: number;
    color: string;
  };
};

export type TProduct = {
  id: number;
  img: string;
  title: string;
  brand: string;
  price: number;
  discount: number;
  images: string[];
  sellerId: number;
  description: string;
  rating: {
    rate: number;
    count: number;
    stars: { [key: number]: number };
  };
};

export type TProductSeller = {
  id: number;
  name: string;
  shipping: {
    min: number;
    max: number;
  };
};

export type TFinalProductComment = {
  id: number;
  date: string;
  title: string;
  rating: number;
  content: string;
  location: string;
  details?: {
    size: number;
    color: string;
  };
  user: {
    id: number;
    name: string;
    avatar: string;
  };
};
export type TFinalProduct = TProduct & {
  seller: TProductSeller;
  comments: TFinalProductComment[];
};
