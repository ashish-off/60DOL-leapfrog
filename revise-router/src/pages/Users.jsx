import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
  })

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get();
        const sortedUsers = res.data.sort((a, b) => a.name.localeCompare(b.name));
        setusers(sortedUsers);
        setLoading(false);        
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, [])

  if (loading) {
    return (
      <h1 className='text-center mt-8 text-3xl '>Loading users....</h1>
    )}

  return (
    <div>
      <h1 className='text-2xl text-center font-semibold'>The users : </h1>
      {
        users.map(user => (
          <div 
            key={user.id} 
            className='border p-4 my-2 cursor-pointer hover:bg-gray-500'
            onClick={() => navigate(`/users/${user.id}`)}
          >
            <h3 className='text-xl font-semibold'>{user.name}</h3>
            <p className='text-gray-600'>{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Users