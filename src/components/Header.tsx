/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu } from "lucide-react";
import logo from "../data/Amazonwhite.png";
import { CircleUserRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { X } from "lucide-react";
import { House } from "lucide-react";
import { MapPin } from "lucide-react";
import { useState } from "react";
import SearchbarH from "./SearchbarH";
import flag from "../data/India.png";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className=" text-white">
      <div className="flex justify-between px-2 bg-[#131921] py-2.5 lg:justify-normal md:gap-4 md:px-4 lg:gap-8 items-center">
        <div className="flex items-center gap-2 md:w-fit">
          <button
            className="cursor-pointer sm:hidden"
            onClick={() => setNavOpen(true)}
          >
            <Menu color="#ffffff" />
          </button>
          <img className="w-20 md:w-28" src={logo} alt="logo" />
        </div>

        <div className="hidden sm:flex  lg:justify-items-normal sm:gap-4    xl:gap-8 sm:items-center  sm:w-[60%] md:w-full md:justify-between">
          <div className="flex gap-0.5">
            <MapPin size={18} className="self-end" />
            <p className="text-sm">
              Deliver to <br /> <span className="font-semibold">Egypt</span>
            </p>
          </div>

          <div className="xl:w-[600px] hidden lg:block">
            <SearchbarH />
          </div>

          <div className="flex items-center  gap-1.5 cursor-pointer">
            <img src={flag} alt="flag" className="w-6" />
            <p>EN</p>
          </div>

          <div>
            <p className="text-sm">Hello,sign in</p>
            <p>Accounts &amp; Lists</p>
          </div>

          <p>
            Returns <br /> &amp; Orders{" "}
          </p>
        </div>

        <div className="flex items-center gap-2 place-content-end md:w-fit">
          <button className="flex items-center gap-1.5 cursor-pointer md:hidden">
            Sign in
            <CircleUserRound />
          </button>
          <button className="cursor-pointer flex gap-1">
            <ShoppingCart size={28} />
            <p className="font-semibold text-sm self-end">Cart</p>
          </button>
        </div>
      </div>

      <div className="lg:hidden bg-[#131921]">
        <SearchbarH />
      </div>

      <div className="md:bg-[#232F3E] bg-[#131921] p-2">
        <ul className="flex items-center   gap-4   overflow-x-auto text-[13px] nav-mob-flow">
          <li>
            <a className="w-[100px] text-center inline-block" href="#">
              Amazon mini TV
            </a>
          </li>
          <li>
            <a className="w-[30px] text-center inline-block" href="#">
              Sell
            </a>
          </li>
          <li>
            <a className="w-[70px] text-center inline-block" href="#">
              Best Sellers
            </a>
          </li>
          <li>
            <a className="w-[90px] text-center inline-block" href="#">
              Today’s Deals
            </a>
          </li>
          <li>
            <a className="w-[70px] text-center inline-block" href="#">
              Mobiles
            </a>
          </li>
          <li>
            <a className="w-[100px] text-center inline-block" href="#">
              Customer Service
            </a>
          </li>
          <li>
            <a className="w-[30px] text-center inline-block" href="#">
              Prime
            </a>
          </li>
          <li>
            <a className="w-[70px] text-center inline-block" href="#">
              Electronics
            </a>
          </li>
          <li>
            <a className="w-[50px] text-center inline-block" href="#">
              Fashion
            </a>
          </li>
          <li>
            <a className="w-[80px] text-center inline-block" href="#">
              New Releases
            </a>
          </li>
          <li>
            <a className="w-[100px] text-center inline-block" href="#">
              Home & Kitchen
            </a>
          </li>
          <li>
            <a className="w-[100px] text-center inline-block" href="#">
              Amazon Pay
            </a>
          </li>
        </ul>
      </div>

      {/* hamburger Menu */}
      {navOpen && (
        <div className="flex  absolute right-0 left-0 top-0  ">
          <div className="w-[80%]">
            <div className="bg-[#232F3E] py-4 px-3">
              <button className="flex justify-end w-full  gap-1.5 cursor-pointer mb-3">
                Sign in
                <CircleUserRound />
              </button>
              <span className="font-semibold text-lg">Browse</span>
              <h2 className="text-2xl font-bold">Amazon</h2>
            </div>
            <div className="bg-white text-black py-4">
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

          <div className="w-[20%]  bg-black/90 text-center">
            <button
              className="cursor-pointer mt-4"
              onClick={() => setNavOpen(false)}
            >
              <X size={34} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
