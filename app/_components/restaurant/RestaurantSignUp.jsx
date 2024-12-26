"use client";

import axios from "axios";
import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";

const RestaurantSignUp = ({ setLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setConShowPassword] = useState(false);

  // Form data state
  const [restaurant, setRestaurant] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    city: "",
    address: "",
    restaurantName: "",
    phone: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  // Validation function
  const validateForm = () => {
    const { email, password, cPassword, phone } = restaurant;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning("Invalid email format!", { position: "top-center" });
      return false;
    }

    // Password validation
    if (password.length < 6) {
      toast.warning("Password must be at least 6 characters long!", {
        position: "top-center",
      });
      return false;
    }

    // Confirm password match
    if (password !== cPassword) {
      toast.warning("Passwords do not match!", { position: "top-center" });
      return false;
    }

    // Phone validation (10-15 digits)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      toast.warning("Invalid phone number!", { position: "top-center" });
      return false;
    }

    return true;
  };

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();

    // Validation check
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/restaurant",
        restaurant
      ); // API Call
      if (response.data.message) {
        toast.success(response.data.message, { position: "top-center" });
      }
      if (response.data.warning) {
        toast.warning(response.data.warning, { position: "top-center" });
      }

      // Clear form after success
      if (response.data.success) {
        setRestaurant({
          name: "",
          email: "",
          password: "",
          cPassword: "",
          city: "",
          address: "",
          restaurantName: "",
          phone: "",
        });
        setLogin(true);
      }
    } catch (error) {
      console.error("Registration Failed: ", error);
      toast.error(error.response.data.error, {
        position: "top-center",
      });
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
            {/* Input fields */}
            <input
              required
              name="name"
              value={restaurant.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="border-2 rounded px-4 py-2"
            />
            <input
              required
              name="email"
              value={restaurant.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="border-2 rounded px-4 py-2"
            />
            <input
              required
              name="restaurantName"
              value={restaurant.restaurantName}
              onChange={handleChange}
              type="text"
              placeholder="Restaurant Name"
              className="border-2 rounded px-4 py-2"
            />
            <input
              required
              name="city"
              value={restaurant.city}
              onChange={handleChange}
              type="text"
              placeholder="City"
              className="border-2 rounded px-4 py-2"
            />
            <input
              required
              name="address"
              value={restaurant.address}
              onChange={handleChange}
              type="text"
              placeholder="Full Address"
              className="border-2 rounded px-4 py-2"
            />
            <input
              required
              name="phone"
              value={restaurant.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone Number"
              className="border-2 rounded px-4 py-2"
            />

            {/* Password Field */}
            <div className="relative flex items-center">
              <input
                required
                name="password"
                value={restaurant.password}
                onChange={handleChange}
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
                required
                name="cPassword"
                value={restaurant.cPassword}
                onChange={handleChange}
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

            <button
              type="submit"
              className="bg-indigo-600 text-white px-3 py-2 rounded-md my-2"
            >
              Sign Up
            </button>

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

export default RestaurantSignUp;
