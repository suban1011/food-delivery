"use client";
import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const ResturantSignUp = ({ setLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setConShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="py-8">
        <form action="" onSubmit={handleRegister}>
          <h1 className="text-2xl px-8 font-semibold font font-serif  text-gray-600">
            Resgistration
          </h1>
          <div className="flex flex-col mx-8 gap-3 mt-10">
            <input
              type="name"
              placeholder="Name"
              className="border-2 rounded px-4 py-2 "
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 rounded px-4 py-2 "
            />
            <input
              type="text"
              placeholder="Resturant Name"
              className="border-2 rounded px-4 py-2 "
            />
            <input
              type="text"
              placeholder="Enter City"
              className="border-2 rounded px-4 py-2 "
            />
            <input
              type="text"
              placeholder="Enter full address"
              className="border-2 rounded px-4 py-2 "
            />
            <input
              type="number"
              placeholder="Contact no."
              className="border-2 rounded px-4 py-2 "
            />
            <div className="relative flex items-center">
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Password"
                className="border-2 rounded px-4 py-2 w-full pr-10" // Add padding-right for space
              />
              {showPassword ? (
                <FaEye
                  className="absolute right-3 text-2xl text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-3 text-2xl text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <div className="relative flex items-center">
              <input
                type={`${showConfPassword ? "text" : "password"}`}
                placeholder="Confirm Password"
                className="border-2 rounded px-4 py-2 w-full pr-10" // Add padding-right for space
              />
              {showConfPassword ? (
                <FaEye
                  className="absolute right-3 text-2xl text-gray-500 cursor-pointer"
                  onClick={() => setConShowPassword(false)}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-3 text-2xl text-gray-500 cursor-pointer"
                  onClick={() => setConShowPassword(true)}
                />
              )}
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-3 py-2 rounded-md my-2"
            >
              Login
            </button>
            <div className="flex justify-center gap-3">
              <p>Already registered?</p>{" "}
              <span
                className="text-indigo-600 cursor-pointer"
                onClick={() => setLogin(true)}
              >
                Login
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResturantSignUp;
