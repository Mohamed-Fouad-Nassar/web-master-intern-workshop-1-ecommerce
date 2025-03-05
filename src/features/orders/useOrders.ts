import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getOrders, resetOrderState } from "../../store/orders/orderSlice";

export default function useOrders() {
  const dispatch = useAppDispatch();
  const { isLoading, error, orders } = useAppSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrders());

    return () => {
      dispatch(resetOrderState());
    };
  }, [dispatch]);

  return { isLoading, error, orders };
}
