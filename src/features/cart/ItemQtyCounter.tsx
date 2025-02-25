import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function ItemQtyCounter({ quantity }: { quantity: number }) {
  const [itemQty, setItemQty] = useState(quantity);

  return (
    <div className="flex items-center gap-2">
      {/* counter */}
      <div className="flex gap-2 items-center border border-gray-300 rounded-full w-fit">
        <button
          onClick={() => setItemQty((cur) => cur - 1)}
          className="px-3 py-2 cursor-pointer"
        >
          {itemQty > 1 ? (
            <Minus className="size-4" />
          ) : (
            <Trash2 className="size-4" />
          )}
        </button>
        <span>{itemQty}</span>
        <button
          onClick={() => setItemQty((cur) => cur + 1)}
          className="px-3 py-2 cursor-pointer"
        >
          <Plus className="size-4" />
        </button>
      </div>
      <button
        onClick={() => setItemQty(0)}
        className="p-2 cursor-pointer rounded-full border border-gray-300"
      >
        <Trash2 className="size-4" />
      </button>
    </div>
  );
}
