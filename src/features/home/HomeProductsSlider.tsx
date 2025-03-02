import { Ref } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

import useHorizontalScroll from "../../hooks/useHorizontalScroll";

type THomeProductsSliderProps = {
  path?: string;
  title: string;
  slides: { path: string; img: string }[];
};

export default function HomeProductsSlider({
  path,
  title,
  slides,
}: THomeProductsSliderProps) {
  const { scrollRef, showLeft, showRight, scroll } = useHorizontalScroll();

  return (
    <div className="bg-white my-6 font-noto relative">
      <div className="px-4 py-2 mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        {path && (
          <Link to={path} className="px-4 py-2 text-third hover:underline">
            See all
          </Link>
        )}
      </div>

      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 backdrop-blur-xs px-2 py-10 shadow-md rounded-e-lg"
        >
          <ChevronLeft className="size-6 text-gray-700" />
        </button>
      )}

      <div className="relative overflow-hidden">
        <div
          ref={scrollRef as Ref<HTMLDivElement>}
          className="slider-container flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 pb-4 px-4 scrollbar-hide"
        >
          {slides.map(({ path, img }) => (
            <div
              key={img}
              className="cursor-pointer min-w-[250px] bg-white snap-start"
            >
              <div className="relative">
                <Link to={path} className="block w-fit mx-auto">
                  <img
                    src={img}
                    alt="Product-slide-image"
                    className="max-w-full object-contain"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 backdrop-blur-xs px-2 py-10 shadow-md rounded-s-lg"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      )}
    </div>
  );
}
