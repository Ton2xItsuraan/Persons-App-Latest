import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Persons from './Pages/Persons';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    try {
      const loggedUserJSON = window.localStorage.getItem("loggedPersonsUser");

      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON);
        setUser(user);
      }
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
     
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Persons user={user} setUser={setUser} />} />
      <Route path='/register' element={<Register user={user} />} />
      <Route path='/login' element={<Login user={user} setUser={setUser} navigate={navigate} />} />
    </Routes>
  );
}

export default App;
