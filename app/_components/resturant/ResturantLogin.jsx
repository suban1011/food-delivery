import React, { useState } from "react";

const ResturantLogin = ({ setLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="py-8">
        <form action="" onSubmit={handleLogin}>
          <h1 className="text-2xl px-8 font-semibold font font-serif  text-gray-600">
            Login
          </h1>
          <div className="flex flex-col mx-8 gap-3 mt-10">
            <input
              type="email"
              placeholder="Email"
              className="border-2 rounded px-4 py-2 "
            />
            <input
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
