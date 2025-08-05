import { AnimatePresence, easeIn, motion } from "motion/react";
import React from "react";

const Exit = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [listVisible, setListVisible] = React.useState(true);
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <button
        onClick={() => setIsVisible((prev) => !prev)}
        className="bg-red-500 text-white p-2 rounded"
      >
        exit X
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
          initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 , scale: 0.5 }}
            transition={{ duration: 0.3, ease: easeIn }}
            key="exit-animation"
          className="w-screen h-[80%]"
          
          >
            <div className="flex flex-col items-center h-[30rem] w-md bg-gray-200 mt-12 mx-auto">
              <div className="flex flex-col items-center justify-center  ">
                <h1 className="text-2xl text-black font-bold">
                  This is exit animation
                </h1>
                <button
                  onClick={() => setListVisible((prev) => !prev)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  exit list X
                </button>
              </div>
              <AnimatePresence>
              {listVisible && (
                <motion.div
                    exit={{ opacity: 0, y: -80, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: easeIn }}

                className="flex flex-col items-center justify-center h-full my-8  px-20 divide-y divide-neutral-300 rounded-2xl bg-amber-100">
                  <ul>
                    <li className="text-lg text-gray-700">Item 1</li>
                    <li className="text-lg text-gray-700">Item 2</li>
                    <li className="text-lg text-gray-700">Item 3</li>
                    <li className="text-lg text-gray-700">Item 4</li>
                    <li className="text-lg text-gray-700">Item 5</li>
                  </ul>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Exit;
