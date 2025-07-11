import type { CartProduct } from "@/types/cartProduct";
import type { Product } from "@/types/products";
import type { StateCreator } from "zustand";
import type { Store } from "@/types/store";

type CartState = {
  products: CartProduct[];
  total: number;
};

type CartActions = {
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  incQty: (productId: string) => void;
  decQty: (productId: string) => void;
  getProductById: (productId: string) => CartProduct | undefined;
  setTotal: (total: number) => void;
  reset: () => void;
};

export type CartSlice = CartState & CartActions;

const initialState: CartState = {
  products: [],
  total: 0,
};

export const createCartSlice: StateCreator<
  Store,
  [["zustand/immer", never]],
  [],
  CartSlice
> = (set, get) => ({
  ...initialState,
  incQty: (productId) => {
    set((state) => {
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.qty += 1;
      }
    });
  },
  decQty: (productId) =>
    set((state) => {
      const index = state.products.findIndex((p) => p.id === productId);
      if (index !== -1) {
        if (state.products[index].qty === 1) {
          state.products.splice(index, 1);
        } else {
          state.products[index].qty -= 1;
        }
      }
    }),
  // addProduct: (product) => {
  //   set((state) => {
  //     const existingProduct = state.products.find((p) => p.id === product.id);
  //     if (existingProduct) {
  //       existingProduct.qty += 1;
  //     } else {
  //       state.products.push({ ...product, qty: 1 });
  //     }
  //   });
  // },
  addProduct: (product) =>
    set((state) => {
      state.products.push({ ...product, qty: 1 });
    }),
  removeProduct: (productId) =>
    set((state) => {
      state.products = state.products.filter((p) => p.id !== productId);
    }),
  getProductById: (productId) => {
    return get().products.find((p) => p.id === productId);
  },

  setTotal: (total) => {
    set((state) => {
      state.total = total;
    });
  },
  reset: () => set(initialState),
});
