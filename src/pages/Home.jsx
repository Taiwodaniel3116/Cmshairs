import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = ({ totalQuantity }) => {
  return (
    <div className="animate-fadeIn">
      <nav className="flex justify-between px-2 border-b-2 border-b-gray-300 py-4">
        <Link to="/" className="uppercase text-green-700 font-bold">
          CMSHAIRS👱‍♀️
        </Link>

        <div className="flex gap-2 text-green-700 font-semibold">
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </div>

        <Link to="/cart" className="font-bold relative">
          🛒
          <span className="">
            {totalQuantity}
          </span>
        </Link>
      </nav>

      <div className="mb-0 pb-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
