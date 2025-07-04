import React from "react";
import { useCart } from "./CartContext";
import { assets } from "../assets/assets";

function Buy() {
  const { cart } = useCart();

  // if(cart.length === 0){
  //      return <div className="text-center mt-10 text-gray-500">Your cart is empty.</div>;
  // }
  return (
    <>
      <div className="bg-gray-200 flex w-screen p-14 justify-center gap-4 min-h-[80vh]">
        {/* Address */}
        <div className="w-[40vw] h-[50vh] bg-white flex flex-col items-center justify-center p-3 gap-5 shadow-xl rounded-xl">
            <div><img src="https://ecommerce-frontend-view.netlify.app/map.png" alt="address img" className="w-[8vw]" /></div>
          <div className=" flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-800">
            NO Address found in your account! 
          </h1>
          <h2 className="text font-semibold text-gray-500">Add Your Address</h2>
          </div>
          <button className="py-2 px-4 rounded bg-blue-700 text-white hover:bg-black font-semibold">
            Add Address
          </button>
        </div>

        {/* Payment method */}
        <div className="w-[30vw] bg-white flex flex-col p-5 gap-4 relative">
          <h2 className="font-bold text-[1.3vw] text-gray-500">Your Order</h2>
          <hr className="text-gray-500" />
          <div className="flex justify-between">
            <h3>Product</h3>
            <h3>Subtotal</h3>
          </div>
          <hr className="text-gray-500" />

          {cart.map((item, index) => (
            <div key={index} className="flex">
              <div className="flex">
                <div>
                  <img src="" alt="photo" />
                  <p>{item.title}</p>
                  <p>{item.quantity}</p>
                </div>

                <div>{item.price}</div>
              </div>
            </div>
          ))}

          <button className=" flex gap-2 justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-black text-white py-2.5 rounded ">
          <img src={assets.bag} alt="" className="text-2xl text-white"/>
           <span className="font-semibold"> Only Cash on Delivery</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Buy;
