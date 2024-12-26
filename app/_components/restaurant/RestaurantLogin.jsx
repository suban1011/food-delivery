"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ResturantLogin = ({ setLogin }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [restaurant, setRestaurant] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("clicked");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/restaurant/login",
        restaurant
      );
      if (response.data.message) {
        toast.success(response.data.message, { position: "top-center" });
        if (response.data.success) {
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
          router.push("/restaurant/dashboard");
        }
      }

      if (response.data.warning) {
        return toast.warning(response.data.warning, { position: "top-center" });
      }
    } catch (error) {
      console.log(error);
      toast.error(error, { position: "top-center" });
    }
  };
  return (
    <>
      <div className="py-2">
        <form action="" onSubmit={handleLogin}>
          <h1 className="text-2xl px-8 font-semibold font font-serif  text-gray-600">
            Login
          </h1>
          <div className="flex flex-col mx-8 gap-3 mt-10">
            <input
              value={restaurant.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              className="border-2 rounded px-4 py-2 "
            />
            <input
              value={restaurant.password}
              onChange={handleChange}
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              className="border-2 rounded px-4 py-2 "
            />
            <div className="flex items-center justify-between px-1 my-1 text-gray-600">
              <div className="space-x-2 flex items-center">
                <input
                  onClick={() => setShowPassword(!showPassword)}
                  type="checkbox"
                  className="text-2xl w-4 h-4"
                />
                <span>Show password</span>
              </div>
              <span className="text-indigo-600">Forget password?</span>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-3 py-2 rounded-md"
            >
              Login
            </button>
            <div className="flex justify-center gap-3">
              <p>Don't have an account?</p>{" "}
              <span
                className="text-indigo-600 cursor-pointer"
                onClick={() => setLogin(false)}
              >
                Sign up
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResturantLogin;
