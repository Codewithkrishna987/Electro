
import { div } from "framer-motion/client";
import { useCart } from "./CartContext";


export const Wishlist = () => {
  const { wishlist, deletewishlist } = useCart();

  return (
    <div className="flex-grow p-6 min-h-[60vh]">
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 text-center ">
        Your{" "}
        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          WishList
        </span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4"></div>
      <hr className="text-gray-500" />

      {wishlist.length === 0 ? (
        <p className=" pt-8 text-2xl text-gray-600">No item in Your Wishlist</p>
      ) : (
        wishlist.map((item, index) => (
          <div className="flex flex-col gap-5 mb-4 mt-2 px-10 bg-blue-50 rounded relative">
            <div key={index} className="flex gap-7 items-center">
              <div>
                <img src={item.img} alt="" className="w-[8vw] rounded" />
              </div>
              <div className="p-2 flex flex-col gap-10">
                <div className="flex flex-col">
                  <p className="text-gray-500">{item.title}</p>
                  <p className="text-black text-xl">{item.description}</p>
                </div>
                {/* rating */}
                <div className="flex gap-4">
                  <p className="line-through text-gray-500">{item.pricecut}</p>
                  <p className="text-blue-700 font-semibold">{item.price}</p>
                </div>
              </div>
              <button onClick={() => deletewishlist(item)} className="absolute right-0 mr-10 border-2 px-6 py-2  border-blue-700 bg-blue-700 hover:border-black text-white hover:text-white hover:bg-black hover:scale-105 rounded-sm cursor-pointer transition-all duration-300">
                Delete
              </button>
            </div>
            <hr className="text-gray-500" />
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
