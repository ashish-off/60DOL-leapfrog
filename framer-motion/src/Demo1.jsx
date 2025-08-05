import React from "react";
import * as motion from "motion/react-client";

const Demo1 = () => {
  const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
  };
  return (
    <div>
      <motion.div
        style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
        initial={{ scale: 4 }}
        animate={{
          transform: "translateX(50rem)",
          scale: 2,
          transition: { duration: 1, ease: "linear" },
        }}
      >
        hhh
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        drag
        // dragConstraints={{ left: -100, right: 500, top: -100, bottom: 100 }}
        style={ball}
        onClick={() => {}}
      />
    </div>
  );
};

export default Demo1;
