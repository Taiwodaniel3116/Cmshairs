import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-green-900 mt-20 pl-2">
        <p className="text-white font-bold pb-5 pt-2">CMSHAIRS</p>

        <p className="text-white text-[15px]">
          Premium quality hair extensions and wigs. Ethically sourced, expertly
          crafted for your confidence.
        </p>

        <div>
          <p className="text-white font-bold mt-4">Quick Links</p>

          <nav className="text-white flex flex-col pt-3 text-[15px]">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/checkout">Checkout</Link>
          </nav>
        </div>

        {/* SOCIAL MEDIA LINKS */}
        <div>
          <p className="text-white font-bold mt-4">Follow Us</p>

        <nav className="text-white flex flex-col pt-3 text-[15px]">
          <Link to="/facebook.com">Facebook</Link>
          <Link to="/instagram.com">Instagram</Link>
          <Link to="/tiktok.com">TikTok</Link>
        </nav>
        </div>

        {/* COPYRIGHT */}
        <div>
          <p className="text-gray-400 pt-10 text-center text-[13px] font-semibold">© 2026 CMSHAIRS. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
