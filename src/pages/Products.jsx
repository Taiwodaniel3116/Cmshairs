import React, { useState } from "react";
import { products } from "../data/product";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import StarRating from "../components/StarRating";

const Products = ({ addToCart, totalQuantity }) => {
  const [searchQuery, setSearchQuery] = useState(""); // stores what the user types.
  // Category Filter Logic
  const categories = [
    "All Categories",
    "Wigs",
    "Bundles",
    "Closures",
    "sdd pixie",
    "Curly",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Categories"); //

  //Filter products based on search
  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
        <p className="text-center mt-2 m-auto text-[18px] text-gray-800 md:text-[20px]">
          Discover our premium collection of hair extensions and wigs.
        </p>

        {/* Category UI */}
        <div className="bg-gray-50 w-fit m-auto px-7 py-5 mt-10 rounded-2xl">
          <div className="flex justify-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-full px-8 py-3 text-sm focus:outline-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className=" flex justify-center mt-3 relative w-full z-0">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className=" text-sm px-10 py-2 rounded-full border border-gray-300  md:px-20"
            />
            {/* Search Icon */}
            {/* <button
            className="absolute right-20 top-1/2 -translate-y-1/2 text-green-700 cursor-pointer"
            aria-label="Search"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z"
                />
              </svg>
            </span>
          </button> */}
          </div>
        </div>

        {/* Products List*/}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6  mt-10">
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
                  {/* <p className="text-sm text-gray-500">{product.category}</p> */}
                  <div className="ml-3">
                    <span className="text-sm text-gray-600">
                      {product.wigDetail}
                    </span>
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

                  {/* Rating Stars */}
                  <div className="mt-2">
                    <StarRating rating={product.rating} />
                  </div>

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
