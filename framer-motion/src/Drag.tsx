import React from 'react'
import {motion} from 'motion/react'
const Drag = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragDirectionLock={true}
      whileDrag={{scale: 0.8}}
      style={{ width: 100, height: 100, backgroundColor: 'greenyellow' }}
    />
  )
}

export default Drag