import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./features/Slice";

const Counter = () => {
  const [number, setNumber] = useState(null);
  const value = useSelector((state) => state.counter?.value);
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-400 flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">Counter Value : {value}</h1>
      <button
        className="border-2 rounded-lg py-2 px-4 m-2"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <button
        className="border-2 rounded-lg py-2 px-4 m-2"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
      <div>
        <label>Exter the value :</label>
        <input
          className="border-2 rounded-lg py-2 px-4  m-2"
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button 
        onClick={() => {
          number && dispatch(incrementByAmount(Number(number) ))
        }}
         className="border-2 rounded-lg py-2 px-4 m-2">
          add {number}
        </button>
      </div>
    </div>
  );
};

export default Counter;
