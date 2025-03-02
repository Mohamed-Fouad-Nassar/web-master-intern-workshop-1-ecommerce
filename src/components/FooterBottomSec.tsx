export default function FooterBottomSec() {
  return (
    <div className="bg-[#131A22] py-6">
      <div className="container mx-auto mb-8 px-4 grid grid-cols-[repeat(auto-fit,minmax(210px,auto))] gap-x-8 md:gap-x-2 gap-y-8 text-center lg:text-left">
        <ul>
          <li>AbeBooks</li>
          <li className="mb-3 text-gray-400 lg:max-w-[77%]">
            <a href="#">Books, art & collectibles</a>
          </li>
          <li>Shop bop</li>
          <li className="lg:max-w-[55%]">
            <a className="text-gray-400" href="#">
              Designer Fashion Brands
            </a>
          </li>
        </ul>

        <ul>
          <li>Amazon web Services</li>
          <li className="mb-3 text-gray-400 lg:max-w-[70%]">
            <a href="#">Scalable Cloud Computing Services</a>
          </li>
          <li>Amazon Business</li>
          <li className="lg:max-w-[50%]">
            <a className="text-gray-400" href="#">
              Everything For Your Business
            </a>
          </li>
        </ul>

        <ul>
          <li>Audible</li>
          <li className="mb-3 text-gray-400 lg:max-w-[48%]">
            <a href="#">Download Audio Books</a>
          </li>
          <li>Prime Now</li>
          <li className="lg:max-w-[54%]">
            <a className="text-gray-400" href="#">
              2-Hour Delivery on Everyday Items
            </a>
          </li>
        </ul>

        <ul>
          <li>IMDb</li>
          <li className="mb-3 text-gray-400 lg:max-w-[45%]">
            <a href="#">Movies, TV & Celebrities</a>
          </li>
          <li>Amazon Prime Music</li>
          <li className="lg:max-w-[85%]">
            <a className="text-gray-400" href="#">
              100 million sings, ad-free Over 15 million podcast episodes
            </a>
          </li>
        </ul>
      </div>

      <div className="pt-2 flex flex-col items-center text-sm">
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
  );
}
