import { Link } from "react-router-dom";
import { products } from "../data/product";
import Footer from "../components/Footer";
import EmptyCartState from "../components/EmptyCartState";
import NavBar from "../components/NavBar";

const Cart = ({
  cartItems,
  setCartItems,
  totalQuantity,
  increaseQuanity,
  decreaseQuantity,
  removeItem,
  totalPrice,
  clearCartItems,
}) => {
  const links = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "checkout", to: "/checkout" },
  ];

  const updateInch = (id, newInch) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selectedInch: newInch } : item,
      ),
    );
  };

  return (
    <div className="">
      <NavBar links={links} totalQuantity={totalQuantity} />

      <div className="animate-fadeIn">
        {cartItems.length === 0 ? (
          <EmptyCartState />
        ) : (
          <>
            <h1 className="font-bold text-4xl text-center pb-3 pt-5 mt-8 md:text-5xl">
              Shopping Cart
            </h1>
            <p className="text-center pb-8 md:text-[20px]">
              Review your items and proceed to checkout
            </p>

            <div className="bg-gray-200 py-4 rounded-full w-90 flex items-center justify-between m-auto mb-5">
              <p className="text-[18px] font-semibold pl-5">
                Cart items ({totalQuantity})
              </p>
              <span
                className="text-red-400 text-[15px] font-semibold pr-5 cursor-pointer hover:text-red-600 active:text-red-600"
                onClick={clearCartItems}
              >
                Clear All
              </span>
            </div>

            <div className="w-max-content h-max-content border-2 border-gray-200 pt-3 px-3 rounded-2xl md:w-100 m-auto animate-fadeIn">
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
                    <p className="pt-3 font-semibold">{cartItem.name}</p>
                    {/*  */}
                    <div className="mt-2">
                      <label className="text-sm text-gray-600">
                        Length (inches)
                      </label>

                      {/* <select
                        value={cartItem.selectedInch}
                        onChange={(e) =>
                          updateInch(cartItem.id, Number(e.target.value))
                        }
                        className="mt-1 w-fit rounded-md border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        {Object.keys(cartItem.inchesPricing).map((inch) => (
                          <option key={inch} value={inch}>
                            {inch} inches
                          </option>
                        ))}
                      </select> */}
                      <div className="flex gap-2 mt-2">
                        {Object.keys(cartItem.inchesPricing).map((inch) => (
                          <button
                            key={inch}
                            onClick={() =>
                              updateInch(cartItem.id, Number(inch))
                            }
                            className={`px-3 py-1 text-sm rounded-full border transition
        ${
          cartItem.selectedInch === Number(inch)
            ? "bg-black text-white"
            : "border-gray-300 text-gray-700"
        }`}
                          >
                            {inch}"
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <p className="mt-2 text-sm text-gray-600">
                      ₦
                      {cartItem.inchesPricing[
                        cartItem.selectedInch
                      ].toLocaleString()}
                      each
                    </p>
                    {/*  */}
                    {/* <p className="">
                      Quantity: {cartItem.quantity}
                    </p> */}
                    <p className="font-bold text-green-800">
                      #
                      {(cartItem.inchesPricing[cartItem.selectedInch] *
                        cartItem.quantity).toLocaleString()}
                    </p>

                    <div className="mt-2">
                      <button
                        className="text-2xl w-9 mr-2 rounded-full border border-gray-400 cursor-pointer hover:bg-amber-400 active:bg-amber-400 duration-300"
                        onClick={() => decreaseQuantity(id)}
                      >
                        -
                      </button>
                      <span className="">{cartItem.quantity}</span>
                      <button
                        className="text-2xl w-9 ml-2 rounded-full border border-gray-400 cursor-pointer hover:bg-amber-400 active:bg-amber-400 duration-300"
                        onClick={() => increaseQuanity(id)}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <button
                        className="text-red-400 mt-2 font-semibold  transition duration-300 hover:text-red-600 active:text-red-600 cursor-pointer"
                        onClick={() => removeItem(id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-around">
                <span className="text-black font-bold uppercase">Total:</span>
                <span className=" text-green-900 font-extrabold">
                  #{totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-center"></div>
            </div>

            <div className="mt-7 mb-2 w-fit h-max m-auto font-semibold bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-3 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700">
              <Link to="/checkout">Proceed to Checkout</Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
