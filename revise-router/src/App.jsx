import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col bg-zinc-400'>
      <Navbar/>

      <main className='flex-1 p-4'>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/users' element= {<Users/>} />
        <Route path='/users/:id' element= {<UserDetails/>} />
      </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App