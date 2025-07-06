import React from "react";
import { CategoryData } from "../assets/assets";
import { Link } from "react-router-dom"; // ✅ Import Link

const Category = () => {
  return (
    <div className="py-8 lg:py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Shop by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-3"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover our curated categories for a seamless shopping experience
          </p>
        </div>

        {/* Categories Container */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden lg:flex gap-6 justify-center">
            {CategoryData.map((item) => (
              <Link
                to={`/category/${item.name}`}
                key={item.id}
                className="group cursor-pointer"
              >
                <div className="flex flex-col items-center p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative mb-3">
                    <div className="w-32 h-32 xl:w-36 xl:h-36 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 p-1 group-hover:scale-105 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <img
                          src={item.image}
                          alt={item.name || "Category"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-200">
                    {item.name || "Category"}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile/Tablet Scroll */}
          <div className="lg:hidden">
            <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-none pb-4">
              {CategoryData.map((item) => (
                <Link
                  to={`/category/${item.name}`}
                  key={item.id}
                  className="flex-shrink-0 cursor-pointer group"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative mb-3">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 p-1 group-active:scale-95 transition-transform duration-200 shadow-md">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <img
                            src={item.image}
                            alt={item.name || "Category"}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center max-w-20 sm:max-w-24">
                      {item.name || "Category"}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* Scroll Hint */}
            <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
              <div className="flex space-x-1 mr-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-blue-200 rounded-full"></div>
              </div>
              <span>Swipe for more</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Category;
