import { useSearchParams } from "react-router";

import ProductItem from "../features/products/ProductItem";
import SpinnerFullScreen from "../components/SpinnerFullScreen";
import ProductsFilter from "../features/products/ProductsFilter";

import useProducts from "../features/products/useProduct";

import { TProduct } from "../types/product.types";

export default function Products() {
  const { isLoading, products, error } = useProducts();

  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("price") || "all";
  const searchQuery = searchParams.get("query") || "";

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

  if (searchQuery) {
    filteredProducts = filteredProducts?.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (isLoading) return <SpinnerFullScreen />;
  if (error) return <div className="text-red">Error: {error?.message}</div>;

  return (
    <main className="flex items-start font-inter px-2 pt-5 pb-12 gap-x-1.5 sm:px-3 sm:gap-x-2.5">
      <ProductsFilter />
      {filteredProducts?.length ? (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container">
          {filteredProducts?.map((product) => (
            <li
              className="px-2.5 py-5 col-span-1 border border-gray-200"
              key={product.id}
            >
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="flex-1 italic text-center py-40">
          No products found in this category
        </p>
      )}
    </main>
  );
}
