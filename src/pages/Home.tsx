import HeroSecSlider from "../features/home/HeroSecSlider";
import HomeCategoryCard from "../features/home/HomeCategoryCard";
import HomeProductsSlider from "../features/home/HomeProductsSlider";

import img1 from "../data/images/cat-image-1.png";
import img2 from "../data/images/cat-image-2.png";
import img3 from "../data/images/cat-image-3.png";
import img4 from "../data/images/cat-image-4.png";

import imgSlide1 from "../data/images/slider-img-1.png";
import imgSlide2 from "../data/images/slider-img-2.png";
import imgSlide3 from "../data/images/slider-img-3.png";
import imgSlide4 from "../data/images/slider-img-4.png";
import imgSlide5 from "../data/images/slider-img-5.png";
import imgSlide6 from "../data/images/slider-img-6.png";
import imgSlide7 from "../data/images/slider-img-7.png";

import landingImg1 from "../data/images/landing-slider-img-1.png";
import landingImg2 from "../data/images/landing-slider-img-2.jpg";
import landingImg3 from "../data/images/landing-slider-img-3.jpg";
import landingImg4 from "../data/images/landing-slider-img-4.jpg";

const categories = [
  {
    path: "/products",
    img: img1,
    title: "Cushion covers, bedsheets & more",
  },
  {
    path: "/products",
    img: img2,
    title: "Figurines, vases & more",
  },
  { path: "/products", img: img3, title: "Home storage" },
  {
    path: "/products",
    img: img4,
    title: "Lighting solutions",
  },
];
const cards = [
  {
    title: "Revamp your home in style",
    path: "/products",
  },
  {
    title: "Appliances for your home | Up to 55% off",
    path: "/products",
  },
  {
    title: "Starting $149 | Headphones",
    path: "/products",
  },
  {
    title: "Starting $99| Amazon Brands & more",
    path: "/products",
  },
  {
    title: "Automotive essentials| Up to 60% off",
    path: "/products",
  },
  {
    title: "Up to 60% off | Styles for women",
    path: "/products",
  },
  {
    title: "Starting ₹199 | Amazon Brands & more",
    path: "/products",
  },
  {
    title: "Starting ₹99 | Home improvement essentials",
    path: "/products",
  },
];
const bestSeller = [
  {
    path: "/products",
    img: img1,
  },
  {
    path: "/products",
    img: img2,
  },
  {
    path: "/products",
    img: img3,
  },
  {
    path: "/products",
    img: img4,
  },
];
const slides = [
  { path: "/products", img: imgSlide1 },
  { path: "/products", img: imgSlide2 },
  { path: "/products", img: imgSlide3 },
  { path: "/products", img: imgSlide4 },
  { path: "/products", img: imgSlide5 },
  { path: "/products", img: imgSlide6 },
  { path: "/products", img: imgSlide7 },
];

const landingSlides = [landingImg2, landingImg1, landingImg3, landingImg4];
const options = { loop: true };

export default function Home() {
  return (
    <>
      <HeroSecSlider slides={landingSlides} options={options} />
      <div className="bg-neutral-700/80 p-4">
        <div className="relative z-20 -mt-[20%] lg:-mt-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map(({ title, path }) => (
            <HomeCategoryCard
              key={title}
              path={path}
              title={title}
              categories={categories}
            />
          ))}
        </div>

        <HomeProductsSlider
          slides={slides}
          title="Best Sellers in Clothing & Accessories"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <HomeCategoryCard
            path="/products"
            title="Best Sellers in Toys & Games"
            categories={bestSeller}
          />
          <HomeCategoryCard
            path="/products"
            title="Customers’ Most-Loved Products"
            categories={categories}
          />
          <HomeCategoryCard
            path="/products"
            title="Best Sellers in Beauty"
            categories={bestSeller}
          />
          <HomeCategoryCard
            path="/products"
            title="Latest styles | Dresses, kurta & more | 50% -..."
            categories={categories}
          />
        </div>

        <HomeProductsSlider
          path="/products"
          slides={slides}
          title="Min. 50% off | Unique kitchen finds | Amazon Brands & more"
        />
      </div>
    </>
  );
}
