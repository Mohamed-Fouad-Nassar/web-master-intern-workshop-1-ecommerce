import { MapPin } from "lucide-react";

import ProductPrice from "./ProductPrice";
import Button from "../../components/Button";

import { formatDate } from "../../utils/helpers";

import { TProductSeller } from "../../types/product.types";

type TProductActionsProps = {
  price: number;
  seller: TProductSeller;
};

export default function ProductActions({
  price,
  seller: {
    name: sellerName,
    shipping: { min, max },
  },
}: TProductActionsProps) {
  const today = new Date();
  const minDeliveryDate = formatDate(
    new Date(today.setDate(today.getDate() + min))
  );
  const maxDeliveryDate = formatDate(
    new Date(today.setDate(today.getDate() + max))
  );

  return (
    <section className="w-full lg:w-[250px] p-4 space-y-2 border border-gray-400 rounded font-ibm-con order-2 lg:order-3">
      <ProductPrice price={price} currency="SAR" />

      <p className="font-ibm">
        {/* {sellerName} */}
        SAR96 delivery
        <span className="pl-2 font-medium">
          {minDeliveryDate} - {maxDeliveryDate}.
        </span>
      </p>

      <a href="#" className="text-third mb-1">
        Details
      </a>
      <div className="flex items-start gap-2">
        <MapPin className="size-6 mt-1.5" />
        <a href="#" className="text-third">
          Delivery to Riyadh - Update Location
        </a>
      </div>

      <p className="text-lg text-red-800 font-medium">
        Usually ships within {min} to {max} days
      </p>

      <div className="mt-4 space-y-3">
        <select
          defaultValue=""
          className="w-full p-2 bg-[#F0F2F2] border border-gray-300 rounded"
        >
          <option value="" hidden>
            Quantity: 1
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <Button className="w-full">Add To Cart</Button>
        <Button className="w-full" variation="secondary">
          Buy Now
        </Button>
      </div>

      <table className="mt-6 text-gray-500">
        <tbody>
          <tr>
            <td className="min-w-[100px]">Ships from</td>
            <td>{sellerName}</td>
          </tr>
          <tr>
            <td className="min-w-[100px]">Sold by</td>
            <td className="text-third">{sellerName}</td>
          </tr>
          <tr>
            <td className="min-w-[100px]">Payment</td>
            <td className="text-third">Secure transaction</td>
          </tr>
        </tbody>
      </table>

      <hr className="my-4 border-gray-300" />
      <button className="w-full py-1 px-3 text-start border border-gray-400 rounded-lg bg-white">
        Add To List
      </button>
    </section>
  );
}
