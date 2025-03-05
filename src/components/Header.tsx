import { useState } from "react";
import { Link } from "react-router";
import { X, Menu, House, MapPin, ShoppingCart } from "lucide-react";

import UserNav from "./UserNav";
import SearchbarH from "./SearchbarH";
import CategoriesNav from "./CategoriesNav";

import { useAppSelector } from "../store/hooks";
import { getTotalCartItemsCount } from "../store/cart/cartSlice";

import flag from "../data/India.png";
import logo from "../data/Amazonwhite.png";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const totalCartItemsCount = useAppSelector(getTotalCartItemsCount);

  console.log("cart count: ", totalCartItemsCount);

  return (
    <header className=" text-white">
      <div className="flex justify-between px-2 bg-header-primary py-3.5 lg:justify-normal md:gap-4 md:px-4 lg:gap-8 items-center">
        <div className="flex items-center gap-2 md:w-fit">
          <button
            className="cursor-pointer sm:hidden"
            onClick={() => setNavOpen(true)}
          >
            <Menu color="white" />
          </button>
          <Link to="/">
            <img className="w-20 md:w-28" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="hidden sm:flex sm:px-4 sm:gap-4 xl:gap-8 sm:items-center sm:justify-between sm:w-[60%] md:w-full md:justify-evenly">
          <div className="flex items-center gap-1.5">
            <MapPin size={20} />
            <p className="text-sm">
              Deliver to <span className="font-semibold">Egypt</span>
            </p>
          </div>

          <div className="flex-1 w-full hidden lg:block">
            <SearchbarH />
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer">
            <img src={flag} alt="flag" className="max-w-full" />
            <p>EN</p>
          </div>
        </div>

        <div className="min-w-fit flex items-center gap-4">
          <UserNav />
          <Link to="/cart" className="relative cursor-pointer flex gap-1">
            <ShoppingCart size={28} />
            <p className="font-semibold text-sm self-end">Cart</p>
            {totalCartItemsCount !== 0 ? (
              <span className="absolute -top-2.5 left-2 text-xs bg-third w-4 h-4 rounded-full flex justify-center items-center">
                {totalCartItemsCount}
              </span>
            ) : null}
          </Link>
        </div>
      </div>

      <div className="lg:hidden bg-header-primary pb-2.5">
        <SearchbarH />
      </div>

      <CategoriesNav />

      {navOpen && (
        <div className="flex fixed right-0 left-0 top-0 bottom-0 z-20">
          <div className="w-[80%] h-full">
            <div className="bg-header-secondary py-4 px-3">
              <span className="font-semibold text-lg">Browse</span>
              <h2 className="text-2xl font-bold">Amazon</h2>
            </div>
            <div className="bg-white text-black py-4 h-full">
              <div className="flex items-center justify-between mb-3  px-3">
                <h3 className="font-bold text-lg">Amazon Home</h3>
                <House size={20} />
              </div>
              <ul className="border-t-4 border-gray-400  px-3 py-3 flex flex-col gap-4">
                <li className="font-semibold">Trending</li>
                <li>
                  <a href="#">Best Sellers</a>
                </li>
                <li>
                  <a href="#">New Releases</a>
                </li>
                <li>
                  <a href="#">Movers &amp; Shakers</a>
                </li>
              </ul>

              <ul className="border-t-4 border-gray-400  px-3 py-3 flex flex-col gap-4">
                <li className="font-semibold">Top Categories</li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Computers</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
              </ul>

              <ul className="border-t-4 border-gray-400  px-3 py-3 flex flex-col gap-4">
                <li className="font-semibold">Programs &amp; Features</li>
                <li>
                  <a href="#">Today's Deals</a>
                </li>
                <li>
                  <a href="#">Amazon Outlet</a>
                </li>
                <li>
                  <a href="#">Try Prime</a>
                </li>
                <li>
                  <a href="#">Subscribe &amp; Save </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() => setNavOpen(false)}
            className="w-[20%] bg-black/90 text-center"
          >
            <button className="cursor-pointer mt-4">
              <X size={34} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
