import ItemQtyCounter from "./ItemQtyCounter";

import { TCartItem } from "../../pages/Cart";

export default function CartItem({ item }: { item: TCartItem }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start border-b border-gray-200 py-4">
      <img
        src={item.img}
        className="max-w-[180px] mx-auto"
        alt={`${item.title}` || "product-image"}
      />

      <div className="flex-1 px-2">
        <h4 className="font-semibold text-lg line-clamp-2">{item.title}</h4>
        <span className="text-green-700 block mb-2 mt-1">In Stock</span>
        <span className="text-sky-600">FREE International Returns</span>

        <div className="mt-4 sm:mt-8 flex justify-between items-center">
          <ItemQtyCounter quantity={item.quantity} />
          <span className="sm:hidden text-end font-bold text-lg">
            ${item.price}
          </span>
        </div>
      </div>

      <span className="hidden sm:block font-bold text-lg">${item.price}</span>
    </div>
  );
}
