import logo from "../data/Amazonwhite.png";
import { Globe } from "lucide-react";
import arrows from "../data/arrows.png";
import flag from "../data/India.png";

export default function Footer() {
  return (
    <footer className="text-white">
      <button className="bg-[#37475A] w-full py-4 cursor-pointer">
        Back to Top
      </button>
      <div className="bg-[#232F3E] py-10 ">
        <div className="container mx-auto px-4 grid grid-cols-[repeat(auto-fit,minmax(210px,auto))] gap-x-3 md:gap-x-2 gap-y-6 text-center md:text-left md:px-24 mb-12">
          <ul className="flex flex-col gap-0.5">
            <li className="font-medium">Get to know Us</li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press Releases</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-1">
            <li className="font-medium">Connect with Us</li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-1">
            <li className="font-medium">Make Money with Us</li>
            <li>
              <a href="#">Sell on Amazon</a>
            </li>
            <li>
              <a href="#">Sell under Amazon Accelerator</a>
            </li>
            <li>
              <a href="#">Protect and Build Your Brand</a>
            </li>
            <li>
              <a href="#">Amazon Global Selling</a>
            </li>
            <li>
              <a href="#">Supply to Amazon</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Fulfilment by Amazon</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Amazon Pay on Merchants</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-1">
            <li className="font-medium">Let Us Help You</li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Returns Center</a>
            </li>
            <li>
              <a href="#">Recalls and Products Safety Alerts</a>
            </li>
            <li>
              <a href="#">100% Purchase Protection</a>
            </li>
            <li>
              <a href="#">Amazon App Download</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>

        <div className="border-t-1 border-[#4C4C4C] pt-6">
          <div className="md:px-24 flex flex-col sm:flex-row items-center justify-center gap-4">
            <img src={logo} alt="logo" />

            <div className="flex gap-4">
              <div className="flex items-center gap-2 cursor-pointer border-1 border-[#B4B4B4] px-3 py-2">
                <Globe />
                <p>English</p>
                <img src={arrows} alt="arrows" />
              </div>

              <div className="flex items-center gap-2 cursor-pointer border-1 border-[#B4B4B4] px-3 py-2">
                <img src={flag} alt="flag" />
                <p>India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#131A22] py-6 ">
        <div className="container md:pl-24 xl:pr-72 mx-auto mb-8 px-4 grid grid-cols-[repeat(auto-fit,minmax(210px,auto))] gap-x-8 md:gap-x-2 gap-y-8 text-center lg:text-left">
          <ul>
            <li>AbeBooks</li>
            <li className="mb-3 text-[#999999] lg:max-w-[77%]">
              <a href="#">Books, art & collectibles</a>
            </li>
            <li>Shop bop</li>
            <li className="lg:max-w-[55%]">
              <a className="text-[#999999]" href="#">
                Designer Fashion Brands
              </a>
            </li>
          </ul>

          <ul>
            <li>Amazon web Services</li>
            <li className="mb-3 text-[#999999] lg:max-w-[70%]">
              <a href="#">Scalable Cloud Computing Services</a>
            </li>
            <li>Amazon Business</li>
            <li className="lg:max-w-[50%]">
              <a className="text-[#999999]" href="#">
                Everything For Your Business
              </a>
            </li>
          </ul>

          <ul>
            <li>Audible</li>
            <li className="mb-3 text-[#999999] lg:max-w-[48%]">
              <a href="#">Download Audio Books</a>
            </li>
            <li>Prime Now</li>
            <li className="lg:max-w-[54%]">
              <a className="text-[#999999]" href="#">
                2-Hour Delivery on Everyday Items
              </a>
            </li>
          </ul>

          <ul>
            <li>IMDb</li>
            <li className="mb-3 text-[#999999] lg:max-w-[45%]">
              <a href="#">Movies, TV & Celebrities</a>
            </li>
            <li>Amazon Prime Music</li>
            <li className="lg:max-w-[85%]">
              <a className="text-[#999999]" href="#">
                100 million sings, ad-free Over 15 million podcast episodes
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <ul className="flex flex-col gap-1 mb-2 items-center md:mb-0 md:flex-row  md:gap-10">
            <li>
              <a href="#">Conditons of Use & Sale</a>
            </li>
            <li>
              <a href="#">Privacy Notice</a>
            </li>
            <li>
              <a href="#">Interset-Based Ads</a>
            </li>
          </ul>
          <p>1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
}
