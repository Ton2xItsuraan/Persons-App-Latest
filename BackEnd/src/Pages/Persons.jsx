import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PersonsList from '../components/PersonsList';

const Persons = ({user, setUser}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [user, navigate]);

  const handleLogout = () => {
    window.localStorage.removeItem("loggedPersonsUser");
    setUser(null);
  };

  return (
    <div>
    <div className='flex items-center justify-between p-2'>
      <p>{user?.name} is logged in</p>
      <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Logout
</button>
    
    </div>
    {user && <PersonsList />}
    </div>
    
  )
}

export default Persons
