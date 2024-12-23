"use client";
import React, { useState } from "react";
import ResturantLogin from "../_components/resturant/ResturantLogin";
import ResturantSignUp from "../_components/resturant/ResturantSignUp";

const Resturant = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <div className="max-w-[1280px] mx-auto border border-black ">
        <div className="max-w-md mx-auto shadow-lg rounded-lg py-10 mt-10 bg-white">
          {login ? (
            <ResturantLogin setLogin={setLogin} />
          ) : (
            <ResturantSignUp setLogin={setLogin} />
          )}
        </div>
      </div>
    </>
    // <div className="h-screen flex items-center justify-center bg-gray-50 ">
    //   <div className="max-w-[1280px] w-full md:w-[500px] mx-auto rounded-lg  shadow-xl">
    //     {/* Tab Buttons with Smooth Transition */}
    //     <div className="flex justify-between bg-gray-100 text-white w-full rounded-lg shadow-md ">
    //       <div
    //         className={`w-full cursor-pointer text-xl text-center p-2 rounded-lg transition-all duration-300 ease-in-out transform ${
    //           !login
    //             ? "bg-black text-white scale-105 shadow-lg"
    //             : "bg-transparent text-black"
    //         }`}
    //         onClick={() => setLogin(false)}
    //       >
    //         Register
    //       </div>
    //       <div
    //         className={`w-full cursor-pointer text-xl text-center p-2 rounded-lg transition-all duration-300 ease-in-out transform ${
    //           login
    //             ? "bg-black text-white scale-105 shadow-lg"
    //             : "bg-transparent text-black"
    //         }`}
    //         onClick={() => setLogin(true)}
    //       >
    //         Login
    //       </div>
    //     </div>

    //     {/* Smooth Transition for Forms */}

    //     <div className=" mt-4 ">
    //       {/* Login Form */}
    //       <div
    //         className={` inset-0 transition-all duration-500 ease-in-out transform ${
    //           login
    //             ? "translate-x-0 opacity-100 scale-100"
    //             : "translate-x-full opacity-0 scale-95"
    //         }`}
    //       >
    //         <ResturantLogin />
    //       </div>

    //       {/* Signup Form */}
    //       <div
    //         className={` inset-0 transition-all duration-500 ease-in-out transform ${
    //           login
    //             ? "-translate-x-full opacity-0 scale-95"
    //             : "translate-x-0 opacity-100 scale-100"
    //         }`}
    //       >
    //         <ResturantSignUp />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Resturant;
