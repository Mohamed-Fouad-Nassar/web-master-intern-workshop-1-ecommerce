import { Ref } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import useHorizontalScroll from "../hooks/useHorizontalScroll";
import { Link } from "react-router";

const categories = [
  { path: "/products", title: "All" },
  { path: "/products", title: "Amazon mini TV" },
  { path: "/products", title: "Sell" },
  { path: "/products", title: "Best Sellers" },
  { path: "/products", title: "Today’s Deals" },
  { path: "/products", title: "Mobiles" },
  { path: "/products", title: "Customer Service" },
  { path: "/products", title: "Prime" },
  { path: "/products", title: "Electronics" },
  { path: "/products", title: "Fashion" },
  { path: "/products", title: "New Releases" },
  { path: "/products", title: "Home & Kitchen" },
  { path: "/products", title: "Amazon Pay" },
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
            <Link
              to={path}
              className="inline-block w-fit px-1 whitespace-nowrap text-center select-none"
            >
              {title}
            </Link>
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
