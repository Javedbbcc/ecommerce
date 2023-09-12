import "./App.css";
import { Link, Outlet } from "react-router-dom";
// Dashboard.js
import React from 'react';

function Dash() {
  return (
    <div className="w-80 h-96 text-white bg-black">
       
      <h1>Welcome to the Dash!</h1>
      <Link to="/header" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Header
         </Link>
         <Outlet/>
    </div>
  );
}

export default Dash;
