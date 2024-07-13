import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import Dashboard from "./components/Dashboard.jsx";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/forgotpassword", element: <ForgotPassword /> },
    ],
  },
  { path: "/dashboard", element: <Dashboard /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer position="top-center" theme="dark" />
    <RouterProvider router={router} />
  </React.StrictMode>
);
