import { useState } from 'react'
import Dashboard from './Dashboard'
import { DashboardContext } from './useContext/context';

export interface User {
  isStudent: boolean ;
  name: string;
}
const App = () => {
  const [user, setuser] = useState<User>({
    isStudent: true,
    name: "Ashish "
  })

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100  '>
      <DashboardContext.Provider value={{user, setUser: setuser}}>
      <Dashboard  />

      </DashboardContext.Provider>
    </div>
  )
}

export default App