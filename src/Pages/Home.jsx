<<<<<<< HEAD
  import React from "react";
  import Category from "../Components/Category";
  import { CategoryData } from "../assets/assets.js";
    // newArrival data 
  const newArrivalData = [
    {
      id: 1,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
      hoverimg:"https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg",
    },
    {
      id: 2,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
      hoverimg:"https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg",
    },
    {
      id: 3,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
      hoverimg:"https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg",
    },
    {
      id: 4,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
      hoverimg:"https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg",
    },
    {
      id: 5,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
      hoverimg:"https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg",
    },
  ];

  // popular data

  const popularData = [
    {
      id: 1,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    },
    {
      id: 2,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    },
    {
      id: 3,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    },
    {
      id: 4,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    },
    {
      id: 5,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    },
  ];
  // bestsellerData
  const bestSellerData = [
    {
      id: 1,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    },
    {
      id: 2,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    },
    {
      id: 3,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    },
    {
      id: 4,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    },
    {
      id: 5,
      title: "productName",
      description: "productfull",
      pricecut: "5500.00",
      price: "4899.00",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    },
  ]; 




  const Card = ({ title, description, pricecut, price, img, hoverimg }) => {
    return (
      <div className=" w-68 border-2 h-auto flex-col rounded-xl overflow-hidden border-zinc-100 shadow-2xl relative">
        <div className="overflow-hidden h-60 relative group">
          <img src={img} alt={title} className="w-full object-cover transition-all duration-1000 ease-in-out opacity-100  group-hover:opacity-0 z-10"/>
            {hoverimg && (
            <img
              src={hoverimg}
              alt={`${title} Hover`}
              className="w-full h-full object-cover absolute top-0 left-0 transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 z-20"
            />
          )}
        </div>

        <div className="p-5 flex flex-col gap-2">
          <div className="text-gray-500">{title}</div>
          <div className="font-bold">{description}</div>

          {/* rating stars */}

          <div className="flex justify-between">
            <p className="line-through text-gray-500">₹{pricecut}</p>
            <p className="text-blue-700 font-semibold">₹{price}</p>
          </div>
          <button className="border-2 w-full border-blue-700 hover:border-none text-blue-700 hover:text-white hover:bg-black cursor-pointer p-1.5 flex justify-center items-center gap-3 mt-3.5 rounded-sm"><i class="fa-solid fa-cart-shopping "></i><span>Add to cart</span></button>
=======
import React from "react";
import HeroSlider from "../Components/HeroSlider";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

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
  // ... more items
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
  // ... more items
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
  // ... more items
];

const Card = ({ product, handleAddToCart }) => {
  const { title, description, pricecut, price, img, hoverimg } = product;
  return (
    <div className="w-68 border-2 h-auto flex-col rounded-xl overflow-hidden border-zinc-100 shadow-2xl relative">
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
      <div className="p-5 ">
        <h1 className="text-center text-5xl p-4 font-semibold text-gray-800">New Arrivals</h1>
        <div className="flex flex-wrap gap-4 justify-around">
          {newArrivalData.map((item) => (
            <Card key={item.id} product={item} handleAddToCart={handleAddToCart} />
          ))}
        </div>

        <h1 className="text-center text-5xl p-4 font-semibold text-gray-800">Popular This Week</h1>
        <div className="flex flex-wrap gap-4 justify-around">
          {popularData.map((item) => (
            <Card key={item.id} product={item} handleAddToCart={handleAddToCart} />
          ))}
        </div>

        <h1 className="text-center text-5xl p-4 font-semibold text-gray-800">BEST SELLER</h1>
        <div className="flex flex-wrap gap-4 justify-around">
          {bestSellerData.map((item) => (
            <Card key={item.id} product={item} handleAddToCart={handleAddToCart} />
          ))}
>>>>>>> 799ab2e (adding cart component)
        </div>

      </div>
<<<<<<< HEAD
    );
  };

  const Home = () => {
    return (
      <>
        <div className="sm:p-5 px-3 py-2 bg-gradient-to-br from-blue-50 to-white">
          {/* Category */}
          <Category />

          {/* NewArrivalData */}
          <h1 className="text-center text-5xl p-4 font-semibold text-gray-800">
            New Arrivals
          </h1>
          <div className="flex flex-wrap gap-4 justify-around">
            {newArrivalData.map((item) => (
              <Card
                key={item.id}
                img={item.img}
                hoverimg={item.hoverimg}
                title={item.title}
                description={item.description}
                pricecut={item.pricecut}
                price={item.price}
              />
            ))}
          </div>

          {/* popularData */}
          <h1 className="text-center text-5xl p-4 font-semibold text-gray-800">
            Popular This Week
          </h1>
          <div className="flex flex-wrap gap-4 justify-around">
            {popularData.map((item) => (
              <Card
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                pricecut={item.pricecut}
                price={item.price}
              />
            ))}
          </div>

          {/* BestSellerData */}

          <h1 className="text-center text-5xl p-4 font-semibold text-gray-800">
            BEST SELLER
          </h1>
          <div className="flex flex-wrap gap-4 justify-around">
            {bestSellerData.map((item) => (
              <Card
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                pricecut={item.pricecut}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </>
    );
  };
  export default Home;
=======
    </>
  );
};

export default Home;
>>>>>>> 799ab2e (adding cart component)
