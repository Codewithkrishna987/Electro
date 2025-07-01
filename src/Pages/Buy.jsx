import React from "react";

function Buy() {
  return (
    <>
      <div className="bg-gray-200 flex w-screen p-14 justify-center gap-4 min-h-[80vh]">
        {/* Address */}
        <div className="w-[40vw] h-[30vh] bg-white flex flex-col items-center justify-center p-5 gap-10 shadow-md rounded">
          <h1 className="text-2xl font-bold text-gray-400">Add Your Delivery Address</h1>
          <button className="py-2 px-4 rounded bg-blue-700 text-white hover:bg-black">Add Address</button>
        </div>

        {/* Payment method */}
        <div className="w-[30vw] bg-white">
         
        </div>
      </div>
    </>
  );
}

export default Buy;
