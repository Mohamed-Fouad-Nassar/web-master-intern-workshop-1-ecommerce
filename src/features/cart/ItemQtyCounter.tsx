import { Minus, Plus, Trash2 } from "lucide-react";

type TItemQtyCounterProps = {
  id: number;
  quantity: number;
  handleRemoveFromCart: (id: number) => void;
  handleChangeQty: (id: number, quantity: number) => void;
};

export default function ItemQtyCounter({
  id,
  quantity,
  handleChangeQty,
  handleRemoveFromCart,
}: TItemQtyCounterProps) {
  return (
    <div className="flex items-center gap-2">
      {/* counter */}
      <div className="flex gap-2 items-center border border-gray-300 rounded-full w-fit">
        <button
          className="px-3 py-2 cursor-pointer"
          onClick={() =>
            quantity > 1
              ? handleChangeQty(id, quantity - 1)
              : handleRemoveFromCart(id)
          }
        >
          {quantity > 1 ? (
            <Minus className="size-4" />
          ) : (
            <Trash2 className="size-4" />
          )}
        </button>
        <span>{quantity}</span>
        <button
          className="px-3 py-2 cursor-pointer"
          onClick={() => quantity <= 8 && handleChangeQty(id, quantity + 1)}
        >
          <Plus className="size-4" />
        </button>
      </div>
      <button
        onClick={() => handleRemoveFromCart(id)}
        className="p-2 cursor-pointer rounded-full border border-gray-300"
      >
        <Trash2 className="size-4" />
      </button>
    </div>
  );
}
