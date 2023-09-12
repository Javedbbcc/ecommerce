import "./App.css";

import { Link, useNavigate } from "react-router-dom";

import React from 'react';

function Dashboard() {
  return (
    <div className="w-1/2 h-96 text-white bg-blue-900">
       <Link to="/signin" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
           Signin
         </Link>
      <h1>Welcome to the Dashboard!</h1>
      
    </div>
  );
}

export default Dashboard;
