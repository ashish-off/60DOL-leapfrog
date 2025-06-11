import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YoutubeForm from './Components/YoutubeForm'
import YupForm from './Components/YupForm'
import ZodForm from './Components/ZodForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <YoutubeForm /> */}
    {/* <YupForm /> */}
    <ZodForm />
    </>
  )
}

export default App
