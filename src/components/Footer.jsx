import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-green-900 mt-20 pl-2">
        <p className="text-white font-bold pb-5 pt-2 font-serif md:text-2xl">CMSHAIRS👱‍♀️</p>

        <p className="text-white text-[15px] md:text-[17px] md:w-[60ch]">
          Premium quality hair extensions and wigs. Ethically sourced, expertly
          crafted for your confidence.
        </p>

        <div className="md:flex justify-start gap-10 pt-10">
          {/* NAVIGATION LINKS */}
        <div>
          <p className="text-white font-bold mt-4">Quick Links</p>

          <nav className="text-white flex flex-col pt-3 text-[15px] w-fit md:font-semibold">
            <Link className="pb-2 hover:text-yellow-500" to="/">Home</Link>
            <Link className="pb-2 hover:text-yellow-500" to="/products">Products</Link>
            <Link className="pb-2 hover:text-yellow-500" to="/cart">Cart</Link>
            <Link className="hover:text-yellow-500" to="/checkout">Checkout</Link>
          </nav>
        </div>

        {/* SOCIAL MEDIA LINKS */}
        <div>
          <p className="text-white font-bold mt-4">Follow Us</p>

        <nav className="text-white flex flex-col pt-3 text-[15px] md:font-semibold">
          <Link className="pb-2" to="/facebook.com">Facebook</Link>
          <Link className="pb-2" to="/instagram.com">Instagram</Link>
          <Link to="/tiktok.com">TikTok</Link>
        </nav>
        </div>
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
