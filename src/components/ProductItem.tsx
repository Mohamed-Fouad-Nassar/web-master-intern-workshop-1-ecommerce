import { ChevronDown } from "lucide-react";
import { TProduct } from "../types/product.types";
import Button from "./Button";
import Stars from "./Stars";

const ProductItem = ({ product }: { product: TProduct }) => {
  return (
    <div>
      <img src={product.img} alt={product.title} loading="lazy" />

      <div className="flex flex-col gap-y-4">
        <h2 className="text-base font-medium">{product.title}</h2>

        <div>
          <div className="flex items-center gap-x-1.5">
            <Stars rate={4} />

            <ChevronDown />

            <p className="text-base text-[#1F8394]">{product.rating.count}</p>
          </div>
          <p className="text-sm text-[#717171]">1k+ bought in past month</p>
        </div>

        <div>
          <p className="text-2xl font-normal">
            ₹{product.price}{" "}
            <span className="text-sm text-[#7F7F7F]">(Discount% off)</span>
          </p>
          <p className="text-xs text-[#7F7F7F]">Save extra with No Cost EMI</p>
        </div>

        <p className="font-light text-sm">
          FREE delivery by{" "}
          <span className="font-semibold">Sat, 14 Sept, 7:00 am - 9:00 pm</span>
        </p>

        <Button className="w-fit text-xs sm:text-sm bg-[#FFCC00] hover:bg-[#FFCC00]/95">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
