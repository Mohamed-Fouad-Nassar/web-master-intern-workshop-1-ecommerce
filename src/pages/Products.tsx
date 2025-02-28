import ProductItem from "../components/ProductItem";
import Spinner from "../components/Spinner";
import ProductsFilter from "../components/ProductsFilter";

import useProducts from "../features/products/useProduct";
import { useSearchParams } from "react-router";
import { TProduct } from "../types/product.types";

export default function Products() {
  const { isLoading, products, error } = useProducts();

  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("price") || "all";
  const brandsFilterValue = searchParams.get("brands") || "all";

  console.log(brandsFilterValue);

  let filteredProducts: TProduct[] | undefined;

  if (filterValue === "all") filteredProducts = products;

  if (filterValue === "5900-to-10000")
    filteredProducts = products?.filter(
      (product) => product.price >= 5900 && product.price <= 10000
    );

  if (filterValue === "10000-to-20000")
    filteredProducts = products?.filter(
      (product) => product.price >= 10000 && product.price <= 20000
    );

  if (filterValue === "20000-to-30000")
    filteredProducts = products?.filter(
      (product) => product.price >= 20000 && product.price <= 30000
    );

  if (filterValue === "30000-to-45000")
    filteredProducts = products?.filter(
      (product) => product.price >= 30000 && product.price <= 45000
    );

  if (isLoading) return <Spinner />;
  if (error) return <div className="text-red">Error: {error?.message}</div>;
  if (!filteredProducts?.length)
    return <div className="italic">No products found</div>;

  return (
    <section className="flex items-start font-inter px-2 pt-5 pb-12 gap-x-1.5 sm:px-3 sm:gap-x-2.5">
      <ProductsFilter />

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container">
        {filteredProducts?.map((product) => (
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
