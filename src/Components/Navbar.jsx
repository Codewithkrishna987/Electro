import React from 'react'
import { NavLink } from 'react-router'
import  {assets}  from '../assets/assets.js';
const Navbar = () => {
  return (
    <div className="h-[10vh] py-5 flex text-white items-center bg-orange-400 lg:pl-[10vw] md:pl-[7vw] sm:pl-[5vw] pl-4 justify-between pr-[10vw]">
      <p className="font-bold text-3xl">Electro</p>


      <ul className="hidden sm:flex justify-between gap-5">
        <NavLink to="/" className="flex flex-col items-center gap-1 outline-none">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden " />
        </NavLink>
        <NavLink to="/Products" className="flex flex-col items-center gap-1">
          <p>Products</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden " />
        </NavLink>
        <NavLink to="/Categories" className="flex flex-col items-center gap-1">
          <p>Categories</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden " />
        </NavLink>
        <NavLink to="/Categories" className="flex flex-col items-center gap-1">
          <p>Deals</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden " />
        </NavLink>
        <NavLink to="/Categories" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden " />
        </NavLink>
      </ul>

        {/* {/  Yet to make*  */} 
      {/* <SearchBar /> */}

    <div className='relative flex items-center w-6'>
        <img src={assets.cart_icon} className='cursor-pointer' alt="" />
        <p className='absolute rounded-full flex items-center justify-center w-4 h-4 bg-white text-black text-sm bottom-[-3px] right-[-3px]'>1</p>
    </div>

    </div>
  );
}

export default Navbar