import Breadcrumb from "../components/Breadcrumb";
import ProductSlider from "../features/product/ProductSlider";
import ProductDetails from "../features/product/ProductDetails";
import ProductActions from "../features/product/ProductActions";
import ProductRatings from "../features/product/ProductRatings";
import ProductComments from "../features/product/ProductComments";

import {
  TProduct,
  TProductSeller,
  TProductComment,
} from "../types/product.types";

const comments: TProductComment[] = [
  {
    user: {
      name: "John Doe",
      avatar: "/src/data/images/user-avatar-1.png",
    },
    rating: 5,
    title: "Favorite dress",
    date: "6 August 2024",
    content:
      "I initially purchased this dress on sale. It turned out to be my favorite dress of this summer. It is extremely versatile and unexpectedly flattering. When I accidentally tore it, I was really upset. My husband told me to buy it again, which I typically wouldn't do. It wasn't on sale and I am so frugal. The dress washes very well and I always get compliments when I wear it.",
    location: "United States",
    details: {
      size: 10,
      color: "Black",
    },
  },
  {
    user: {
      name: "Ana Patricia Rodriguez",
      avatar: "/src/data/images/user-avatar-2.png",
    },
    rating: 5,
    title: "COMODIDAD",
    date: "29 June 2023",
    content: "ES LINDO COMODO Y LIGERO PARA CLIMA CALIDO, ES LA TELA ADECUADA",
    location: "United States",
  },
  {
    user: {
      name: "Ivelisse Silva",
      avatar: "/src/data/images/user-avatar-2.png",
    },
    rating: 4,
    title: "Excellent dress",
    date: "3 April 2019",
    content:
      "Lovely dress... I'm 5'1 with pear form body (149 pounds mostly in hips and booty) and it fits perfect.",
    location: "United States",
  },
];
const product: TProduct = {
  id: 1,
  title:
    "LG 7 Kg, 5 Star, Direct Drive Technology, Steam Wash, 6 Motion DD, Smart Diagnosis, Fully-Automatic Front Load",
  brand: "WDIRARA",
  description:
    "Feature: square neck, cutout, puff sleeve, ruffle hem, tie back aline dress \n Fabric has some stretch,and it's soft and comfortable \n Suitable for daily wear, holidays, dating, vacation, weekend casual \n Care Instructions: Machine wash or professional dry clean",
  price: 203.14,
  rating: {
    rate: 4.3,
    count: 107,
    stars: { 5: 60, 4: 30, 3: 10, 2: 5, 1: 2 },
  },
  images: [],
};
const seller: TProductSeller = {
  name: "Monatik LLC",
  shipping: {
    min: 3,
    max: 5,
  },
};

export default function Product() {
  return (
    <div className="p-4">
      <Breadcrumb
        links={[
          { title: "Electronics", path: "/" },
          { title: "Washers", path: "/products" },
        ]}
      />

      <div className="flex gap-4 flex-col lg:flex-row items-start">
        <ProductSlider
          title={product.title}
          brand={product.brand}
          images={product.images}
          rating={product.rating}
        />
        <ProductActions price={product.price} seller={seller} />
        <ProductDetails product={product} />
      </div>

      <hr className="my-4 border-gray-300" />
      <div className="flex gap-4 flex-col md:flex-row">
        <ProductRatings rating={product.rating} />
        <ProductComments comments={comments} />
      </div>
    </div>
  );
}
