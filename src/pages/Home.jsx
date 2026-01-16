import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="flex justify-between px-2">
        <h1 className="uppercase text-green-700 font-bold">CMSHAIRS</h1>

        <div>
          <Link to="/products">Products</Link>
          {/* <Link to="/checkout" className="links-hover-color links-active-color">Checkout</Link> */}

          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </div>
      </nav>
    </>
  );
};

export default Home;
