import React from 'react'
import {motion} from 'motion/react'

const Hover = () => {
  return (
    <>
    <motion.div 
    initial={{x: 300}}
    whileHover={{backgroundColor: "yellow", }}
    whileTap={{scale: 1.5}}
    transition={{duration: 1}}
    // whileInView={{opacity: 0.1}}
    className="box"></motion.div>
    </>
  )
}

export default Hover