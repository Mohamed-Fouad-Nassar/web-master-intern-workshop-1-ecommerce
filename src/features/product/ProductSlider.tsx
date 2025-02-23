import Stars from "../../components/Stars";
import ImagesSlider from "../../components/ImagesSlider";

type TProductSliderProps = {
  img: string;
  title: string;
  brand: string;
  images: string[];
  rating: { rate: number; count: number };
};

export default function ProductSlider({
  img,
  title,
  brand,
  rating,
  images,
}: TProductSliderProps) {
  return (
    <section className="flex-1">
      <div className="lg:hidden">
        <div className="flex gap-4 items-start justify-between mb-1.5">
          <span className="text-third font-inika uppercase">
            brand: {brand}
          </span>
          <span className="flex gap-1 items-center">
            {rating?.rate} <Stars rate={rating.rate} />
          </span>
        </div>
        <h2 className="text-xl font-medium text-gray-700">{title}</h2>
      </div>

      <div className="mt-4 lg:mt-0 rounded text-center">
        <ImagesSlider img={img} images={images} />
      </div>
    </section>
  );
}
