import React from "react";
import { Link } from "react-router-dom";

const EmptyCartState = () => {
  return (
    <>
    <div className="w-15 h-15 rounded-full bg-gray-200 m-auto mt-3 flex justify-center items-center">
      <div>🛒</div>
    </div>
      <div className="text-3xl font-bold text-center mt-5">Your Cart Is Empty</div>
      <p className="text-center pt-2">
        Looks like you haven't added any item to your cart yet. Start shopping
        to find your perfect hair!
      </p>
      <div className="mt-7 mb-2 w-fit h-max m-auto font-semibold bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-3 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700">
        <Link to="/products">Start Shopping</Link>
      </div>
    </>
  );
};

export default EmptyCartState;
