import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ForgotPassword() {
  const handleForgotPassword = (e) => {
    e.preventDefault();
    toast.info("An OTP has been sent to your email!");
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-white text-3xl font-extrabold">Forgot Password</p>
          <p className="text-sm text-white opacity-45">
            Please enter your email address to reset your password.
          </p>
        </div>

        {/* Form starts here */}
        <form className="flex flex-col gap-6" onSubmit={handleForgotPassword}>
          <input
            type="email"
            className="bg-transparent p-2 text-white border-white border border-opacity-10 outline-none focus:border-transparent focus:outline-2 focus:outline-blue-400 rounded-md"
            name="email"
            id="email"
            placeholder="Email Address"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 duration-300 font-bold text-white py-2 w-40 rounded-md"
          >
            Reset Password
          </button>
        </form>

        <div className="w-full border-white border border-opacity-20"></div>

        <p className="text-white text-opacity-70">
          Remember your password?&nbsp;{" "}
          <Link className="text-blue-600" to={"/login"}>
            Log in &rarr;
          </Link>
        </p>
      </div>
    </>
  );
}

export default ForgotPassword;
