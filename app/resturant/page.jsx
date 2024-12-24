"use client";
import React, { useState } from "react";
import ResturantLogin from "../_components/resturant/ResturantLogin";
import ResturantSignUp from "../_components/resturant/ResturantSignUp";
import ResturantHeader from "../_components/resturant/ResturantHeader";
import ResturantFooter from "../_components/resturant/ResturantFooter";

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
