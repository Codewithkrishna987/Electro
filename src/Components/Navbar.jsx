import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaRegHeart } from "react-icons/fa";
import { IoHomeOutline, IoReorderThreeOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { LuArrowLeft } from "react-icons/lu";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar.jsx";
import { CgProfile } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import Wishlist from "../Pages/Wishlist.jsx";

const Navbar = () => {
  const [cross, setCross] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div className="flex flex-col text-black bg-white shadow-sm">
      {/* Top banner with gradient background */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 lg:px-[4vw] md:px-[3vw] sm:px-[1vw] px-2 text-sm py-3 justify-between md:inline-flex hidden border-b border-blue-200">
        <p className="text-gray-600 font-medium">
          🎉 Get up to 50% off new season styles, limited time only
        </p>
        <div className="flex gap-6">
          <button className="hover:text-blue-600 cursor-pointer transition-colors duration-200 font-medium">
            Help Center
          </button>
          <button className="hover:text-blue-600 cursor-pointer transition-colors duration-200 font-medium">
            Order Tracking
          </button>
        </div>
      </div>

      {/* Main navbar with enhanced styling */}
      <div className="sm:py-6 py-4 flex items-center lg:px-[4vw] md:px-[3vw] sm:px-[1vw] px-3 justify-between text-black border-b border-gray-200 relative w-full bg-white">
        {/* Enhanced Logo */}
        <div className="flex items-center">
          <p className="font-black text-2xl sm:text-3xl bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent tracking-tight">
            DOORCART
          </p>
          <div className="w-2 h-2 bg-blue-500 rounded-full ml-1 animate-pulse"></div>
        </div>

        {/* Mobile menu button with improved styling */}
        <div className="sm:hidden flex items-center gap-3">
          <motion.div
            whileTap={{ scale: 0.95 }}
            onClick={() => setSearch(!search)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <IoMdSearch className="text-2xl cursor-pointer text-gray-600" />
          </motion.div>

          {/* Enhanced Hamburger */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setCross(!cross)}
            className="z-50 relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <IoReorderThreeOutline
              className={`${
                cross ? "hidden" : ""
              } text-3xl cursor-pointer text-gray-600`}
            />
          </motion.button>

          {/* Enhanced Mobile sliding menu */}
          <div>
            <motion.div
              initial={{ x: 600 }}
              animate={cross ? { x: 0 } : { x: 600 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[100%] max-w-sm z-50 shadow-2xl bg-white backdrop-blur-sm"
            >
              <ul className="flex flex-col h-full">
                {/* Enhanced Close Button */}
                <li
                  className="flex items-center gap-3 bg-gradient-to-r from-gray-50 to-gray-100 py-4 px-6 border-b border-gray-200 cursor-pointer hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-150 transition-all duration-200"
                  onClick={() => setCross(false)}
                >
                  <LuArrowLeft className="text-xl text-gray-700" />
                  <span className="text-lg font-medium text-gray-700">
                    Back
                  </span>
                </li>

                {/* Enhanced Navigation Links */}
                <NavLink to="/" onClick={() => setCross(false)}>
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-white py-4 px-6 border-b border-gray-100 cursor-pointer hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <IoHomeOutline className="text-xl text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                    <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                      Home
                    </span>
                  </motion.li>
                </NavLink>
                <NavLink to="/wishlist">
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-white py-4 px-6 border-b border-gray-100 cursor-pointer hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <FaRegHeart className="text-xl text-gray-600 group-hover:text-red-500 transition-colors duration-200" />
                    <span className="text-lg font-medium text-gray-700 group-hover:text-red-500 transition-colors duration-200">
                      Wishlist
                    </span>
                  </motion.li>
                </NavLink>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 bg-white py-4 px-6 border-b border-gray-100 cursor-pointer hover:bg-blue-50 transition-all duration-200 group"
                >
                  <BsCart2 className="text-xl text-gray-600 group-hover:text-green-600 transition-colors duration-200" />
                  <span className="text-lg font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-200">
                    Cart
                  </span>
                </motion.li>

                <NavLink to="/login" onClick={() => setCross(false)}>
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-white py-4 px-6 border-b border-gray-100 cursor-pointer hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <CgProfile className="text-xl text-gray-600 group-hover:text-purple-600 transition-colors duration-200" />
                    <span className="text-lg font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-200">
                      My Profile
                    </span>
                  </motion.li>
                </NavLink>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Search bar */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Enhanced Desktop menu items */}
        <div className="sm:block hidden text-gray-700 items-center gap-6">
          <div className="gap-3 flex">
            <NavLink to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="sm:flex hover:bg-blue-100 hover:shadow-md rounded-full p-3 cursor-pointer hidden transition-all duration-200 group"
              >
                <IoHomeOutline className="text-2xl text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
              </motion.div>
            </NavLink>

            <NavLink to="/login">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="sm:flex hover:bg-purple-100 hover:shadow-md rounded-full p-3 cursor-pointer hidden transition-all duration-200 group"
              >
                <CgProfile className="text-2xl text-gray-600 group-hover:text-purple-600 transition-colors duration-200" />
              </motion.div>
            </NavLink>
            <NavLink to='/wishlist'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="sm:flex hover:bg-red-100 hover:shadow-md rounded-full p-3 cursor-pointer hidden transition-all duration-200 group"
              >
                <FaRegHeart className="text-2xl text-gray-600 group-hover:text-red-500 transition-colors duration-200" />
              </motion.div>
            </NavLink>
            <NavLink to="/cart">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="sm:flex hover:bg-green-100 hover:shadow-md rounded-full p-3 cursor-pointer hidden transition-all duration-200 group relative"
              >
                <BsCart2 className="text-2xl text-gray-600 group-hover:text-green-600 transition-colors duration-200" />
                {/* Optional cart badge */}
                {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span> */}
              </motion.div>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile search bar */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          search ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className={`border-b border-gray-200 ${
          search ? "block" : "hidden"
        } bg-gray-50 px-4 py-3 sm:hidden`}
      >
        <SearchBar />
      </motion.div>


      
    </div>
  );
};

export default Navbar;
