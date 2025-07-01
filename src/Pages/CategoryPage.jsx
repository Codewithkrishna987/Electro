import React from 'react';
import { CategoryData } from '../assets/assets';
import { useParams } from 'react-router-dom';

const CategoryPage = ({ handleAddToCart }) => {
  const { name } = useParams();

  const category = CategoryData.find(
    (cat) => cat.name.toLowerCase() === name.toLowerCase()
  );

  if (!category) return <p className="text-center mt-10 text-red-500">Category not found</p>;

  return (
    <div className="sm:p-5 px-3 py-2 bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-center text-4xl p-4 font-semibold capitalize text-gray-800">
        {category.name}
      </h1>
      <p className="text-center text-lg mb-6 text-gray-600">{category.category}</p>

      <div className="flex flex-wrap gap-4 justify-around">
        {category.subcategories.map((item, index) => (
          <div key={index} className="w-72 border-2 h-auto flex-col rounded-xl overflow-hidden border-zinc-100 shadow-2xl relative bg-white">
            <div className="p-5 flex flex-col gap-2">
              <div className="font-bold text-lg">{item.productName}</div>
              <p className="text-gray-600">Min Price: ₹{item.minPrice}</p>
              <p className="text-sm text-gray-400">Editor: {item.editor}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 mt-2 underline"
                >
                  View Product
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
