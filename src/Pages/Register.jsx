import React from 'react'
import { Link } from 'react-router';
export const Register = () => {
  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700">
      <h1 className="text-center inline-flex mt-10 mb-2 text-3xl tracking-tighter">
        <span className="text-blue-400">Sign </span> <span>Up</span>
      </h1>
      <input
        type="text"
        className="w-full px-3 py-2 border border-blue-400"
        placeholder="Username"
      />
      <input
        type="email"
        className="w-full px-3 py-2 border border-blue-400"
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-blue-400"
        placeholder="Password"
      />
      <div className="flex justify-between w-full text-sm mt-[-8px] font-semibold text-blue-400">
        <p className="hover:text-gray-500 cursor-pointer">
          Forgot you password ?
        </p>
        <Link to='/login'>
          <p className="hover:text-gray-500 cursor-pointer">Login here</p>
        </Link>
      </div>
      <button className="mt-5 border w-full py-1 text-lg rounded-lg text-blue-400  hover:text-white cursor-pointer">
        Register
      </button>
    </form>
  );
}
