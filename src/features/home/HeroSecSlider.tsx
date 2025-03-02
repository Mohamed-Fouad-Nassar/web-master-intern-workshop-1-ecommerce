import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TEmblaCarouselProps = {
  slides: string[];
  options?: EmblaOptionsType;
};

export default function EmblaCarousel({
  slides,
  options,
}: TEmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateNavButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateNavButtons();
    emblaApi.on("select", updateNavButtons).on("reInit", updateNavButtons);
  }, [emblaApi, updateNavButtons]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative w-full max-h-[calc(100dvh-200px)] aspect-video">
      {canScrollPrev && (
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-gray-300 p-2 cursor-pointer"
          onClick={scrollPrev}
        >
          <ChevronLeft className="size-14 md:size-26" strokeWidth={1.3} />
        </button>
      )}
      {canScrollNext && (
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-gray-300 p-2 cursor-pointer"
          onClick={scrollNext}
        >
          <ChevronRight className="size-14 md:size-26" strokeWidth={1.3} />
        </button>
      )}

      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {slides.map((img, i) => (
            <div key={i} className="flex-none w-full">
              <img
                src={img}
                alt={`slide-${i}`}
                className="w-full max-h-[calc(100dvh-125px)] object-cover aspect-video"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
