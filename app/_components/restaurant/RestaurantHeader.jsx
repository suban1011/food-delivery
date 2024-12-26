"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri"; // Menu Icon
import { IoCloseSharp } from "react-icons/io5"; // Close Icon

const ResturantHeader = () => {
  const [toogle, setToogle] = useState(false); // State to toggle menu

  return (
    <>
      {/* Header */}
      <nav className="shadow-lg flex items-center justify-between bg-indigo-600 text-white py-2 px-4">
        {/* Logo */}
        <div className="logo text-red-600 font-semibold text-xl">
          Food <span className="text-2xl font-bold text-white">Parcel</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-3 font-semibold">
          <Link href={"/"} className="hover:text-red-600 duration-300 hover">
            Home
          </Link>
          <Link href={"/"} className="hover:text-red-600 duration-300">
            Login/Signup
          </Link>
          <Link href={"/"} className="hover:text-red-600 duration-300">
            Profile
          </Link>
        </ul>

        {/* Toggle Button */}
        {toogle ? (
          " "
        ) : (
          <RiMenu3Fill
            className="md:hidden text-2xl font-semibold cursor-pointer"
            onClick={() => setToogle(true)}
          />
        )}
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed md:hidden top-0 left-0 w-full h-full bg-indigo-600 text-white transition-transform duration-300 ease-in-out z-50 transform ${
          toogle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}

        {toogle ? (
          <IoCloseSharp
            className="absolute top-4 right-4 text-3xl cursor-pointer"
            onClick={() => setToogle(false)}
          />
        ) : (
          ""
        )}

        {/* Menu Items */}
        <ul className="flex flex-col items-center justify-center h-full gap-6 font-semibold">
          <li className="hover:text-red-600 duration-300 hover">
            <Link href={"/"} onClick={() => setToogle(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-red-600 duration-300 hover">
            <Link href={"/"} onClick={() => setToogle(false)}>
              Login/Signup
            </Link>
          </li>
          <li className="hover:text-red-600 duration-300 hover">
            <Link href={"/"} onClick={() => setToogle(false)}>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ResturantHeader;
