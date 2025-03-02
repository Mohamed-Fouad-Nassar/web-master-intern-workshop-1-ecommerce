import { Ref } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import useHorizontalScroll from "../hooks/useHorizontalScroll";

const categories = [
  { path: "#", title: "Amazon mini TV" },
  { path: "#", title: "Sell" },
  { path: "#", title: "Best Sellers" },
  { path: "#", title: "Today’s Deals" },
  { path: "#", title: "Mobiles" },
  { path: "#", title: "Customer Service" },
  { path: "#", title: "Prime" },
  { path: "#", title: "Electronics" },
  { path: "#", title: "Fashion" },
  { path: "#", title: "New Releases" },
  { path: "#", title: "Home & Kitchen" },
  { path: "#", title: "Amazon Pay" },
];

export default function CategoriesNav() {
  const { scrollRef, showLeft, showRight, scroll } = useHorizontalScroll();

  return (
    <div className="relative bg-header-secondary px-6 py-4">
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 z-10 h-full bg-gradient-to-r from-header-primary px-2 flex items-center cursor-pointer"
        >
          <ChevronLeft className="size-6 text-white" />
        </button>
      )}

      <ul
        ref={scrollRef as Ref<HTMLUListElement>}
        className="flex items-center gap-4 overflow-x-auto text-sm nav-mob-flow scroll-smooth nav-mob-flow"
      >
        {categories.map(({ title, path }) => (
          <li key={title}>
            <a
              className="inline-block w-fit px-1 whitespace-nowrap text-center select-none"
              href={path}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>

      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 z-10 h-full bg-gradient-to-l from-header-primary px-2 flex items-center cursor-pointer"
        >
          <ChevronRight className="size-6 text-white" />
        </button>
      )}
    </div>
  );
}
