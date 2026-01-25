import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { advert } from "../data/advert";
import { div } from "framer-motion/client";

const Home = ({ totalQuantity, cartItems }) => {
  const links = [
    { label: "Products", to: "/products" },
    { label: "Cart", to: "/cart" },
    { label: "checkout", to: "/checkout" },
  ];

  return (
    <>
      <NavBar links={links} totalQuantity={totalQuantity} />

      <div className="animate-fadeIn">
        {/* Hero section */}

        <div className="pl-3 pt-17 h-max bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/cms-hero.jpg')"}}>
          <span className="bg-green-900 text-white px-7 py-3 rounded-full text-xs font-semibold">
            New Collection 2026
          </span>

          <h1 className="font-bold text-7xl/17 pt-10 pb-6 text-white ">
            Premium Quality Hair Extensions
          </h1>
          <p className="text-white text-[19px]">
            Transform your look with our luxurious collection of 100% human hair
            wigs and extensions. Ethically sourced, expertly crafted.
          </p>
          <div className="mt-7 mb-2 w-fit h-max bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-3 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700">
            <Link to="/products">Shop Now →</Link>
          </div>
        </div>

        {/* Best selling styles */}
        <div className="pt-10">
          <h2 className="font-bold text-4xl text-center underline">
            BestSelling Styles
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8  mt-10">
            {advert.map((item) => (
              <div key={item.id}>
                <div className="pb-5 border-gray-200 border-2 shadow-2xl shadow-gray-300 h-full rounded-3xl">
                  <div className=" rounded-3xl mx-2">
                    <img
                      className="w-38 h-40 m-auto hover:shadow-white shadow-2xl active:shadow-white"
                      src={item.image}
                    />
                  </div>
                  <p className="ml-3 pt-3 font-bold">{item.name}</p>
                  <p className="ml-3 pt-2 text-[17px] font-bold text-green-800">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* View all products button */}
              <div className="mt-7 mb-2 w-fit h-max m-auto bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-3 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700">
                  <Link to="/products">View All Products</Link>
                </div>
        </div>

        {/* Transform Your Look Today */}
        <div className="pt-10">
          <h2 className="font-bold text-4xl text-center ">Transform your Look Today</h2>

          <p className="pt-5 text-[18px] text-center">Get 20% off your first order. Experience the luxury of premium quality hair extensions that look and feel natural.</p>

          {/* Shop Now */}
             <div className="mt-7 mb-2 w-fit h-max m-auto bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-3 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700">
                  <Link to="/products">Shop Now</Link>
                </div>
        </div>

        <div className="mb-0 pb-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
