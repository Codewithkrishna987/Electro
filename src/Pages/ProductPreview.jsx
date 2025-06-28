import React from 'react'
import { useParams } from "react-router-dom";
import { newArrivalData, popularData, bestSellerData } from "./Home";
const ProductPreview = () => {
    const { id } = useParams();
    const product = [...newArrivalData, ...popularData, ...bestSellerData].find(item => item.id === parseInt(id));
    if (!product) {
        return <div>Product not found</div>;
    }         
  return (
    <div className="sm:px-10 py-8 px-4">
      <div className="flex sm:flex-row flex-col gap-4">
        <div className="w-full sm:w-1/2 flex justify-center items-center h-140 ">
          <img className="h-full" src={product.img} alt="" />
        </div>
        <div className="w-full sm:w-1/2 ">
          <h2 className="text-black text-2xl  my-3 font-semibold">
            {product.title}
          </h2>

          <p className="text-xl my-3 flex gap-2 font-semibold">
            <span className="relative text-gray-500">
              ₹{product.pricecut}
              <p className="absolute w-full top-1/2 text-black border"></p>
            </span>
            <span>₹{product.price}</span>
          </p>
          <p className="my-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            magnam reiciendis ullam natus optio eos laboriosam ab autem fugiat
            minus.
          </p>
          <button className="my-3 mx-2 text-white bg-blue-700 p-2">
            Add to Cart
          </button>
          <p>100% original product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
          <p>Cash on delivery is available on this product</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;