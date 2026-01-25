import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import EmptyCartState from "../components/EmptyCartState";
import NavBar from "../components/NavBar";

// Whatsapp Order //
const Checkout = ({ cartItems, totalQuantity, totalPrice }) => {
  const phoneNumber = "2349027396272";

  const handleWhatsappOrder = () => {
    let message = "ORDER SUMMARY \n";
    let total = 0;

    cartItems.map((cartItem) => {
      message += `${cartItem.name}. ${cartItem.selectedInch}inches (${cartItem.quantity}) - #${
        // cartItem.quantity * cartItem.price
        (
          cartItem.inchesPricing[cartItem.selectedInch] * cartItem.quantity
        ).toLocaleString()
      } \n`;
      total = `${totalPrice.toLocaleString()}`;
    });

    message += `\n TOTAL: #${total}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  //Navbar
  const links = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Cart", to: "/cart" },
  ];

  return (
    <div>
      <NavBar links={links} totalQuantity={totalQuantity} />

      <div className="animate-fadeIn">
        {cartItems.length === 0 ? (
          <EmptyCartState />
        ) : (
          <div className="animate-fadeIn">
            <div className="font-bold text-center text-4xl pt-5 pb-2 mt-8 md:text-5xl">
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
                  <p className="text-center text-sm text-gray-600">
                    {cartItem.selectedInch}inches
                  </p>
                  <p className="text-center text-green-900 font-bold">
                    #
                    {(
                      cartItem.inchesPricing[cartItem.selectedInch] *
                      cartItem.quantity
                    ).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            {/*  */}
            <div className="flex flex-col gap-5 bg-white w-75 m-auto px-3 py-2 rounded-2xl border-2 border-gray-200">
              <div className="flex justify-between">
                <span className="text-black font-bold ">Discount:</span>
                <span className="text-green-900 font-bold line-through">
                  #0.00
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-black font-bold ">Shipping:</span>
                <span className="text-green-900 font-bold line-through">
                  #0.00
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-black font-bold">Tax:</span>
                <span className="text-green-900 font-bold uppercase line-through">
                  #0.00
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-black font-bold uppercase">
                  ORDER Total:
                </span>
                <span className="text-green-900 font-bold border-b">
                  #{totalPrice.toLocaleString()}
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
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
