import React from "react";
import { products } from "../data/product";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Products = ({ addToCart, totalQuantity }) => {
  return (
    <>
      <nav className="flex justify-between px-2">
        <Link to="/" className="uppercase text-green-700 font-bold">CMSHAIRS</Link>

        <div className="flex gap-2 text-green-700 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </div>

        <div className="text-[15px] text-green-900 font-bold">
          🛒{totalQuantity}
        </div>
      </nav>
      {/*  */}

      <h1 className="font-bold text-4xl text-center"> Our Products</h1>
      <p className="text-center mt-2">
        Discover our premium collection of hair extensions and wigs.
      </p>

      <div className=" flex justify-center mt-3">
        <input
          type="text"
          placeholder="Search products..."
          className="bg-gray-200 px-10 py-2 rounded-full outline-green-400 caret-green-400"
        />
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8  mt-10">
        {products.map((product) => (
          <div key={product.id}>
            <div className="pb-5 border-gray-200 border-2 shadow-2xl shadow-gray-300 h-full rounded-3xl">
              <div className=" rounded-3xl mx-2">
                <img
                  className="w-38 h-40 hover:shadow-white shadow-2xl active:shadow-white"
                  src={product.image}
                />
              </div>
              <p className="ml-3 pt-3 font-bold">{product.name}</p>
              <p className="ml-3 pt-2 text-[17px] font-bold text-green-800">
                ${product.price}
              </p>
              <div>{product.button}</div>

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
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Products;

//  <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
//   {
//     products.map((product) => (
//       <div key={product.id}>
//         <div className="border-2 border-white rounded-3xl mt-10 mx-2 px-2 py-4 shadow-2xl shadow-black-300">
//             <img className="w-38 h-40" src={product.image} />
//           </div>
//         <p className='ml-3 pt-3 font-bold'>{product.name}</p>
//         <p className='ml-3 pt-2 text-[17px] font-bold text-green-800'>${product.price}</p>

//         <div className='flex justify-center mt-2'>
//           <button className='bg-green-800 px-9 py-1.5 rounded-full text-white cursor-pointer'
//           onClick={() => addToCart()}>Add to cart</button>
//         </div>
//         {/*  */}
//       </div>
//     ))
//   }
// </div>
