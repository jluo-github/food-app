import type { ActionTypes, CartType } from "@/type/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: initialState.products,
      totalItems: initialState.totalItems,
      totalPrice: initialState.totalPrice,

      addToCart: (item) => {
        const isExist = get().products.find(
          (product) => product.id === item.id
        );

        if (isExist) {
          const updatedProducts = get().products.map((product) =>
            product.id === isExist.id
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity,
                  price: item.price + product.price,
                }
              : item
          );

          set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        } else {
          set((state) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        }
      },

      removeFromCart: (item) => {
        set((state) => ({
          products: state.products.filter((product) => product.id !== item.id),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price,
        }));
      },
    }),

    {
      name: "cart",
      // skipHydration: true
    }
  )
);
