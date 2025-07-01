import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CategoryData } from '../assets/assets';
import { useCart } from "./CartContext";
import { toast } from 'react-toastify';

// Card Component
const Card = ({ product, handleAddToCart }) => {
  const { img, hoverimg, title, description, Pricecut, price } = product;

  return (
    <div className="w-full border-2 h-auto flex-col rounded-xl overflow-hidden border-zinc-100 shadow-2xl relative">
      <div className="overflow-hidden h-60 relative bg-gray-100 group">
        <img
          src={img}
          alt={title}
          className="w-full object-contain transition duration-300 ease-in-out group-hover:hidden"
        />
        <img
          src={hoverimg}
          alt={title}
          className="w-full object-contain hidden group-hover:block absolute"
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="text-gray-800 text-lg capitalize font-semibold">{title}</div>
        <div className="text-gray-600 text-sm line-clamp-1">{description}</div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 line-through">₹{Pricecut}</span>
          <span className="text-blue-700 font-semibold">₹{price}</span>
        </div>
        <button
          onClick={() => handleAddToCart(product)}
          className="border-2 w-full border-blue-700 hover:border-none text-blue-700 hover:text-white hover:bg-black p-1.5 flex justify-center items-center gap-3 mt-3.5 rounded-sm"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cursor-pointer">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

// CategoryPage Component
const CategoryPage = () => {
  const { name } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
     toast.success("Added to cart!",{
          autoClose:1000
        });
    // navigate("/cart");
  };

  const category = CategoryData.find(
    (cat) => cat.name.toLowerCase() === name.toLowerCase()
  );

  if (!category)
    return <p className="text-center mt-10 text-red-500">Category not found</p>;

  return (
    <div className="sm:p-5 px-3 py-2 bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-center text-4xl p-4 font-semibold capitalize text-gray-800">
        {category.name}
      </h1>
      <p className="text-center text-lg mb-6 text-gray-600">{category.category}</p>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-around">
        {category.subcategories.map((item, index) => (
          <Card key={index} product={item} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
