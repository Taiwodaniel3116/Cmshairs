import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/product";
import Footer from "../components/Footer";

const Cart = ({
  cartItems,
  totalQuantity,
  increaseQuanity,
  decreaseQuantity,
  removeItem,
  // removeAllItem,
  totalPrice,
}) => {
  return (
    <>
      <nav className="flex justify-between px-2">
        <Link to="/" className="uppercase text-green-700 font-bold">
          CMSHAIRS
        </Link>

        <div className="flex gap-2 text-green-700 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/checkout">Checkout</Link>
        </div>

        <div className="text-[15px] text-green-900 font-bold">
          🛒{totalQuantity}
        </div>
      </nav>

      {/*  */}
      <h1 className="font-bold text-4xl text-center pb-3">Shopping Cart</h1>
      <p className="text-center">Review your items and proceed to checkout</p>

      <div className="bg-gray-200 py-4 rounded-2xl w-90 flex items-center justify-between m-auto mb-3">
        <p className="text-[18px] font-bold pl-3">
          Cart items ({totalQuantity})
        </p>
          <span className="text-red-400 text-[15px] font-bold pr-3 cursor-pointer hover:text-red-600 active:text-red-600">Clear All</span>
      </div>

      {/*  */}
      <div className="w-max-content h-max-content border-2 border-gray-200 pt-3 px-3 rounded-2xl md:w-100 m-auto">
        {cartItems.map((cartItem, id) => (
          <div
            key={id}
            className="flex gap-2 border-2 border-white rounded-3xl mb-2 shadow shadow-gray-500"
          >
            <div className="py-5">
              <img
                className="w-38 h-40 pl-1 rounded-2xl hover:shadow-white shadow-2xl active:shadow-white"
                src={cartItem.image}
                alt="cartItem"
              />
            </div>
            <div className="pt-3">
              <p className="pt-3 font-bold">{cartItem.name}</p>
              <p className="font-semibold">Quantity: {cartItem.quantity}</p>
              <p className="font-bold text-green-800">
                ${cartItem.price * cartItem.quantity}
              </p>

              <div className="mt-2">
                <button
                  className="text-3xl w-10 mr-3 rounded-full border border-gray-400 cursor-pointer hover:bg-amber-400 active:bg-amber-400 duration-300"
                  onClick={() => decreaseQuantity(id)}
                >
                  -
                </button>
                <button
                  className="text-3xl w-10 mr-3 rounded-full border border-gray-400 cursor-pointer hover:bg-amber-400 active:bg-amber-400 duration-300"
                  onClick={() => increaseQuanity(id)}
                >
                  {/* ➕ */}+
                </button>
              </div>
              <div>
                <button
                  className="text-red-400 mt-2 font-semibold  transition duration-300 hover:text-red-600 active:text-red-600 cursor-pointer"
                  onClick={() => removeItem(id)}
                >
                  Remove
                </button>

                {/* <button
                  className="text-white mt-2 font-bold  transition duration-300 hover:text-gray-300 active:text-gray-300"
                  onClick={removeAllItem}
                >
                  Remove All
                </button> */}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-around">
          <span className="text-black font-bold uppercase">Total:</span>
          <span className=" text-green-900 font-extrabold">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-center">
          {/* <button className="text-white bg-emerald-600 border-2 px-4 py-[3px] rounded-2xl"
            onClick={removeAllItem}
          >Remove All
          </button> */}
        </div>
      </div>

      <div className="mt-7 mb-2 w-fit h-max m-auto font-semibold bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-3 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700">
        <Link to="/checkout">Proceed to Checkout</Link>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
