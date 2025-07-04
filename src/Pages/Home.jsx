import React from "react";
import HeroSlider from "../Components/HeroSlider";
import Category from "../Components/Category";
import { useCart } from "./CartContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaCheckCircle } from "react-icons/fa";

// Sample product data
const newArrivalData = [
  {
    id: 1,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "4899.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    hoverimg: "https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg",
  },
  {
    id: 2,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "4899.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    hoverimg: "https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg",
  },
  {
    id: 3,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "4899.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    hoverimg: "https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg",
  },
  {
    id: 4,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "4899.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    hoverimg: "https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg",
  },
  {
    id: 5,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "4899.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    hoverimg: "https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg",
  },
];

const popularData = [
  {
    id: 6,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "4899.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
  },
  {
    id: 7,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "4899.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
  },
  {
    id: 8,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "4899.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
  },
  {
    id: 9,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "4899.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
  },
  {
    id: 10,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "4899.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
  },
];

const bestSellerData = [
  {
    id: 11,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "101.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
  },
  {
    id: 12,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "101.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
  },
  {
    id: 13,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "101.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
  },
  {
    id: 14,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "101.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
  },
  {
    id: 15,
    title: "productName",
    description: "productfull",
    pricecut: "5500.00",
    price: "101.00",
    img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
  },
];

// Reusable Card component
 export const Card = ({ product, handleAddToCart }) => {
  const { title, description, pricecut, price, img, hoverimg } = product;

  return (
    <div className="w-full border-2 h-auto flex-col rounded-xl overflow-hidden border-zinc-100 shadow-2xl relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="overflow-hidden h-60 relative group">
          <img
            src={img}
            alt={title}
            className="w-full object-cover transition-all duration-1000 ease-in-out opacity-100 group-hover:opacity-0 z-10"
          />
          {hoverimg && (
            <img
              src={hoverimg}
              alt={`${title} Hover`}
              className="w-full h-full object-cover absolute top-0 left-0 transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 z-20"
            />
          )}
        </div>
      </Link>
      <div className="p-5 flex flex-col gap-2">
        <div className="text-gray-500">{title}</div>
        <div className="font-bold line-clamp-1">{description}</div>
        <div className="flex justify-between">
          <p className="line-through text-gray-500">₹{pricecut}</p>
          <p className="text-blue-700 font-semibold">₹{price}</p>
        </div>
        <button
          onClick={() => handleAddToCart(product)}
          className="border-2 w-full border-blue-700 hover:border-black text-blue-700 hover:text-white hover:bg-black p-[6px] flex justify-center items-center gap-3 mt-3.5 rounded-sm cursor-pointer transition-all duration-300"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cursor-pointer">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

// Home component
const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Added to cart!",{
      autoClose:1000
    });
    // navigate("/cart");
  };

  return (
    <>
      <HeroSlider />
      <div className="sm:p-4 px-3 py-2 bg-gradient-to-br from-blue-50 to-white gap-3">
      <Category />

      {/* New Arrivals */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 text-center mt-12">
        New{" "}
        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Arrivals
        </span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4 mb-12"></div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-around">
        {newArrivalData.map((item) => (
          <Card
            key={item.id}
            product={item}
            handleAddToCart={handleAddToCart}
            
          />
        ))}
      </div>

      {/* Popular Products */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 text-center mt-12">
        Most{" "}
        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Popular
        </span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4 mb-12"></div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-around">
        {popularData.map((item) => (
          <Card
            key={item.id}
            product={item}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Best Sellers */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 text-center mt-12">
        Best{" "}
        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Sellers
        </span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-5 mb-12"></div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-around">
        {bestSellerData.map((item) => (
          <Card
            key={item.id}
            product={item}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export { newArrivalData, popularData, bestSellerData };
export default Home;
