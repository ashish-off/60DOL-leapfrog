import type { Store } from "@/types/store";
import { create } from "zustand";
import { createUserSlice } from "./user_slice";
import { immer } from "zustand/middleware/immer";

export const useStore = create<Store> () (immer((...a) => ({
    ...createUserSlice(...a),
    // we can add more slices here if needed
})))