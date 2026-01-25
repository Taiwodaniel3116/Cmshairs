export const products = [
  {
   id: "1",
   image: "/images/jc-curly.jpg",
   name: "4*4 jc",
   length: 14,
   price: 55000,
   quantity: 1,
  },
  {
   id: "2",
   image: "/images/flip-bounce-sdd.jpg",
   name: "5*5 Flip Bounce sdd",
   length: 14,
   price: 116000,
   quantity: 1
  },
  {
   id: "3",
   image: "/images/deep-hh.jpg",
   name: "4*4 deep 💯hh",
   length: 24,
   price: 88000,
   quantity: 1,
  },
  {
   id: "4",
   image: "/images/flip-bounce-sdd.jpg",
   name: "4*4 JC 💯hh",
   length: 14,
   price: 116000,
   quantity: 1
  },
  {
   id: "5",
   image: "/images/full-frontal-bodywave.jpg",
   name: "Full frontal bodywave 💯hh",
   length: 20,
   price: 78000,
   quantity: 1
  },
  {
   id: "6",
   image: "/images/sdd-pixie.jpg",
   name: "Sdd pixie 5*5 99j 💯hh",
   length: 20,
   price: 78000,
   quantity: 1
  },
]

// Adult Cotton T-Shirt
//Black Backpack

    {/* <h1 className="font-bold text-4xl text-center pb-3 pt-5">Shopping Cart</h1>
      <p className="text-center pb-8">Review your items and proceed to checkout</p>

      <div className="bg-gray-200 py-4 rounded-full w-90 flex items-center justify-between m-auto mb-5">
        <p className="text-[18px] font-bold pl-3">
          Cart items ({totalQuantity})
        </p>
          <span className="text-red-400 text-[15px] font-semibold pr-3 cursor-pointer hover:text-red-600 active:text-red-600"
          onClick={clearCartItems}>Clear All</span>
      </div>

    
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
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-center">
        </div>
      </div> */}

      // <div className="mt-7 mb-2 w-fit h-max m-auto font-semibold bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-3 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700">
      //   <Link to="/checkout">Proceed to Checkout</Link>
      // </div> 