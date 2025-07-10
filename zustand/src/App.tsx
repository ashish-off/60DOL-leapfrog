import React from "react";
import { Button } from "./components/ui/button";
import { create } from "zustand";

interface storeType {
  count: number;
  inc: () => void;
  dec: () => void;
  incby: (val: number) => void;
}

const useStore = create<storeType>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  incby: (val) => set((state) => ({ count: state.count + val })),
}));

function App() {
  const store = useStore();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h1 className="text-3xl">the count is {store.count}</h1>
      <div>
        <Button onClick={store.inc}>+</Button>
        <Button onClick={store.dec}>-</Button>
        <Button onClick={() => store.incby(2)}>increment by 2</Button>
      </div>
    </div>
  );
}

export default App;
