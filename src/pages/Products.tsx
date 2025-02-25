import Spinner from "../components/Spinner";

import useProducts from "../features/products/useProduct";

export default function Products() {
  const { isLoading, products, error } = useProducts();

  if (isLoading) return <Spinner />;
  if (error) return <div className="text-red">Error: {error?.message}</div>;
  if (!products?.length) return <div className="italic">No products found</div>;

  return (
    <ul className="px-4 py-10 container mx-auto">
      {products.map((product) => (
        <li className="font-medium text-lg pb-4" key={product.id}>
          {product.title}
        </li>
      ))}
    </ul>
  );
}

// export default function Products() {
//   return <div>Products</div>;
// }
