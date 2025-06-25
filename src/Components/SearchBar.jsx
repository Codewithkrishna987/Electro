import React from 'react'
import {IoIosSearch} from 'react-icons/io'

const SearchBar = () => {
  return (
    <div className="p-2 rounded-sm sm:w-130 w-[100%] bg-gray-300 flex">
      <input
        type="text"
        className="flex-1 outline-none"
        placeholder="Search Your Product"
      />
      <div className="flex">
        <IoIosSearch className="h-full cursor-pointer hover:bg-gray-400 rounded-full w-8 p-1" />
      </div>
    </div>
  );
}

export default SearchBar