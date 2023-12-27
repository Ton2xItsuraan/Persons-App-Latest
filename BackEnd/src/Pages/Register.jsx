import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom"
import userService from '../service/userService';

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();

    const credentials = {
      name,
      username, 
      password,
    };

    userService.register(credentials).then(response => {
      navigate("/login");
      setName("");
      setUsername("");
      setPassword("");
    });
  }
  return (
    <>
      <div className='flex flex-col h-screen p-4 items-center'>
        <h1 className='text-4xl text-center mb-4 font-bold'>Register for an account</h1>
        <div>
          <form onSubmit={handleRegistration} className='m-4 p-4 flex-col gap-2 border-solid border-2 border-slate-500 w-80 items-center'>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input 
              type="text" 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input 
              type="text" 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <button
            type='submit'
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              REGISTER
            </button>
          </form>
        </div>
        <p>Already have an account? <Link to="/login" className="text-blue-500">Login here</Link></p>
        
      </div>
    </>
  );
};

export default Register;
