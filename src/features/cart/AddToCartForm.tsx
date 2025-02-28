import { useState } from "react";
import { useNavigate } from "react-router";

import Button from "../../components/Button";

import useProductCart from "./useProductCart";

export default function AddToCartForm({ productId }: { productId: number }) {
  const [selectedValue, setSelectedValue] = useState(1);
  const navigate = useNavigate();

  const { handleAddToCart } = useProductCart(productId);

  function handleSubmit() {
    console.log("selectedValue: ", selectedValue);
    handleAddToCart(productId, selectedValue);
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(Number(e.target.value))}
        className="block w-full mb-2 p-2 bg-[#F0F2F2] border border-gray-300 rounded"
      >
        <option value={selectedValue} hidden>
          Quantity: {selectedValue}
        </option>
        {Array.from({ length: 9 }).map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <Button onClick={handleSubmit} className="w-full">
        Add To Cart
      </Button>
      <Button
        onClick={() => {
          handleSubmit();
          navigate("/cart");
        }}
        className="w-full"
        variation="secondary"
      >
        Buy Now
      </Button>
    </form>
  );
}
