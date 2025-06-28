import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, deletefromCart, addToCart, decreasefromCart } = useCart();

  return (
    <div className="p-6 flex-grow">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in Cart</p>
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
