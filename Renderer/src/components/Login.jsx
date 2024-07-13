import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      toast.success("Login successfully!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid username or password!");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-white text-3xl font-extrabold">Welcome back</p>
          <p className="text-sm text-white opacity-45">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
            molestias. Earum
            <br /> exercitationem, explicabo eius
          </p>
        </div>

        {/* form starts here */}
        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <input
            type="email"
            className="bg-transparent p-2 text-white border-white border border-opacity-10 outline-none focus:border-transparent focus:outline-2 focus:outline-blue-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <div className="flex flex-col">
            <input
              type="password"
              className="bg-transparent p-2 text-white border-white border border-opacity-10 outline-none focus:border-transparent focus:outline-2 focus:outline-blue-400 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Link
              to={"/forgotpassword"}
              className="text-white self-end duration-300 mt-2 text-opacity-70 hover:text-blue-600"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 duration-300 font-bold text-white py-2 w-40 rounded-md"
          >
            Sign In
          </button>
        </form>
        <div className="w-full border-white border border-opacity-20"></div>
        <p className="text-white text-opacity-70">
          Don't have an account?&nbsp;
          <Link className="text-blue-600" to={"/"}>
            Sign up &rarr;
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
