import Stars from "../../components/Stars";

const ProductsFilter = () => {
  return (
    <aside className="min-w-34  lg:min-w-52 lg:pl-7 flex flex-col gap-y-7">
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

      <div className="flex flex-col gap-y-2">
        <h3 className="text-sm font-bold">Brands</h3>
        <label className="flex items-center gap-x-1">
          <input type="checkbox" name="samsung" />
          <span className="text-xs">Samsung</span>
        </label>

        <label className="flex items-center gap-x-1">
          <input type="checkbox" name="lg" />
          <span className="text-xs">LG</span>
        </label>
        <label className="flex items-center gap-x-1">
          <input type="checkbox" name="haier" />
          <span className="text-xs">Haier</span>
        </label>
        <label className="flex items-center gap-x-1">
          <input type="checkbox" name="daikin" />
          <span className="text-xs">Daikin</span>
        </label>
        <label className="flex items-center gap-x-1">
          <input type="checkbox" name="godrej" />
          <span className="text-xs">Godrej</span>
        </label>
        <label className="flex items-center gap-x-1">
          <input type="checkbox" name="ifb" />
          <span className="text-xs">IFB</span>
        </label>
        <label className="flex items-center gap-x-1">
          <input type="checkbox" name="panasonic" />
          <span className="text-xs">Panasonic</span>
        </label>
      </div>

      <div className="flex flex-col gap-y-3.5">
        <h3 className="text-sm font-semibold">Price</h3>

        <label className="flex items-center gap-x-1">
          <input type="radio" name="price" value="price" />
          <span className="text-xs">All</span>
        </label>

        <label className="flex items-center gap-x-1">
          <input type="radio" name="price" value="price" />
          <span className="text-xs">₹5900 to ₹10,000</span>
        </label>
        <label className="flex items-center gap-x-1">
          <input type="radio" name="price" value="price" />
          <span className="text-xs">₹10,000 to ₹20,000</span>
        </label>
        <label className="flex items-center gap-x-1">
          <input type="radio" name="price" value="price" />
          <span className="text-xs">₹20,000 to ₹30,000</span>
        </label>
        <label className="flex items-center gap-x-1">
          <input type="radio" name="price" value="price" />
          <span className="text-xs">₹30,000 to ₹45,000</span>
        </label>
      </div>
    </aside>
  );
};

export default ProductsFilter;
