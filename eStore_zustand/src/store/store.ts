import type { Store } from "@/types/store";
import { create } from "zustand";
import { createUserSlice } from "./user-slice";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cart-slice";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

export const useStore = create<Store>()(
  devtools(
    subscribeWithSelector(
      persist(
        immer((...a) => ({
          ...createUserSlice(...a),
          ...createCartSlice(...a),
          // we can add more slices here if needed
        })),
        {
          name: "appLocalStorage",
        }
      )
    )
  )
);
// npm i immer
