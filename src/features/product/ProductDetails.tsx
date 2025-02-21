import ProductPrice from "./ProductPrice";
import Stars from "../../components/Stars";

import { TProduct } from "../../types/product.types";

type TProductDetailsProps = {
  product: TProduct;
};

export default function ProductDetails({ product }: TProductDetailsProps) {
  const {
    title,
    brand,
    price,
    description,
    rating: { rate, count },
  } = product;

  return (
    <section className="w-full flex-1 font-ibm order-3 lg:order-2">
      <div className="hidden lg:block">
        <span className="text-third font-inika uppercase">brand: {brand}</span>
        <h2 className="text-2xl text-gray-700">{title}</h2>
        <div className="pt-2 flex gap-4">
          <span className="flex gap-1 items-center">
            {rate} <Stars rate={rate} />
          </span>
          <div className="flex items-center divide-x divide-gray-800 text-third gap-2">
            <span className="pr-2">{count} ratings</span>
            <a href="#" className="hover:underline">
              Search this page
            </a>
          </div>
        </div>
        <hr className="border-gray-300 my-4" />
      </div>

      <div className="space-y-2">
        <ProductPrice price={price} currency="SAR" />
        <p>All price include VAT.</p>
        <p>
          <span className="font-light text-gray-700">Sign in to redeem.</span>
          <span className="bg-[#71ED58] px-2 ml-1">Extra 20%</span> off with
          meem credit cards.
        </p>
        <p>Enter code MEEM20 at checkout. Discount by Amazon.</p>

        <div className="pt-2 flex items-center gap-4 text-third text-center">
          <div className="max-w-28 flex flex-col items-center gap-1">
            <img
              src="/src/data/icons/payment-icon.png"
              alt="payment-icon"
              className="w-10"
            />
            <span className="text-pretty leading-5">
              Electronic payment Only
            </span>
          </div>

          <div className="max-w-28 flex flex-col items-center gap-1">
            <img
              src="/src/data/icons/returnable-icon.png"
              alt="returnable-icon"
              className="w-10"
            />
            <span className="text-pretty leading-5">30 days Returnable</span>
          </div>

          <div className="max-w-28 flex flex-col items-center gap-1">
            <img
              src="/src/data/icons/secure-icon.png"
              alt="secure-icon"
              className="w-10"
            />
            <span className="text-pretty leading-5">Secure transaction</span>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 my-4" />
      <div className="text-lg">
        <h3 className="font-bold mb-2">About This Item</h3>
        <ul className="list-disc pl-6">
          {description?.split("\n").map((item, i) => (
            <li key={i} className="font-light leading-5 mb-1.5">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
