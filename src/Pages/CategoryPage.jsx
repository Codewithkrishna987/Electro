import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CategoryData } from "../assets/assets";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";

// Card Component
const Card = ({ product, handleAddToCart, isLoading = false }) => {
  const { img, hoverimg, title, description, Pricecut, price } = product;
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = useMemo(() => {
    if (Pricecut && price) {
      return Math.round(((Pricecut - price) / Pricecut) * 100);
    }
    return 0;
  }, [Pricecut, price]);

  return (
    <div className="w-full border border-gray-200 h-auto flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative bg-white">
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
          {discount}% OFF
        </div>
      )}

      <div
        className="overflow-hidden h-60 relative bg-gray-50 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imageError ? "/placeholder-image.jpg" : img}
          alt={title}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            isHovered && hoverimg ? "opacity-0" : "opacity-100"
          }`}
          onError={() => setImageError(true)}
          loading="lazy"
        />
        {hoverimg && (
          <img
            src={hoverimg}
            alt={`${title} hover`}
            className={`w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
        )}
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-gray-800 text-lg capitalize font-semibold line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2 min-h-[2.5rem]">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Pricecut && (
              <span className="text-gray-400 line-through text-sm">
                ₹{Pricecut.toLocaleString()}
              </span>
            )}
            <span className="text-blue-700 font-bold text-lg">
              ₹{price.toLocaleString()}
            </span>
          </div>
        </div>

        <button
          onClick={() => handleAddToCart(product)}
          disabled={isLoading}
          className="border-2 w-full border-blue-700 hover:border-blue-800 text-blue-700 hover:text-white hover:bg-blue-700 p-2.5 flex justify-center items-center gap-2 mt-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7M17 13v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8.4M9 9h6v4H9V9z"
            />
          </svg>
          <span>{isLoading ? "Adding..." : "Add to Cart"}</span>
        </button>
      </div>
    </div>
  );
};

// CategoryPage Component
const CategoryPage = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const { name } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Find the current category
  const category = useMemo(() => {
    return CategoryData.find(
      (cat) => cat.name.toLowerCase() === name?.toLowerCase()
    );
  }, [name]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    if (!category?.subcategories) return [];

    let products = [...category.subcategories];

    // Apply price filter
    products = products.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        products.sort((a, b) => b.price - a.price);
        break;
      case "name":
        products.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    return products;
  }, [category, sortBy, priceRange]);

  // Get price range for the category
  const categoryPriceRange = useMemo(() => {
    if (!category?.subcategories) return { min: 0, max: 100000 };

    const prices = category.subcategories.map((item) => item.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, [category]);

  // Initialize price range when category changes
  useEffect(() => {
    if (categoryPriceRange.min !== 0 || categoryPriceRange.max !== 100000) {
      setPriceRange(categoryPriceRange);
    }
  }, [categoryPriceRange]);

  const handleAddToCart = async (product) => {
    setIsLoading(true);
    try {
      await addToCart(product);
      toast.success(`${product.title} added to cart!`, {
        autoClose: 2000,
        position: "top-right",
      });
    } catch (error) {
      toast.error("Failed to add item to cart. Please try again.", {
        autoClose: 3000,
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryChange = (categoryName) => {
    if (category?.name !== categoryName) {
      navigate(`/category/${categoryName}`);
      setShowMobileFilters(false);
    }
  };

  const resetFilters = () => {
    setSortBy("default");
    setPriceRange(categoryPriceRange);
    setShowMobileFilters(false);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Category Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          The category you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-6">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md border hover:shadow-lg transition-shadow"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <span>Filters & Sort</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div
            className={`lg:w-64 w-full ${
              showMobileFilters ? "block" : "hidden"
            } lg:block`}
          >
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6 ">
              {/* Mobile Close Button */}
              <div className="lg:hidden flex justify-between items-center mb-4 pb-4 border-b">
                <h3 className="font-bold text-gray-800">Filters</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <button
                  onClick={toggleCategories}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-800 mb-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span>Categories</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isCategoriesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isCategoriesOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-1 max-h-60 overflow-y-auto">
                    {CategoryData.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <input
                          type="radio"
                          name="category"
                          className="cursor-pointer accent-blue-600"
                          checked={category.name === item.name}
                          onChange={() => handleCategoryChange(item.name)}
                        />
                        <span className="text-gray-700 text-sm">
                          {item.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sort Options */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Sort by
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Price Range
                </label>
                <div className="space-y-3">
                  <input
                    type="range"
                    min={categoryPriceRange.min}
                    max={categoryPriceRange.max}
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange((prev) => ({
                        ...prev,
                        max: Number(e.target.value),
                      }))
                    }
                    className="w-full accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>₹{categoryPriceRange.min.toLocaleString()}</span>
                    <span>₹{priceRange.max.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={resetFilters}
                className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-scroll">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4 capitalize">
                {category.name}
              </h1>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Showing {filteredAndSortedProducts.length} of{" "}
                  {category.subcategories.length} products
                </p>
                <div className="hidden sm:block text-sm text-gray-500">
                  {category.category}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedProducts.map((item, index) => (
                  <Card
                    key={`${item.id || index}-${item.title}`}
                    product={item}
                    handleAddToCart={handleAddToCart}
                    isLoading={isLoading}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-md">
                <div className="max-w-md mx-auto">
                  <svg
                    className="w-16 h-16 mx-auto text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.004-5.824-2.412M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    No Products Found
                  </h3>
                  <p className="text-gray-500 mb-4">
                    No products match your current filters.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
