import { useCallback } from "react";
import {
  addToCart,
  changeQty,
  removeFromCart,
} from "../../store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export default function useProductCart(id: number) {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);

  const isInCart = Object.keys(items).includes(id.toString());
  const quantity = items[id];

  const handleAddToCart = (id: number, quantity: number = 1) => {
    dispatch(addToCart({ id, quantity }));
  };

  const handleRemoveFromCart = useCallback(
    (id: number) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  const handleChangeQty = useCallback(
    (id: number, quantity: number) => dispatch(changeQty({ id, quantity })),
    [dispatch]
  );

  return {
    quantity,
    isInCart,
    handleAddToCart,
    handleChangeQty,
    handleRemoveFromCart,
  };
}
