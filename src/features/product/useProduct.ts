import { useQuery } from "@tanstack/react-query";

import { getProduct } from "../../services/productsApi";

export default function useProduct(id: string) {
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });

  return { isLoading, product, error };
}
