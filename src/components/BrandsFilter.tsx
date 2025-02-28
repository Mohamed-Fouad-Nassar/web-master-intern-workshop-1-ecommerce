const BrandsFilter = () => {
  return (
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
  );
};

export default BrandsFilter;
