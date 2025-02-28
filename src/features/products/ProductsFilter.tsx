import BrandsFilter from "../../components/BrandsFilter";
import PriceFilter from "../../components/PriceFilter";
import Stars from "../../components/Stars";

const ProductsFilter = () => {
  return (
    <aside className="min-w-34 sm:min-w-36 lg:min-w-44 xl:min-w-48 xl:pl-5 flex flex-col gap-y-7">
      <div>
        <h3 className="text-sm font-semibold">Delivery Day</h3>

        <label className="flex items-center gap-x-1 mt-2">
          <input type="radio" />
          <span className="text-xs">Get It in 2 Days</span>
        </label>
      </div>

      <div>
        <h3 className="text-sm font-semibold">Customer Reviews</h3>

        <span className="flex items-center gap-x-1 mt-2">
          <Stars rate={4} /> <span className="text-xs">& Up</span>
        </span>
      </div>

      <BrandsFilter />
      <PriceFilter />
    </aside>
  );
};

export default ProductsFilter;
