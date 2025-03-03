import { useSearchParams } from "react-router";

const PriceFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const price = searchParams.get("price") || "all";

  const handlePriceFilter = (value: string) => {
    searchParams.set("price", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex flex-col gap-y-3.5">
      <h3 className="text-sm font-semibold">Price</h3>

      <label className="flex items-center gap-x-1">
        <input
          type="radio"
          name="price"
          value="price"
          defaultChecked={price === "all"}
          onChange={() => handlePriceFilter("all")}
        />
        <span className="text-xs">All</span>
      </label>

      <label className="flex items-center gap-x-1">
        <input
          type="radio"
          name="price"
          value="price"
          defaultChecked={price === "5900-to-10000"}
          onChange={() => handlePriceFilter("5900-to-10000")}
        />
        <span className="text-xs">₹5900 to ₹10,000</span>
      </label>

      <label className="flex items-center gap-x-1">
        <input
          type="radio"
          name="price"
          value="price"
          defaultChecked={price === "10000-to-20000"}
          onChange={() => handlePriceFilter("10000-to-20000")}
        />
        <span className="text-xs">₹10,000 to ₹20,000</span>
      </label>

      <label className="flex items-center gap-x-1">
        <input
          type="radio"
          name="price"
          value="price"
          defaultChecked={price === "20000-to-30000"}
          onChange={() => handlePriceFilter("20000-to-30000")}
        />
        <span className="text-xs">₹20,000 to ₹30,000</span>
      </label>

      <label className="flex items-center gap-x-1">
        <input
          type="radio"
          name="price"
          value="price"
          defaultChecked={price === "30000-to-45000"}
          onChange={() => handlePriceFilter("30000-to-45000")}
        />
        <span className="text-xs">₹30,000 to ₹45,000</span>
      </label>
    </div>
  );
};

export default PriceFilter;
