import React from 'react'
import { Button } from './components/ui/button'
import { useStore } from './store/store'
import { useShallow } from 'zustand/shallow'
const App = () => {

  const {address} = useStore(useShallow((state) => ({
    address: state.address,
  })))
  console.log(address);


  return (
    <div>
      <Button>this is button</Button>
      <h1>
        {address}
      </h1>
    </div>
  )
}

export default App