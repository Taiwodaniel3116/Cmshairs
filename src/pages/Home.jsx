import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Home = ({ totalQuantity, cartItems }) => {
 
  const links = [
    {label: "Products", to: "/products"},
    {label: "Cart", to: "/cart"},
    {label: "checkout", to: "/checkout"},
  ];

  return (
    <>
      <NavBar
      // cartCount={cartItems.length}
       links={links}
      totalQuantity={totalQuantity}
      />
      {/* <nav className="flex justify-between px-2 border-b-2 border-b-gray-300 py-4 fixed top-0 w-full bg-green-900 z-10">
        <Link to="/" className="uppercase text-white font-bold">
          CMSHAIRS👱‍♀️
        </Link>

        <div className="flex gap-2 text-white font-semibold">
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </div>
        <Link to="/cart" className="font-bold relative mt-1">
          🛒
          <span className="absolute bottom-4 right-2 text-[12px] text-white ">
            {totalQuantity}
          </span>
        </Link>
      </nav> */}

      <div className="animate-fadeIn">
        <div className="mb-0 pb-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
