import { useState } from "react";
import { useNavigate } from "react-router";

import NotFound from "./NotFound";
import Modal from "../components/Modal";
import Button from "../components/Button";
import useCart from "../features/cart/useCart";
import CartItem from "../features/cart/CartItem";
import SpinnerFullScreen from "../components/SpinnerFullScreen";

export default function Cart() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const {
    error,
    isLoading,
    accessToken,
    handleClearCart,
    handleChangeQty,
    handlePlaceOrder,
    handleRemoveFromCart,
    finalProducts: items,
  } = useCart();

  if (isLoading) return <SpinnerFullScreen />;
  if (error) return <NotFound />;

  const currency = "$";
  const subTotal = items
    .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  function handleConfirmOrder(subTotal: number) {
    navigate("/thanks", { replace: true });
    setIsOpen(false);
    handlePlaceOrder(subTotal);
  }

  return (
    <main className="p-4 min-h-[calc(100vh-70px)] bg-[#eaeded] flex flex-col lg:flex-row justify-between items-start gap-4">
      <section className="flex-1 w-full p-4 bg-white rounded">
        <div className="flex gap-2 justify-between items-center pb-4 mb-4 border-b border-gray-200">
          <h2 className="font-medium text-2xl">Shopping Cart</h2>
          {items?.length ? (
            <Button size="sm" variation="third" onClick={handleClearCart}>
              Clear Cart
            </Button>
          ) : null}
        </div>

        {!items?.length ? (
          <p className="italic">No items in cart</p>
        ) : (
          <>
            {items.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                handleChangeQty={handleChangeQty}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
            <h3 className="mt-4 text-end font-medium text-lg">
              Subtotal ({items?.length} items): {currency}
              {subTotal}
            </h3>
          </>
        )}
      </section>

      {!items?.length ? null : (
        <section className="mx-auto w-full text-center max-w-sm p-4 bg-white rounded">
          <h3 className="pb-4 font-medium text-lg">
            Subtotal ({items?.length} items): {currency}
            {subTotal}
          </h3>
          {accessToken ? (
            <>
              <Button
                onClick={() => setIsOpen(true)}
                className="w-full !rounded-full"
              >
                Proceed to checkout
              </Button>
              <Modal
                isOpen={isOpen}
                title="Confirm Placing Order"
                handleCloseModal={() => setIsOpen(false)}
                callBack={() => handleConfirmOrder(Number(subTotal))}
              >
                <p>
                  Are you sure you want to place order with Subtotal:
                  <span className="ml-1 font-bold">
                    {currency}
                    {subTotal}
                  </span>
                </p>
              </Modal>
            </>
          ) : (
            <p className="italic">Please login to place order</p>
          )}
        </section>
      )}
    </main>
  );
}
