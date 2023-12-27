import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userService from '../service/userService';
import personService from '../service/personService';

const Login = ({user, setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
       navigate("/");
    }
  
    
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
  
    const credentials = {
      username,
      password,
    };
  
    userService.login(credentials).then((response) => {
      
      window.localStorage.setItem("loggedPersonsUser", JSON.stringify(response));
      setUser(response);
      personService.setToken(response.token);
      navigate("/");
      setUsername("");
      setPassword("");
    })
  };
  return (
    <>
      <div className='flex flex-col h-screen p-4 items-center'>
        <h1 className='text-4xl text-center mb-4 font-bold'>Login Your Account</h1>
        <div>
          <form
          onSubmit={handleLogin}
          className='m-4 p-4 flex-col gap-2 border-solid border-2 border-slate-500 w-80 items-center'>

            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input 
              type="text" 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <button
            type='submit' 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              LOGIN
            </button>
          </form>
        </div>
        <p>Don't have an account? <Link to="/register" className="text-blue-500">Register Here</Link></p>
        
      </div>
    </>
  )
}

export default Login
