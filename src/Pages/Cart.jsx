import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, deletefromCart, addToCart, decreasefromCart } = useCart();

  return (
    <div className="p-6 flex-grow min-h-[60vh]">
      
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 text-center ">
        Your{" "}
        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Cart
        </span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4"></div>
      <hr className="text-gray-500" />

      {cart.length === 0 ? (
        <p className=" pt-8 text-2xl text-gray-600">No item in Your Cart</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-4 gap-4"
          >
            <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded-xl" />
            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-gray-500 text-sm">₹{item.price} per item</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decreasefromCart(item)}
                className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-black"
              >
                -
              </button>
              <span>Qty: {item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-black"
              >
                +
              </button>
            </div>

            <div className="font-semibold">₹{item.price * item.quantity}</div>

            <button
              onClick={() => deletefromCart(item)}
              className="py-2 px-4 bg-blue-700 text-white rounded-xl hover:bg-black transition hover:scale-105"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
