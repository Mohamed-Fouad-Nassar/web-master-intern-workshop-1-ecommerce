import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";

type TThumbProps = {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
};
function Thumb({ onClick, selected, children }: TThumbProps) {
  return (
    <button
      className={`w-16 h-16 rounded-lg overflow-hidden border transition-all flex justify-center items-center ${
        selected ? "border-third" : "border-gray-300"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

type TEmblaCarouselProps = {
  slides: string[];
  options?: EmblaOptionsType;
};
function EmblaCarousel({ slides, options }: TEmblaCarouselProps) {
  const [axis, setAxis] = useState<"x" | "y">("x");

  useEffect(() => {
    const updateAxis = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setAxis(isMobile ? "x" : "y");
    };
    updateAxis();
    window.addEventListener("resize", updateAxis);
    return () => window.removeEventListener("resize", updateAxis);
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    axis,
  });

  const handleThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );
  const handleSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    handleSelect();
    emblaMainApi.on("select", handleSelect).on("reInit", handleSelect);
  }, [emblaMainApi, handleSelect]);

  return (
    <div className="max-w-2xl mx-auto flex flex-col md:flex-row-reverse">
      {/* Main Carousel */}
      <div className="overflow-hidden flex-1" ref={emblaMainRef}>
        <div className="flex">
          {slides.map((img, i) => (
            <div key={i} className="flex-none w-full px-2">
              <div className="flex items-center justify-center aspect-video lg:aspect-square rounded">
                <img src={img} alt={`product-slide-${i}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-6 md:mt-0 md:mr-2">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex gap-2 justify-center md:flex-col flex-row">
            {slides.map((img, i) => (
              <Thumb
                key={i}
                onClick={() => handleThumbClick(i)}
                selected={i === selectedIndex}
              >
                <img
                  className="max-w-[90%]"
                  src={img}
                  alt={`product-thumb-${i}`}
                />
              </Thumb>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ImagesSlider({
  img,
  images,
}: {
  img: string;
  images: string[];
}) {
  // if no images, show the main image only
  if (!images?.length)
    return (
      <div className="flex items-center justify-center aspect-video lg:aspect-square">
        <img src={img} alt="product-image" />
      </div>
    );

  return <EmblaCarousel slides={images} />;
}
