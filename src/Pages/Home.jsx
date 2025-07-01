import React from "react";
import HeroSlider from "../Components/HeroSlider";
import Category from "../Components/Category";
import { useCart } from "./CartContext";
import { useNavigate, Link } from "react-router-dom";
// import { Link } from "react-router-dom";

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
const Card = ({ product, handleAddToCart }) => {
  const { title, description, pricecut, price, img, hoverimg } = product;

  return (
    
  <div className="w-68 border-2 h-auto flex-col rounded-xl overflow-hidden border-zinc-100 shadow-2xl relative">
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
        <div className="font-bold">{description}</div>
        <div className="flex justify-between">
          <p className="line-through text-gray-500">₹{pricecut}</p>
          <p className="text-blue-700 font-semibold">₹{price}</p>
        </div>
        <button
          onClick={() => handleAddToCart(product)}
          className="border-2 w-full border-blue-700 hover:border-none text-blue-700 hover:text-white hover:bg-black p-1.5 flex justify-center items-center gap-3 mt-3.5 rounded-sm"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Add to cart</span>
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
    navigate("/cart");
  };

  return (
    <>
      <HeroSlider />
      <div className="sm:p-5 px-3 py-2 bg-gradient-to-br from-blue-50 to-white">
        <Category />

        {/* New Arrivals */}
        <h1 className="text-center text-5xl p-4 font-semibold text-gray-800">New Arrivals</h1>
        <div className="flex flex-wrap gap-4 justify-around">
          {newArrivalData.map((item) => (
            <Card key={item.id} product={item} handleAddToCart={handleAddToCart} />
          ))}
        </div>

        {/* Popular */}
        <h1 className="text-center text-5xl p-4 font-semibold text-gray-800">Popular This Week</h1>
        <div className="flex flex-wrap gap-4 justify-around">
          {popularData.map((item) => (
            <Card key={item.id} product={item} handleAddToCart={handleAddToCart} />
          ))}
        </div>

        {/* Best Sellers */}
        <h1 className="text-center text-5xl p-4 font-semibold text-gray-800">BEST SELLER</h1>
        <div className="flex flex-wrap gap-4 justify-around">
          {bestSellerData.map((item) => (
            <Card key={item.id} product={item} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </>
  );
};
export {newArrivalData, popularData,bestSellerData};
export default Home;
