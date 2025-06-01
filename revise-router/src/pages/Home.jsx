import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center flex-col ' >
      <h1 className='text-center text-3xl mt-12 '>Welcome to the homepage of this app.</h1>
      <p className='flex justify-center text-xl mt-12  '>This is a simple React spa for demonstrating routing with React Router.</p>
     <button onClick={() => navigate('/users')} className=" my-8 border-2 rounded-xl py-3 px-5 delay-100 hover:bg-gray-500 active:bg-zinc-400 w-fit">go to users</button>
    </div>
  )
}

export default Home