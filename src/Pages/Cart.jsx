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
            className="flex justify-between items-center border-b py-2"
          >
            <img src={item.img} alt="" className="w-16 rounded-xl" />
            <span>{item.title}</span>
            {/* <span  onClick={() => addToCart(item)} 
  className="cursor-pointer hover:text-blue-600"> Qty: {item.quantity} </span> */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreasefromCart(item)}
                className="px-2.5 bg-blue-700 text-white rounded hover:bg-black"
              >
                -
              </button>
              <span>Qty: {item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="px-2 bg-blue-700 text-white rounded hover:bg-black "
              >
                +
              </button>
            </div>
            <span>{item.price * item.quantity}</span>
            <button
              onClick={() => deletefromCart(item)}
              className="py-2 px-5 bg-blue-700 text-white rounded-xl hover:bg-black transition duration-75 transform hover:scale-105"
            >
              <span>delete</span>
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
