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
const Navbar = () => {
  const [cross, setCross] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [search , setSearch] = useState(false)

  return (
    <div className="flex flex-col text-black">
      {/* Top banner */}
      <div className="lg:px-[4vw] md:px-[3vw] sm:px-[1vw] px-2 text-sm py-2 justify-between md:inline-flex hidden border-b border-gray-300">
        <p className="text-gray-500">
          Get up to 50% off new season styles, limited time only
        </p>
        <div className="flex gap-4">
          <button className="hover:text-blue-400 cursor-pointer">
            Help Center
          </button>
          <button className="hover:text-blue-400 cursor-pointer">
            Order Tracking
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <div className="sm:py-5 py-3 flex items-center lg:px-[4vw] md:px-[3vw] sm:px-[1vw] px-3 justify-between text-black border-b border-gray-300 relative w-full">
        {/* Logo */}
        <p className="font-bold text-2xl sm:text-3xl text-blue-400">DOORCART</p>

        {/* Mobile menu button */}
        <div className={`sm:hidden flex items-center gap-2`}>
          <div
            onClick={() => {
              setSearch(!search);
            }}
          >
            <IoMdSearch className="text-2xl cursor-pointer" />

          </div>
          {/* Hambergor */}
          <button onClick={() => setCross(!cross)} className="z-50 relative">
            <IoReorderThreeOutline
              className={`${cross ? "hidden" : ""} text-3xl cursor-pointer`}
            />
          </button>

          {/* Mobile sliding menu */}

          <div>
            <motion.div
              initial={{ x: 600 }}
              animate={cross ? { x: 0 } : { x: 600 }}
              transition={{ type: "tween", duration: 0.3 }}
              className={`fixed top-0 right-0 h-full w-[100%] max-w-sm  z-50 shadow-lg bg-gray-300`}
            >
              <ul className="flex flex-col h-full">
                {/* Close Button */}
                <li
                  className="flex items-center gap-2 bg-gray-300 py-3 px-4 border-b border-gray-600 cursor-pointer hover:bg-gray-400"
                  onClick={() => setCross(false)}
                >
                  <LuArrowLeft className="text-xl text-black" />
                  <span className="text-xl">Back</span>
                </li>

                {/* Navigation Links */}
                <NavLink to="/" onClick={() => setCross(false)}>
                  <li className="flex items-center gap-2 bg-gray-300 py-3 px-4 border-b border-gray-600 cursor-pointer hover:bg-gray-400">
                    <IoHomeOutline className="text-xl text-black" /> Home
                  </li>
                </NavLink>

                <li className="flex items-center gap-2 bg-gray-300 py-3 px-4 border-b border-gray-600 cursor-pointer hover:bg-gray-400">
                  <FaRegHeart className="text-xl text-black" />
                  <span className="text-xl">Wishlist</span>
                </li>

                <li className="flex items-center gap-2 bg-gray-300 py-3 px-4 border-b border-gray-600 cursor-pointer hover:bg-gray-400">
                  <BsCart2 className="text-xl text-black" />
                  <span className="text-xl">Cart</span>
                </li>

                <NavLink to="/login" onClick={() => setCross(false)}>
                  <li className="flex items-center gap-2 bg-gray-300 py-3 px-4 border-b border-gray-600 cursor-pointer hover:bg-gray-400">
                    <CgProfile className="text-xl text-black" />
                    <span className="text-xl">My Profile</span>
                  </li>
                </NavLink>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Search bar */}
        <div className="hidden sm:block ">
          <SearchBar />
        </div>

        {/* Desktop menu items */}
        <div className="sm:block hidden text-gray-700 items-center gap-6">
          <div className="gap-2 flex">
            <NavLink to="/">
              <div className="sm:flex hover:bg-gray-300 rounded-full p-2 cursor-pointer hidden">
                <IoHomeOutline className="text-2xl text-gray-600" />
              </div>
            </NavLink>
            <NavLink to="/login">
              <div className="sm:flex hover:bg-gray-300 rounded-full p-2 cursor-pointer hidden">
                <CgProfile className="text-2xl text-gray-600" />
              </div>
            </NavLink>
            <div className="sm:flex hover:bg-gray-300 rounded-full p-2 cursor-pointer hidden">
              <FaRegHeart className="text-2xl text-gray-600" />
            </div>
            <NavLink to="/cart">
              <div className="sm:flex hover:bg-gray-300 rounded-full p-2 cursor-pointer hidden">
                <BsCart2 className="text-2xl text-gray-600" />
              </div>
            </NavLink>
          </div>
        </div>

        {/* Mobile search bar */}
        {/* <div className="sm:hidden inline-flex px-3 py-2 border-b border-gray-300"> */}
        {/* <SearchBar /> */}
        {/* </div> */}
      </div>

      <div className={`border-b ${search ? "block" : "hidden"} flex justify-around px-10`}>
        {console.log('Opened SearchBar')}
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
