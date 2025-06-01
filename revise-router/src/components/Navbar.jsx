import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeStyle = ({isActive}) => isActive ?"text-blue-500 font-semibold" :"text-gray-600 hover:text-blue-500 delay-100"

  return (
    <nav className='bg-gray-500 p-4 flex justify-center shadow-lg space-x-8'>
      <NavLink to={"/"}  className={activeStyle}> Home </NavLink>
      <NavLink to = "/users" className={activeStyle}> Users </NavLink>
    </nav>
  )
}

export default Navbar