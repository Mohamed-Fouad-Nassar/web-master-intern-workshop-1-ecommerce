import Button from "../components/Button";
import CartItem from "../features/cart/CartItem";

import img1 from "../data/images/product-img-1.png";
import img2 from "../data/images/product-img-2.png";
import img3 from "../data/images/product-img-3.jpg";

export type TCartItem = {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
};

const cartItems: TCartItem[] = [
  {
    id: 1,
    title:
      "LG 7 Kg, 5 Star, Direct Drive Technology, Steam Wash, 6 Motion DD, Smart Diagnosis, Fully-Automatic Front Load",
    price: 12.53,
    quantity: 2,
    img: img1,
  },
  {
    id: 2,
    title: "Sony Alpha 7 IV Full-Frame Mirrorless Camera ",
    price: 200.23,
    quantity: 1,
    img: img2,
  },
  {
    id: 3,
    title: "Samsung Galaxy S23 Ultra 5G, 256GB, Phantom Black",
    price: 199.98,
    quantity: 3,
    img: img3,
  },
];

export default function Cart() {
  const currency = "$";
  const totalSub = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-4 min-h-[calc(100vh-70px)] bg-[#eaeded] flex flex-col lg:flex-row justify-between items-start gap-4">
      <section className="flex-1 p-4 bg-white rounded-xs">
        <h2 className="pb-4 mb-4 font-medium text-2xl border-b border-gray-200">
          Shopping Cart
        </h2>

        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <h3 className="mt-4 text-end font-medium text-lg">
          Subtotal ({cartItems?.length} items): {currency}
          {totalSub}
        </h3>
      </section>

      <section className="mx-auto w-full text-center max-w-sm p-4 bg-white rounded-xs">
        <h3 className="pb-4 font-medium text-lg">
          Subtotal ({cartItems?.length} items): {currency}
          {totalSub}
        </h3>
        <Button size="sm" className="w-full">
          Proceed to checkout
        </Button>
      </section>
    </div>
  );
}
