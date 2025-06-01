import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Users from "./Users";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const API = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/users/${id}`,
  });

  const fetchUser = async () => {
    try {
      const res = await API.get();
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    
  }, [id]);
  if(loading) {
    return <h1 className='text-center mt-8 text-3xl '>Loading users....</h1>
  }

  return (
    !user ? (<h1 className='text-center mt-8 text-3xl '>User not found</h1>) : (
      <div className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center">
        <img className="w-20" src={`https://robohash.org/${user.id}`} alt={user.name} />
        <h2 className="text-4xl font-bold" > {user.name} </h2>
        </div>
        <p className="text-[12px] text-gray-600 relative ">@{user.username}</p>
        <p className="text-2xl p-2">Email : {user.email}</p>
        <p className="text-2xl p-2">Phone : {user.phone}</p>
        <p className="text-2xl p-2">Website : {user.website}</p>
        <p className="text-2xl p-2">Company : {user.company.name}</p>

        <button onClick={() => navigate('/users')} className="mt-8 border-2 rounded-xl py-3 px-5 delay-100 hover:bg-gray-500 active:bg-zinc-400">go back</button>
      </div>
    )
  )
};

export default UserDetails;
