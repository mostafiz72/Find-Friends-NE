import React from 'react';
import { useState } from 'react';
import { API_URL } from './constants/constants';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AlertError from './components/alerts/AlertError';
import AlertSucc from './components/alerts/AlertSucc';


export default function () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formResponse, setFormResponse] = useState({
        status: false,
        message: "",
   
    });
    
    
    const handleForm = async() =>{
        const fetchReq = await axios.post(API_URL + "/login", {email, password});

        setFormResponse(fetchReq.data);

        if(fetchReq.data.status === true){
            setTimeout(()=>{
                location.href = "/home";
            }, 1000);
        }
    };



  return (
     <>

     <div className='h-screen flex flex-col justify-center items-center bg-slate-700'>
        <div className="max-w-sm mx-auto bg-slate-800 p-4 rounded-md w-1/2 shadow-lg shadow-gray-700">
        <h2 className=' text-3xl font-bold text-center text-blue-700 py-6'>Login From</h2>
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username or email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter your Password' required />
        </div>
        <div className=" flex justify-between items-center mb-5">
            <div className='flex items-start'>
            <div className="flex items-center h-5">
            <input  id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <div><Link to="/register" className=" text-blue-700 hover:underline">Register Now</Link></div>
        </div>
        
            {formResponse.status === false && formResponse.message?.length ?(
                <AlertError message={formResponse.message}/>
            ): null}
            {formResponse.status === true && formResponse.message?.length ?(
                <AlertSucc message={formResponse.message}/>
            ): null}

        <button onClick={handleForm} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
     </div>     

     </>
  )
}
