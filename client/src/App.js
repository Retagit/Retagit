import React from 'react'
import Home from './Pages/Home/Home'
import Navbar from './Pages/Navbar/Navbar'
import "./Css/color.css"
import Login from './Pages/Register/Login'
import NavPhone from './Pages/Navbar/NavPhone'


import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './Pages/Register/Register'
export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Navbar></Navbar>,
      <Home></Home></div>
    },
    {
      path: "/login",
      element: <div><Navbar></Navbar>,
      <Login></Login></div>
    },
    {
      path: "/register",
      element: <div><Navbar></Navbar>,
      <Register></Register></div>
    },
  ]);
  return (
    <div className='w-full h-full bg'>
     <RouterProvider router={router} />
    </div>
  )
}
