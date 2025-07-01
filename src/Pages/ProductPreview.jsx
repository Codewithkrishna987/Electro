import React, { use } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Heart, Star, ShoppingCart, Shield, RotateCcw, Truck } from "lucide-react";
import { newArrivalData , popularData , bestSellerData } from "./Home";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
// Mock data - replace with your actual imports


const ProductPreview = () => {
  // Mock useParams - replace with actual useParams() hook
  const navigate = useNavigate();
  const { addToCart } = useCart(); ;
  const { id } = useParams();
  const fullData = [...newArrivalData, ...popularData, ...bestSellerData];
  const product = fullData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const discount = Math.round(
    ((product.pricecut - product.price) / product.pricecut) * 100
  );

  return (
    <div className="sm:px-6 py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg p-">
        <div className="flex sm:flex-row flex-col gap-8">
          {/* Image Section - Enhanced */}
          <div className="w-full sm:w-1/2 flex-1  relative">
            <div className="relative bg-gray-100 rounded-2xl p-6 group overflow-hidden">
              <img
                className="h-full min-h-96 max-h-[480px] w-full object-contain transition-transform duration-500 group-hover:scale-105"
                src={product.img}
                alt={product.title}
              />
              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
              </button>
              {/* Discount Badge */}
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                  {discount}% OFF
                </div>
              )}
            </div>
          </div>

          {/* Product Details Section - Enhanced */}
          <div className="w-full sm:w-1/2 space-y-6 p-2">
            {/* Title with better typography */}
            <div>
              <h2 className="text-black text-3xl font-bold leading-tight mb-3">
                {product.title}
              </h2>

              {/* Rating Section */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-blue-400 text-blue-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.5) 128 reviews</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  In Stock
                </span>
              </div>
            </div>

            {/* Enhanced Price Section */}
            <div className="bg-gray-50 rounded-xl p-">
              <p className="text-2xl flex items-center gap-3 font-bold">
                <span className="relative text-gray-500 text-lg">
                  ₹{product.pricecut.toLocaleString()}
                  <span className="absolute inset-0 border-t border-gray-400 transform rotate-12 top-1/2"></span>
                </span>
                <span className="text-blue-600">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="whitespace-nowrap text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-normal">
                  Save ₹{(product.pricecut - product.price).toLocaleString()}
                </span>
              </p>
            </div>

            {/* Enhanced Description */}
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-gray-700 leading-relaxed">
                Experience premium quality with this carefully crafted product.
                Designed for comfort, durability, and style, it offers
                exceptional value and performance that exceeds expectations.
                Perfect for daily use with modern features and elegant design.
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex gap-4 sm:items-center sm:flex-row flex-col w">
              <button className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl cursor-pointer text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold" onClick={() => {
                addToCart(product)
                navigate("/cart")
                alert('Product added succesfully')
                }}>
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="flex-1 py-4 px-6 rounded-xl cursor-pointer text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                Buy Now
              </button>
            </div>

            {/* Enhanced Features Section */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                <Shield className="w-6 h-6 text-green-600" />
                <p className="text-green-800 font-medium">
                  100% original product with warranty
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                <RotateCcw className="w-6 h-6 text-blue-600" />
                <p className="text-blue-800 font-medium">
                  Easy return and exchange policy within 7 days
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                <Truck className="w-6 h-6 text-purple-600" />
                <p className="text-purple-800 font-medium">
                  Cash on delivery is available on this product
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
