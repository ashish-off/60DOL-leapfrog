import type { StateCreator } from "zustand";
import type { Store } from "@/types/store";

type UserState = {
  userName: string;
  fullName: string;
  age: number;
  address: string;
};

type UserAction = {
  setAddress: (address: string) => void;
  fetchUser : () => Promise<void>;
};

export type UserSlice = UserState & UserAction;

// StateCreator does not create the store itself.
// Instead, it’s a TypeScript helper type that defines the shape and structure of a slice of the store
// It helps in creating a slice of the store with specific state and actions.

export const createUserSlice: StateCreator<
  Store,
  [["zustand/immer", never]],
  [],
  UserSlice
> = (set) => ({
  userName: "",
  fullName: "",
  age: 0,
  address: "",

  //   setAddress: (address) => set((state) => ({ ...state, address })),
  // setAddress : (address) => set(() => ({address}))

  // as we are using immer middleware :
  setAddress: (address) =>
    set((state) => {
      state.address = address;
    }),
    fetchUser: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    set((state) => {
      state.userName = data.username;
      state.fullName = data.name;
      state.age = data.age || 0; // Assuming age is not provided in the API
      state.address = data.address.street + ", " + data.address.city;

    })}
});
