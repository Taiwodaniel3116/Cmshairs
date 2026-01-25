import React, { useState } from "react";
import { products } from "../data/product";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Products = ({ addToCart, totalQuantity }) => {
  const [searchQuery, setSearchQuery] = useState(""); // stores what the user types.

  //Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //Navbar
  const links = [
    { label: "Home", to: "/" },
    { label: "Cart", to: "/cart" },
    { label: "checkout", to: "/checkout" },
  ];

  return (
    <>
      <NavBar links={links} totalQuantity={totalQuantity} />
      {/*  */}

      <div className="animate-fadeIn">
        <h1 className="font-bold text-4xl text-center pt-5 mt-8 md:text-5xl">
          {" "}
          Our Products
        </h1>
        <p className="text-center mt-2 m-auto md:text-[20px]">
          Discover our premium collection of hair extensions and wigs.
        </p>

        <div className=" flex justify-center mt-3 relative z-0">
          {/* <span className="absolute left-70 top-2 z-0">🔍</span> */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-100 px-10 py-2 rounded-full outline-gray-100 caret-green-400 md:px-20"
          />
        </div>

        {/* Products List*/}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8  mt-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id}>
                <div className="pb-5 border-gray-200 border-2 shadow-2xl shadow-gray-300 h-full rounded-3xl">
                  <div className=" rounded-3xl mx-2">
                    <img
                      className="w-38 h-40 m-auto mt-1 rounded-2xl hover:shadow-white shadow-2xl active:shadow-white"
                      src={product.image}
                    />
                  </div>
                  <p className="ml-3 pt-3 font-semibold">{product.name}</p>
                  <div className="ml-3">
                    <span>{product.wigDetail}</span>
                  </div>
                  {/* <p className="ml-3 pt-2 text-[17px] font-bold text-green-900">
                    #{product.price}
                  </p> */}
                  {/* <div>{product.button}</div> */}

                  {/* Colour */}
                  {/* <div className="ml-3">
                    <input className="mr-2" type="radio" name="" id="" />

                    <input className="mr-2" type="radio" name="" id="" />

                    <input type="radio" name="" id="" />
                  </div> */}

                  {/* Add to cart button */}
                  <div className="flex justify-center mt-2">
                    <button
                      className="bg-green-900 hover:bg-green-700 active:bg-green-700 duration-300 px-9 py-1.5 rounded-full text-white cursor-pointer"
                      onClick={() => addToCart(product)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found
              <span className="animate-pulse">🛒.</span>
            </p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;
