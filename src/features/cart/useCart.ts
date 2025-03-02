import { useCallback, useEffect } from "react";

import {
  changeQty,
  clearCart,
  cleanUpCart,
  removeFromCart,
  getCartProducts,
} from "../../store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { createOrder, resetOrderState } from "../../store/orders/orderSlice";

export default function useCart() {
  const dispatch = useAppDispatch();
  const { isLoading, error, products, items } = useAppSelector(
    (state) => state.cart
  );
  const { accessToken } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCartProducts());

    return () => {
      dispatch(cleanUpCart());
      dispatch(resetOrderState());
    };
  }, [dispatch]);

  const finalProducts = products.map((product) => ({
    ...product,
    quantity: items[product.id],
  }));

  const handleChangeQty = useCallback(
    (id: number, quantity: number) => dispatch(changeQty({ id, quantity })),
    [dispatch]
  );

  const handleRemoveFromCart = useCallback(
    (id: number) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  const handleClearCart = () => dispatch(clearCart());

  const handlePlaceOrder = (subtotal: number) => {
    dispatch(createOrder(subtotal))
      .unwrap()
      .then(() => dispatch(clearCart()));
  };

  return {
    error,
    isLoading,
    accessToken,
    finalProducts,
    handleChangeQty,
    handleClearCart,
    handlePlaceOrder,
    handleRemoveFromCart,
  };
}
