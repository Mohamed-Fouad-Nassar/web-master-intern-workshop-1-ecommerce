import { memo } from "react";
import { Link } from "react-router";

import Stars from "../../components/Stars";
import Button from "../../components/Button";

import useProductCart from "../cart/useProductCart";

import { TProduct } from "../../types/product.types";
import ItemQtyCounter from "../cart/ItemQtyCounter";

const ProductItem = memo(({ product }: { product: TProduct }) => {
  const {
    quantity,
    isInCart,
    handleAddToCart,
    handleChangeQty,
    handleRemoveFromCart,
  } = useProductCart(product?.id);

  return (
    <>
      <img
        loading="lazy"
        src={product?.img}
        alt={product?.title}
        className="mb-6 max-w-full aspect-square object-contain"
      />

      <div className="flex flex-col gap-y-4">
        <Link
          to={`/products/${product?.id}`}
          className="hover:underline hover:text-third"
        >
          <h2 className="font-medium line-clamp-2" title={product?.title}>
            {product?.title}
          </h2>
        </Link>

        <div>
          <div className="flex items-center gap-x-1.5">
            <Stars rate={product?.rating?.rate} />
            <p className="text-sm text-third">({product?.rating?.count})</p>
          </div>
          <p className="text-sm text-[#717171]">1k+ bought in past month</p>
        </div>

        <div>
          <p className="text-2xl font-normal">
            ₹{product.price}{" "}
            <span className="text-sm text-[#7F7F7F]">
              ({product?.discount}% off)
            </span>
          </p>
          <p className="text-xs text-[#7F7F7F]">Save extra with No Cost EMI</p>
        </div>

        <p className="font-light text-sm">
          FREE delivery by{" "}
          <span className="font-semibold">Sat, 14 Sept, 7:00 am - 9:00 pm</span>
        </p>

        {isInCart ? (
          <ItemQtyCounter
            id={product?.id}
            quantity={quantity}
            handleChangeQty={handleChangeQty}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ) : (
          <Button
            size="sm"
            className="w-fit py-1.5"
            onClick={() => handleAddToCart(product?.id)}
          >
            Add to cart
          </Button>
        )}
      </div>
    </>
  );
});

export default ProductItem;
