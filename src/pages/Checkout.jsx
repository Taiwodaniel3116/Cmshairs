import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ cartItems, totalQuantity, totalPrice }) => {
  const phoneNumber = "2349027396272";

  const handleWhatsappOrder = () => {
    let message = "ORDER SUMMARY \n";
    let total = 0;

    cartItems.map((cartItem) => {
      message += `${cartItem.name} (${cartItem.quantity}) - $${
        cartItem.quantity * cartItem.price
      } \n`;
      total = `${totalPrice}.00`;
    });

    message += `\n TOTAL: $${total}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>

        {/* <Link to="/cart" className="flex items-center relative ml-10">
          <img
            src="/images/icons/cart-icon.png"
            alt="cart icon"
            className="w-8 h-auto mr-3 mt-2"
          />
          <div className="text-[13px] text-blue-200 absolute left-3.75 top-0">
            {totalQuantity}
          </div>
        </Link> */}
      </nav>
      {/*  */}
      <div className="font-bold text-center text-3xl">
       Order Summary
      </div>

      <div className="grid grid-cols-2 mb-3 bg-white w-[80%] py-5 px-2 rounded-3xl shadow-2xl shadow-gray-300 md:w-100 m-auto border-2 border-gray-200">
        {cartItems.map((cartItem, id) => (
          <div
            key={id}
            className="border-b-[3.5px] border-r rounded-4xl border-gray-300"
          >
            <div className="flex justify-center">
              <img
                src={cartItem.image}
                alt="cart items"
                className="w-23 h-23 pt-2 pl-1 hover:shadow-white shadow-2xl active:shadow-white rounded-[15px]"
              />
            </div>
            <p className="text-center font-semibold text-[13px]">
              {cartItem.name} ({cartItem.quantity})
            </p>
            <p className="text-center text-green-900 font-bold">
              ${cartItem.price * cartItem.quantity}
            </p>
          </div>
        ))}
      </div>

      {/*  */}
      <div className="flex flex-col gap-5 bg-white w-75 m-auto px-3 py-2 rounded-2xl border-2 border-gray-200">

        <div className="flex justify-between">
          <span className="text-black font-bold ">Discount:</span>
          <span className="text-green-900 font-bold line-through">
            $0.00
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-black font-bold ">Shipping:</span>
          <span className="text-green-900 font-bold line-through">
            $0.00
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-black font-bold">Tax:</span>
          <span className="text-green-900 font-bold uppercase line-through">
            $0.00
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-black font-bold uppercase">ORDER Total:</span>
          <span className="text-green-900 font-bold border-b">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

      </div>
      {/*  */}

      <div className="flex justify-center flex-col items-center gap-2 pt-3 mb-15 mt-5 font-mono">
        {/* <a href={"https://wa.me/2349027396272"}> */}
        <button
          className="bg-green-900 text-white font-semibold px-10 py-3 rounded-3xl duration-300 hover:bg-green-700 active:bg-green-700 cursor-pointer"
          onClick={handleWhatsappOrder}
        >
          Complete Order via Whatsapp{" "}
        </button>
      </div>
    </>
  );
};

export default Checkout;
