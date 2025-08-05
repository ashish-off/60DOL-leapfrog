import React from "react";
import { motion } from "motion/react";
import { delay } from "motion";

const Demo2 = () => {
  return (
    <>
    <motion.div
      className="box"
      animate={{
        x: 500,
        y: 200,
        rotate : [0, 45, 180, 45, 0]
      }}
      transition={{
        delay: 0.3,
        duration: 2,
        // repeat: Infinity,
        ease: "anticipate",
        // type: "spring",
      }}
      >aaa</motion.div>
      <motion.div 
      initial = {{x: 0, y: 0}}
      animate = {{
        x:[0,400,400,0,0],
        y: [0,0,400,400, 0]
      }}
      transition={{
        delay: 0.3,
        duration: 3,
        ease : "linear"
      }}
      exit={{
      }}
      className="ball"></motion.div>
      </>
  );
};

export default Demo2;
