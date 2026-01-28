import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartIcon from "./CartIcon";

const NavBar = ({ totalQuantity, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`border-b-2 border-gray-100 uppercase sticky top-0 z-50 transition-shadow duration-300
        ${scrolled ? "shadow-lg bg-white" : "bg-white"}`}
      >
        <div className="px-6 py-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <Link
              to="/"
              className="uppercase text-black font-bold font-serif md:text-2xl"
            >
              cmshairs👱‍♀️
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex gap-6 text-gray-800 md:font-semibold">
              {links
                .filter((link) => link.label !== "Cart")
                .map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="hover:text-green-500 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>

            {/* Right section */}
            <div className="flex items-center gap-4 text-white">
              {/* Cart always visible */}
              <Link to="/cart">
                <CartIcon totalQuantity={totalQuantity} />
              </Link>

              {/* Hamburger */}
              <button
                className="md:hidden cursor-pointer text-gray-800"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden bg-white text-black space-y-4 px-6 pb-4">
            {links
              .filter((link) => link.label !== "Cart")
              .map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="flex gap-3 py-2 px-4 duration-300 transition  hover:bg-green-900 hover:text-white transtion rounded active:bg-green-900 active:text-white "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default NavBar;

//  <div
//           className={`md:hidden overflow-hidden transition-all duration-300 ease-out
//   ${
//     isOpen
//       ? "max-h-96 opacity-100 translate-y-0"
//       : "max-h-0 opacity-0 -translate-y-2"
//   }
//   bg-green-800`}
//         >
//           <ul className="space-y-4 px-6 pb-4 text-white">
//             {links
//               .filter((link) => link.label !== "Cart")
//               .map((link) => (
//                 <li key={link.to}>
//                   <Link
//                     to={link.to}
//                     onClick={() => setIsOpen(false)}
//                     className="flex gap-3 py-2 px-4 rounded hover:bg-yellow-500 transition"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//           </ul>
//         </div>
