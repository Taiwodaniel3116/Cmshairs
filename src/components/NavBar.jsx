import { Link } from "react-router-dom";
import { useState } from "react";
import CartIcon from "./CartIcon";

const NavBar = ({ totalQuantity, links }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="border-b-2 border-b-gray-300 bg-green-900 text-white px-6 py-5 md:py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto ">
          {/* Logo */}
          <Link to="/" className="uppercase text-white font-bold font-serif md:text-2xl">
            cmshairs👱‍♀️
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 items-center md:font-semibold">
            {links.map((link) =>
              link.label === "Cart" ? (
                <li key={link.to}>
                  <Link to={link.to}>
                    <CartIcon totalQuantity={totalQuantity} />
                  </Link>
                </li>
              ) : (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-yellow-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile menu button */}
          <button className="cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
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

        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-4 px-2">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2 px-4 rounded hover:bg-yellow-500"
                >
                  {link.label === "Cart" ? (
                    <>
                      <CartIcon totalQuantity={totalQuantity} />
                      <span>Cart</span>
                    </>
                  ) : (
                    link.label
                  )}
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
