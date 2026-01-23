import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

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
        
        <div className="pl-3 pt-15 h-dvh bg-green-900">
          <span className="bg-white text-green-900 px-7 py-3 rounded-full text-xs font-semibold">New Collection 2026</span>

          <h1 className="font-bold text-5xl/13 pt-9 pb-4 text-white ">
            Premium Quality Hair Extensions
          </h1>
          <p className="text-white">
            Transform your look with our luxurious collection of 100% human hair
            wigs and extensions. Ethically sourced, expertly crafted.
          </p>
         <div className="mt-7 mb-2 w-fit h-max bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-3 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700">
                 <Link to="/products">Shop Now →</Link>
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
