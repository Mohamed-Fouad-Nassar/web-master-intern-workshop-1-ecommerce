import { useParams } from "react-router";

import NotFound from "./NotFound";
import Breadcrumb from "../components/Breadcrumb";
import ProductSlider from "../features/product/ProductSlider";
import SpinnerFullScreen from "../components/SpinnerFullScreen";
import ProductDetails from "../features/product/ProductDetails";
import ProductActions from "../features/product/ProductActions";
import ProductRatings from "../features/product/ProductRatings";
import ProductComments from "../features/product/ProductComments";

import useProduct from "../features/product/useProduct";

export default function Product() {
  const { id } = useParams();
  const { isLoading, product, error } = useProduct(id as string);

  if (isLoading) return <SpinnerFullScreen />;
  if (error || !product) return <NotFound />;

  return (
    <main className="p-4">
      <Breadcrumb
        links={[
          { title: "Electronics", path: "/" },
          { title: "Washers", path: "/products" },
        ]}
      />

      <div className="flex gap-4 flex-col lg:flex-row items-start">
        <ProductSlider
          img={product.img}
          title={product.title}
          brand={product.brand}
          images={product.images}
          rating={product.rating}
        />
        <ProductActions
          id={product.id}
          price={product.price}
          seller={product?.seller}
        />
        <ProductDetails product={product} />
      </div>

      <hr className="my-4 border-gray-300" />
      <div className="flex gap-4 flex-col md:flex-row">
        <ProductRatings rating={product.rating} />
        <ProductComments comments={product?.comments} />
      </div>
    </main>
  );
}
