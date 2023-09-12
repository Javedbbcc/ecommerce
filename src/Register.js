import React from "react";
import { Outlet, Link ,useNavigate } from "react-router-dom";
import {useState} from 'react'
import Dashboard from "./Dashboard";
import Layout1 from "./Layout1";


function Register (props) {
    const [user, setuser] = useState("")
    const [pass, setpass] = useState("")
    const [UserErr, setUserErr] = useState(false)
    const [passErr, setpassErr] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ username, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setUsername("");
        }
    }
    
    const handleRegister = () => {
      // Read user data from localStorage (if any)
      const userData = JSON.parse(localStorage.getItem('users')) || [];
    
      // Add new user to the array
      userData.push({ username, password });
    
      // Store updated user data in localStorage
      localStorage.setItem('users', JSON.stringify(userData));
    
        navigate('/dash');
      
    };

    function loginHandle(e)
    {
        if(user.length<4 || pass.length<6)
        {
            alert("UserName or Password is incorrect.")
        }
        else
        {
            alert("all good :)")
        }

        e.preventDefault()
    }
    function userHandel(e){
        let item = e.target.value;
        if (item.length<4){
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
            
        e.preventDefault()
    }
    function passHandel(e){
        let item = e.target.value;
        if (item.length<6){
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }
            
        e.preventDefault()
    }
    const [status, setStatus] = React.useState(true)

  return (
    <section class="gradient-form h-full  dark:bg-neutral-700">
      <div class="container m-auto h-full p-10">
        <div class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div class="w-full">
            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div class="g-0 lg:flex lg:flex-wrap">
                <div class="px-4 md:px-0 lg:w-6/12">
                  <div class="md:mx-6 md:p-12">
                    <div class="text-center">
                      <img
                        class="mx-auto w-48"
                        src="favicon.png"
                        alt="logo"
                      />
                      <h4 class="mb-12 mt-10 pb-1 text-xl font-semibold">
                        We are The Developers Team
                      </h4>
                    </div>

                    <form onSubmit={handleOnSubmit}>
                      <p class="mb-4">Register your account</p>

                      <div class="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          value={username}
                          placeholder="Username"
                          onChange={(e) => setUsername(e.target.value)}
                          //  onChange={userHandel}
                        />{UserErr?<span className="text-sm text-red-500">User must contain 4 charecters</span>:""}
                        <label
                          for="exampleFormControlInput1"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          
                        >
                          Username
                        </label>
                      </div>
                      <div class="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="email"
                          class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Email" 
                          value={email} onChange={(e) => setEmail(e.target.value)}
                          // onChange={userHandel}
                        />{UserErr?<span className="text-sm text-red-500">User must contain 4 charecters</span>:""}
                        <label
                          for="exampleFormControlInput1"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Email
                        </label>
                      </div>

                      <div class="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="password"
                          class="peer block min-h-[auto] w-full rounded border-2  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          value={password}
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          //  onChange={passHandel}
                        />{passErr?<span className="text-sm text-red-500">Password must contain 6 numbers</span>:""}
                        <label
                          for="exampleFormControlInput11"
                          class="pointer-events-none absolute left-3 border-black top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Password
                        </label>
                        
                      </div>
                      <div class="relative mb-4" data-te-input-wrapper-ini>
                      <input
                          type="password"
                          class="peer block min-h-[auto] w-full rounded border-2  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          value={password}
                          
                          placeholder="Confirm Password"
                          onChange={(e) => setPassword(e.target.value)}
                          //  onChange={passHandel}
                        />{passErr?<span className="text-sm text-red-500">Password must contain 6 numbers</span>:""}
                        <label
                          for="exampleFormControlInput11"
                          class="pointer-events-none absolute left-3 border-black top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Confirm Password
                        </label>
                      </div>

                      <div class="mb-12 pb-1 pt-1 text-center">
                        <button
                          class="mb-3 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          onClick={handleRegister}
                        >
                          Register
                        </button>

                        <a href="#!">Forgot password?</a>
                      </div>

                      <div class="flex items-center justify-between pb-6">
                        <p class="mb-0 mr-2">If you have an account?</p>
                        <Link
                          to="/signin"
                          className="inline-block text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        >
                          Signin
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-cyan-500 to-blue-500">
                  <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 class="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    
                    <h3> Props Example: {props.name}</h3>
                    <div>{
                            status? <h1>Fine </h1> : null
                         }
                         <button onClick={()=>setStatus(true)} className="px-6 mr-4 mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)]">SHOW</button>
                         <button onClick={()=>setStatus(false)} className="px-6 mr-4 mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)]">HIDE</button>
                         <button onClick={()=>setStatus(!status)} className="px-6 mr-4 mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)]">TOGGLE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
