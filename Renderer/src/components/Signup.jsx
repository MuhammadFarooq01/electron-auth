import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    toast.success("Signup successful!");
    navigate("/dashboard");
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-white text-3xl font-extrabold">
            Set up your account
          </p>
          <p className="text-sm text-white opacity-45">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
            molestias. Earum
            <br /> exercitationem, explicabo eius
          </p>
        </div>

        {/* form starts here */}
        <form className="flex flex-col gap-6" onSubmit={handleSignup}>
          <input
            type="text"
            className="w-full bg-transparent p-2 text-white border-white border border-opacity-10 outline-none focus:border-transparent focus:outline-2 focus:outline-blue-400 rounded-md"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="bg-transparent p-2 text-white border-white border border-opacity-10 outline-none focus:border-transparent focus:outline-2 focus:outline-blue-400 rounded-md"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="bg-transparent p-2 text-white border-white border border-opacity-10 outline-none focus:border-transparent focus:outline-2 focus:outline-blue-400 rounded-md"
            placeholder="Password"
          />
          <input
            type="password"
            className="bg-transparent p-2 text-white border-white border border-opacity-10 outline-none focus:border-transparent focus:outline-2 focus:outline-blue-400 rounded-md"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 duration-300 font-bold text-white py-2 w-40 rounded-md"
          >
            Continue
          </button>
        </form>
        <div className="w-full border-white border border-opacity-20"></div>
        <p className="text-white text-opacity-70">
          Already have an account?&nbsp;
          <Link className="text-blue-600" to={"/login"}>
            Sign in &rarr;
          </Link>
        </p>
      </div>
    </>
  );
}

export default Signup;
