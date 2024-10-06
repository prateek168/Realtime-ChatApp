import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage.jsx";
import Signup from "../components/Signup/Signup.jsx";
import Login from "../components/Login/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const Allroutes = () => {
  return <RouterProvider router={router} />;
};

export default Allroutes;
