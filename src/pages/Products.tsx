import ProductItem from "../components/ProductItem";
import Spinner from "../components/Spinner";
import ProductsFilter from "../features/products/ProductsFilter";

import useProducts from "../features/products/useProduct";

export default function Products() {
  const { isLoading, products, error } = useProducts();

  if (isLoading) return <Spinner />;
  if (error) return <div className="text-red">Error: {error?.message}</div>;
  if (!products?.length) return <div className="italic">No products found</div>;

  return (
    <section className="flex items-start font-inter px-2 pt-5 pb-12 gap-x-1.5 sm:px-3 sm:gap-x-2.5">
      <ProductsFilter />

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container">
        {products.map((product) => (
          <li
            className="px-2.5 py-5 col-span-1 border border-[#D9D9D9]"
            key={product.id}
          >
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
