import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you can add your logout logic, like clearing user data from local storage
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-primary">
      <h1 className="text-white text-4xl font-bold">
        Welcome to your Dashboard
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 hover:scale-105 duration-300 font-bold text-white py-2 px-4 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
