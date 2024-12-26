"use client";
import React, { useState } from "react";
import ResturantLogin from "../_components/restaurant/RestaurantLogin";
import ResturantSignUp from "../_components/restaurant/RestaurantSignUp";
import ResturantHeader from "../_components/restaurant/RestaurantHeader";
import ResturantFooter from "../_components/restaurant/RestaurantFooter";

const Resturant = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="max-w-full mx-auto">
      <ResturantHeader />
      

      <div className="max-w-[1280px] mx-auto  ">
        <div className="max-w-md mx-auto shadow-lg rounded-lg py-10 mt-10 bg-white">
          {login ? (
            <ResturantLogin setLogin={setLogin} />
          ) : (
            <ResturantSignUp setLogin={setLogin} />
          )}
        </div>
      </div>
      <ResturantFooter/>
    </div>
    
  );
};

export default Resturant;
