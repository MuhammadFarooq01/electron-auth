import React from "react";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="grid grid-cols-10 h-screen w-screen md:bg-img bg-left">
        <div className="md:col-span-3 md:h-screen"></div>
        <div className="flex items-center justify-center bg-primary border-gray-600 border-opacity-50 border-l-2 col-span-10 md:col-span-7 h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
