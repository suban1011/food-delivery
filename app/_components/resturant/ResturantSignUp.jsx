"use client";
import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { registerResturant } from "@/app/services/resturantServices"; // Ensure this service function exists!

const ResturantSignUp = ({ setLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setConShowPassword] = useState(false);

  // Form data state
  const [resturant, setResturant] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    city: "",
    address: "",
    resturantName: "",
    phone: "",
  });

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();

    // Validation
    if (resturant.password !== resturant.cPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form Data: ", resturant);

    try {
      const response = await registerResturant(resturant); // API Call
      console.log("Response: ", response);
      alert("Registration Successful!");
    } catch (error) {
      console.error("Registration Failed: ", error);
      alert("Registration Failed!");
    }
  };

  return (
    <>
      <div className="py-2">
        <form onSubmit={handleRegister}>
          <h1 className="text-2xl px-8 font-semibold font-serif text-gray-600">
            Registration
          </h1>
          <div className="flex flex-col mx-8 gap-3 mt-10">
            {/* Inputs */}
            <input
              value={resturant.name}
              onChange={(e) =>
                setResturant({ ...resturant, name: e.target.value })
              }
              type="text"
              placeholder="Name"
              className="border-2 rounded px-4 py-2"
            />
            <input
              value={resturant.email}
              onChange={(e) =>
                setResturant({ ...resturant, email: e.target.value })
              }
              type="email"
              placeholder="Email"
              className="border-2 rounded px-4 py-2"
            />
            <input
              value={resturant.resturantName}
              onChange={(e) =>
                setResturant({ ...resturant, resturantName: e.target.value })
              }
              type="text"
              placeholder="Restaurant Name"
              className="border-2 rounded px-4 py-2"
            />
            <input
              value={resturant.city}
              onChange={(e) =>
                setResturant({ ...resturant, city: e.target.value })
              }
              type="text"
              placeholder="City"
              className="border-2 rounded px-4 py-2"
            />
            <input
              value={resturant.address}
              onChange={(e) =>
                setResturant({ ...resturant, address: e.target.value })
              }
              type="text"
              placeholder="Full Address"
              className="border-2 rounded px-4 py-2"
            />
            <input
              value={resturant.phone}
              onChange={(e) =>
                setResturant({ ...resturant, phone: e.target.value })
              }
              type="number"
              placeholder="Phone Number"
              className="border-2 rounded px-4 py-2"
            />

            {/* Password Field */}
            <div className="relative flex items-center">
              <input
                value={resturant.password}
                onChange={(e) =>
                  setResturant({ ...resturant, password: e.target.value })
                }
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border-2 rounded px-4 py-2 w-full pr-10"
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

            {/* Confirm Password Field */}
            <div className="relative flex items-center">
              <input
                value={resturant.cPassword}
                onChange={(e) =>
                  setResturant({ ...resturant, cPassword: e.target.value })
                }
                type={showConfPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="border-2 rounded px-4 py-2 w-full pr-10"
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

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-indigo-600 text-white px-3 py-2 rounded-md my-2"
            >
              Sign Up
            </button>

            {/* Already Registered */}
            <div className="flex justify-center gap-3">
              <p>Already registered?</p>
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
