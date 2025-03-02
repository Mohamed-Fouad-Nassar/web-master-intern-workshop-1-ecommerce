import { ChevronsUpDown, Globe } from "lucide-react";

import FooterLinksList from "./FooterLinksList";

import flag from "../data/India.png";
import logo from "../data/Amazonwhite.png";

const linksOne = [
  {
    title: "About Us",
    path: "#",
  },
  {
    title: "Careers",
    path: "#",
  },
  {
    title: "Press Releases",
    path: "#",
  },
  {
    title: "Amazon Science",
    path: "#",
  },
];
const linksTwo = [
  {
    title: "Facebook",
    path: "#",
  },
  {
    title: "Twitter",
    path: "#",
  },
  {
    title: "Instagram",
    path: "#",
  },
];
const linksThree = [
  {
    title: "Sell on Amazon",
    path: "#",
  },
  {
    title: "Sell under Amazon Accelerator",
    path: "#",
  },
  {
    title: "Amazon Global Selling",
    path: "#",
  },
  {
    title: "Become an Affiliate",
    path: "#",
  },
  {
    title: "Fulfilment by Amazon",
    path: "#",
  },
  {
    title: "Advertise Your Products",
    path: "#",
  },
  {
    title: "Amazon Pay on Merchants",
    path: "#",
  },
];
const linksFour = [
  {
    title: "Your Account",
    path: "#",
  },
  {
    title: "Returns Center",
    path: "#",
  },
  {
    title: "Recalls and Products Safety Alerts",
    path: "#",
  },
  {
    title: "100% Purchase Protection",
    path: "#",
  },
  {
    title: "Amazon App Download",
    path: "#",
  },
  {
    title: "Help",
    path: "#",
  },
];

export default function FooterTopSec() {
  return (
    <>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="bg-[#37475A] w-full py-4 cursor-pointer"
      >
        Back to Top
      </button>
      <div className="bg-[#232F3E] py-10 ">
        <div className="container mx-auto px-4 grid grid-cols-[repeat(auto-fit,minmax(210px,auto))] gap-x-3 md:gap-x-2 gap-y-6 text-center md:text-left mb-12">
          <FooterLinksList title="Get to know Us" links={linksOne} />
          <FooterLinksList title="Connect with Us" links={linksTwo} />
          <FooterLinksList title="Make Money with Us" links={linksThree} />
          <FooterLinksList title="Let Us Help You" links={linksFour} />
        </div>

        <div className="border-t-1 border-gray-500 pt-6">
          <div className="md:px-24 flex flex-col sm:flex-row items-center justify-center gap-4">
            <img src={logo} alt="logo" />

            <div className="flex gap-4">
              <div className="flex items-center gap-2 cursor-pointer border-1 border-gray-300 px-3 py-2">
                <Globe className="size-5" />
                <p>English</p>
                <ChevronsUpDown className="size-4" />
              </div>

              <div className="flex items-center gap-2 cursor-pointer border-1 border-gray-300 px-3 py-2">
                <img src={flag} alt="flag" />
                <p>India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
