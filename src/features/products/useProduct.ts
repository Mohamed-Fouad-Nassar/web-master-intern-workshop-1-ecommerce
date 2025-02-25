import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../../services/productsApi";

export default function useProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  return { isLoading, products, error };
}
