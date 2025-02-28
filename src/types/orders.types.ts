export type TOrderProduct = {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
};

export type TOrder = {
  id: number;
  userId: number;
  subtotal: number;
  items: TOrderProduct[];
};
