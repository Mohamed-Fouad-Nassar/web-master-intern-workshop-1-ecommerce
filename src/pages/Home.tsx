// import { Link } from "react-router";

// export default function Home() {
//   return (
//     <>
//       <h1 className="text-3xl font-bold underline text-center mt-80">
//         Welcome to Web Master Workshop E-Commerce React App
//       </h1>

//       <div className="mt-20 flex justify-center items-center gap-4">
//         <Link className="px-5 py-1.5 bg-amber-100 rounded" to="/signin">
//           Sign In
//         </Link>
//         <Link className="px-5 py-1.5 bg-amber-100 rounded" to="/register">
//           Register
//         </Link>
//       </div>
//     </>
//   );
// }

export default function Home() {
  return (
    <>
      <div className="bg-neutral-700/80 p-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* <!-- First Box --> */}
          <div className="bg-white p-4 shadow  ">
            <h2 className="font-noto text-2xl font-bold mb-2">
              Revamp your home in style
            </h2>

            <div className="grid grid-cols-2">
              <div className="h-50 cursor-pointer">
                <a href="#">
                  <img
                    src="../data/images/image 7.jpg"
                    alt="Product image"
                    className="w-35 h-30 object-start gap-x-8"
                  />
                </a>
                <p className="font-noto text-[15px] pt-2">
                  Cushion covers, bedsheets & more
                </p>
              </div>

              <div className="h-50 cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 8.jpg"
                    alt="Product image"
                    className="w-35 h-30 object-start gap-x-8"
                  />
                </a>
                <p className="font-noto text-[15px] pt-2">
                  Figurines, vases & more
                </p>
              </div>

              <div className="h-40 cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 9.jpg"
                    alt="Product image"
                    className="w-35 h-30 object-start "
                  />
                </a>
                <p className="font-noto text-[15px] pt-2"> Home storage</p>
              </div>
              <div className="h-40 cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image.jpg"
                    alt="Product image"
                    className="w-35 h-30 object-start "
                  />
                </a>
                <p className="font-noto text-[15px] pt-2">Lighting solutions</p>
              </div>
            </div>

            <button className="font-noto cursor-pointer mt-9  text-[#1F8394]   ">
              Explore all
            </button>
          </div>

          {/* <!--second Box --> */}
          <div className="bg-white p-4 shadow">
            <h2 className="font-noto text-2xl font-bold mb-2">
              Appliances for your home | Up to 55% off
            </h2>
            <div className="grid grid-cols-2">
              <div className="h-50 cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 10.jpg"
                    alt="Product image"
                    className="w-35 h-30 object-start "
                  />
                </a>
                <p className="font-noto text-[15px] pt-2 pb-7">
                  {" "}
                  Air Conditioners{" "}
                </p>
              </div>

              <div className="h-50 cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 11.jpg"
                    alt="Product image"
                    className="w-35 h-30 object-start "
                  />
                </a>
                <p className="font-noto text-[15px] pt-2">Refrigerators</p>
              </div>

              <div className="h-40 cursor-pointer">
                <img
                  src="../data/images/image 12.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">Microwabes</p>
              </div>
              <div className="h-40 cursor-pointer">
                <img
                  src="../data/images/image 13.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2 ">Washing machines</p>
              </div>
            </div>
            <button className="font-noto cursor-pointer mt-4  text-[#1F8394]  py-4 rounded">
              See more
            </button>
          </div>

          {/* <!--watches box --> */}
          <div className="bg-white p-4 shadow">
            <h2 className="font-noto text-2xl font-bold mb-2">
              Starting $149 | Headphones{" "}
            </h2>
            <div className="grid grid-cols-2">
              <div className="h-50 cursor-pointer">
                <img
                  src="../data/images/image 14.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2 pb-7">
                  {" "}
                  Starting ₹249| boAt{" "}
                </p>
              </div>

              <div className="h-50 cursor-pointer">
                <img
                  src="../data/images/image 15.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">
                  {" "}
                  Starting ₹349| boult{" "}
                </p>
              </div>

              <div className="h-40 cursor-pointer">
                <img
                  src="../data/images/image 16.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2 ">
                  Starting ₹649| Noise{" "}
                </p>
              </div>
              <div className="h-40 cursor-pointer">
                <img
                  src="../data/images/image 17.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2 ">
                  Starting ₹149| Zebronics{" "}
                </p>
              </div>
            </div>
            <button className="font-noto cursor-pointer mt-4  text-[#1F8394]  py-4 rounded">
              See all offers
            </button>
          </div>

          {/* <!-- brands box -- */}
          <div className="bg-white p-4 shadow">
            <h2 className="font-noto text-2xl font-bold mb-2">
              Starting $99| Amazon Brands & more
            </h2>

            <div className="grid grid-cols-2">
              <div className="h-50 cursor-pointer">
                <img
                  src="../data/images/image 18.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2 pb-7">
                  {" "}
                  Staring ₹299|Home storage &...{" "}
                </p>
              </div>

              <div className="h-50 cursor-pointer">
                <img
                  src="../data/images/image 19.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">
                  {" "}
                  Up to 60% off |Storage &racks{" "}
                </p>
              </div>

              <div className="h-40 cursor-pointer">
                <img
                  src="../data/images/image 20.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">
                  {" "}
                  Staring ₹99|Toys & games{" "}
                </p>
              </div>
              <div className="h-40 cursor-pointer">
                <img
                  src="../data/images/image 21.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">
                  {" "}
                  Up to 60% off | Jackets,dresses &...{" "}
                </p>
              </div>
            </div>
            <button className="font-noto cursor-pointer mt-4  text-[#1F8394]  py-4 rounded">
              Shop now
            </button>
          </div>

          {/* <!--  Spring box --> */}
          <div className="bg-white p-4 shadow">
            <h2 className="font-noto text-2xl font-bold mb-2">
              Automotive essentials| Up to 60% off
            </h2>
            <div className="grid grid-cols-2">
              <div className="h-50 cursor-pointer">
                <img
                  src="../data/images/image 22.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />

                <p className="font-noto text-[15px] pt-2 pb-7">
                  {" "}
                  Cleaning accessories{" "}
                </p>
              </div>

              <div className="h-50 cursor-pointer">
                <img
                  src="../data/images/image 23.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">Tyre & rim care </p>
              </div>

              <div className="h-40 cursor-pointer">
                <img
                  src="../data/images/image 24.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">Helmets </p>
              </div>
              <div className="h-40 cursor-pointer">
                <img
                  src="../data/images/image 25.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">Vacuum cleaner </p>
              </div>
            </div>
            <button className="font-noto cursor-pointer mt-4  text-[#1F8394]  py-4 rounded">
              See more
            </button>
          </div>
          {/* <!-- cars box --> */}
          <div className="bg-white p-4 shadow">
            <h2 className="font-noto text-2xl font-bold mb-2">
              Up to 60% off | Styles for women
            </h2>
            <div className="grid grid-cols-2">
              <div className="h-50 cursor-pointer">
                <img
                  src="../data/images/image 26.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2 pb-7">
                  {" "}
                  Women’s Clothing{" "}
                </p>
              </div>

              <div className="h-50 cursor-pointer">
                <img
                  src="../data/images/image 27.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2 pb-7">
                  Footwear+Handbags{" "}
                </p>
              </div>

              <div className="h-40 cursor-pointer">
                <img
                  src="../data/images/image 28.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">Watches </p>
              </div>
              <div className="h-40 cursor-pointer">
                <img
                  src="../data/images/image 29.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">Fashion jewellery </p>
              </div>
            </div>
            <button className="font-noto cursor-pointer mt-4  text-[#1F8394]  py-4 rounded">
              End of season sale
            </button>
          </div>

          {/* <!-- fashions box --> */}
          <div className="bg-white p-4 shadow">
            <h2 className="font-noto text-2xl font-bold mb-2">
              Starting ₹199 | Amazon Brands & more
            </h2>
            <div className="grid grid-cols-2">
              <div className="h-50 cursor-pointer">
                <img
                  src="../data/images/image 30.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">
                  {" "}
                  Starting $199| Bedsheets
                </p>
              </div>

              <div className="h-50 cursor-pointer">
                <img
                  src="../data/images/image 31.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">
                  {" "}
                  Starting $199| Curtains
                </p>
              </div>

              <div className="h-40 cursor-pointer">
                <img
                  src="../data/images/image 32.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[14px] pt-2">
                  {" "}
                  Minimum 40% off | Ironing board & more
                </p>
              </div>
              <div className=" h-40 cursor-pointer">
                <img
                  src="../data/images/image 33.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">
                  {" "}
                  Up to 60% off | Home decor
                </p>
              </div>
            </div>
            <button className="font-noto cursor-pointer mt-4  text-[#1F8394]  py-4 rounded">
              See more
            </button>
          </div>

          {/* Last box */}
          <div className="bg-white p-4 shadow">
            <h2 className="font-noto text-2xl font-bold mb-2">
              Starting ₹99 | Home improvement essentials
            </h2>
            <div className="grid grid-cols-2">
              <div className="h-50 cursor-pointer">
                <img
                  src="../data/images/image 540.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">
                  {" "}
                  Spin mops, wipes & more
                </p>
              </div>

              <div className="h-50 cursor-pointer">
                <img
                  src="../data/images/image 541.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">
                  Bathroom hardware & accessories
                </p>
              </div>

              <div className="h-40 cursor-pointer">
                <img
                  src="../data/images/image 542.jpg"
                  alt="Product image"
                  className="w-35 h-30 object-start "
                />
                <p className="font-noto text-[15px] pt-2">
                  {" "}
                  Hammers, screwdrivers & more
                </p>
              </div>
              <div className="h-40 cursor-pointer">
                <a href="#">
                  <img
                    src="../data/images/image 543.jpg"
                    alt="Product image"
                    className="w-35 h-30 object-start "
                  />
                  <p className="font-noto text-[15px] pt-2">
                    {" "}
                    Extension boards, plugs & more
                  </p>
                </a>
              </div>
            </div>
            <button className="font-noto cursor-pointer mt-4  text-[#1F8394]  py-4 rounded">
              Explore more
            </button>
          </div>
        </div>

        {/* <!-- Slider Container --> */}
        <div className="bg-white max-w-8xl mx-auto m-7">
          {/* <!-- Header --> */}
          <div className="flex justify-between items-center mb-6 px-4">
            <h2 className="font-noto text-2xl font-bold">
              Best Sellers in Clothing & Accessories
            </h2>
          </div>

          {/* <!-- Slider --> */}
          <div className="relative overflow-hidden">
            <div className="slider-container flex overflow-x-auto scroll-smooth snap-x snap-mandatory ga-0 pb-4 px-4">
              {/* <!-- Product Card 1 --> */}
              <div className="cursor-pointer min-w-[200px] bg-white">
                <div className="relative">
                  <a href="#">
                    <img
                      src="../data/images/image 128.jpg"
                      alt="Product"
                      className="w-full h-64 object-contain"
                    />
                  </a>
                </div>
              </div>

              {/* <!-- Repeat similar product cards  --> */}
              <div className="cursor-pointer min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 129.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 130.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 131.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 132.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 133.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 134.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 128.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 129.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 130.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 131.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 132.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 133.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="min-w-[200px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 134.jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {/* <!-- first box --> */}
          <div className="bg-white p-4  shadow">
            <h2 className="font-noto text-2xl font-bold mb-2">
              Best Sellers in Toys & Games
            </h2>
            <div className=" h-70 cursor-pointer">
              <img
                src="../data/images/image 148.jpg"
                alt="Product image"
                className="w-full h-30 object-contain "
              />
              <p className="font-noto">
                Storio Rechargeable Toys Talking Cactus Baby Toys for Kids
                Dancing Cactus Toys…
              </p>
              <strong className="font-noto text-2xl">
                ₹319<sup>00</sup>
              </strong>
            </div>
            <div className="grid grid-cols-4 gap-x-7">
              <div className=" h-40 cursor-pointer">
                <img
                  src="../data/images/image 151.jpg"
                  alt="Product image"
                  className="w-45 h-30 object-contain "
                />
              </div>

              <div className=" h-40 cursor-pointer">
                <img
                  src="../data/images/image 152.jpg"
                  alt="Product image"
                  className="w-25 h-30 object-contain "
                />
              </div>
              <div className=" h-40 cursor-pointer">
                <img
                  src="../data/images/image 153.jpg"
                  alt="Product image"
                  className="w-25 h-30 object-contain "
                />
              </div>

              <div className=" h-40 cursor-pointer">
                <img
                  src="../data/images/image (1).jpg"
                  alt="Product image"
                  className="w-25 h-30 object-contain "
                />
              </div>
            </div>
          </div>
          {/* <!--  second boxs --> */}
          <div className="bg-white p-4  shadow">
            <h2 className="font-noto text-2xl font-bold mb-2">
              Customers’ Most-Loved Products
            </h2>

            <div className="grid grid-cols-2">
              <div className=" h-50 cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 154.jpg"
                    alt="Product image"
                    className="w-35 h-30 object-contain "
                  />
                </a>
              </div>

              <div className="h-50 cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 155.jpg"
                    alt="Product image"
                    className="w-35 h-30 object-contain "
                  />
                </a>
              </div>

              <div className="h-50 cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 156.jpg"
                    alt="Product image"
                    className="w-35 h-30 object-contain "
                  />
                </a>
              </div>
              <div className="h-50 cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 157.jpg"
                    alt="Product image"
                    className="w-35 h-30 object-contain "
                  />
                </a>
              </div>
            </div>

            <button className="font-noto cursor-pointer mt-4  text-[#1F8394]  py-4 rounded">
              Explore all
            </button>
          </div>
          {/* <!-- thired box  --> */}
          <div className="bg-white p-4  shadow">
            <h2 className="font-noto text-2xl font-bold mb-2">
              Best Sellers in Beauty
            </h2>

            <div className="pt-9 grid grid-cols-2">
              <div className="h-50 cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 158.jpg"
                    alt="Product image"
                    className="w-35 h-40 object-contain "
                  />
                </a>
              </div>

              <div className="h-50 cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 159.jpg"
                    alt="Product image"
                    className="w-35 h-40 object-contain "
                  />
                </a>
              </div>

              <div className=" cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 160.jpg"
                    alt="Product image"
                    className="w-35 h-40 object-contain "
                  />
                </a>
              </div>
              <div className=" cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 161.jpg"
                    alt="Product image"
                    className="w-35 h-40 object-contain "
                  />
                </a>
              </div>
            </div>
          </div>
          {/* <!-- last box--> */}
          <div className="bg-white p-4  shadow">
            <h2 className="font-noto text-2xl font-bold mb-2">
              Latest styles | Dresses, kurta & more | 50% -...
            </h2>

            <div className="grid grid-cols-2">
              <div className="cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 162.jpg"
                    alt="Product image"
                    className="w-35 h-40 object-contain "
                  />
                </a>
                <p className="font-noto"> Kurta & sets </p>
              </div>

              <div className="cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 163.jpg"
                    alt="Product image"
                    className="w-35 h-40 object-contain "
                  />
                </a>
                <p className="font-noto"> Tops </p>
              </div>

              <div className="cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 164.jpg"
                    alt="Product image"
                    className="w-35 h-40 object-contain "
                  />
                </a>
                <p className="font-noto"> Dresses </p>
              </div>
              <div className="cursor-pointer">
                <a href="">
                  <img
                    src="../data/images/image 165.jpg"
                    alt="Product image"
                    className="w-35 h-40 object-contain "
                  />
                </a>
                <p className="font-noto"> Sarees </p>
              </div>
            </div>

            <button className="font-noto cursor-pointer mt-4  text-[#1F8394]  py-4 rounded">
              Explore all
            </button>
          </div>
        </div>
        {/* <!-- Slider Container --> */}
        <div className="bg-white max-w-8xl mx-auto m-7">
          {/* <!-- Header --> */}
          <div className="flex  items-center mb-6 px-4">
            <h2 className="font-noto text-2xl font-bold">
              Min. 50% off | Unique kitchen finds | Amazon Brands & more
            </h2>
            <button className=" cursor-pointer   text-[#1F8394] p-4  py-4 rounded">
              See all
            </button>
          </div>

          {/* <!-- Slider --> */}
          <div className="relative overflow-hidden">
            <div className="slider-container flex overflow-x-auto scroll-smooth snap-x snap-mandatory ga-0 pb-4 px-4">
              {/* <!-- Product Card 1 --> */}
              <div className="cursor-pointer min-w-[300px] bg-white">
                <div className="relative">
                  <a href="#">
                    <img
                      src="../data/images/image 154 (1).jpg"
                      alt="Product"
                      className="w-full h-64 object-contain"
                    />
                  </a>
                </div>
              </div>

              {/* <!-- Repeat similar product cards  --> */}
              <div className="cursor-pointer min-w-[300px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 155 (1).jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[300px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 156 (1).jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[300px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 157 (1).jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[300px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 158 (1).jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[300px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 154 (1).jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[300px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 155 (1).jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[300px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 156 (1).jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[300px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 157 (1).jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[300px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 158 (1).jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
              <div className="cursor-pointer min-w-[300px] bg-white ">
                <a href="#">
                  <img
                    src="../data/images/image 154 (1).jpg"
                    alt=""
                    className="w-full h-64 object-contain  "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
