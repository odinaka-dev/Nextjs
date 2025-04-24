"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
    id: string;
    title: string;
    price: number;
    quantity?: number;
    image: string;
}

interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void; // add to cart functionality
  removeFromCart: (productId: string) => void; // remove from cart functionality
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  clearCart: () => void; // clear  cart buttons
  getTotal: () => number; // get totalPrice and add up.
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product: Product) => {
        const existing = get().cart.find((item) => item.id === product.id);
        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: (item.quantity || 0) + 1 }
                : item
            ),
          });
        } else {
          set({ cart: [...get().cart, { ...product, quantity: 1 }] });
        }
      },

      // remove functionality from the persist middleware (localstorage || sessionStorage).
      removeFromCart: (productId: string) => {
        set({
          cart: get().cart.filter((item) => item.id !== productId),
        });
      },

      // increment and decrement
      incrementQuantity: (productId: string) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: (item.quantity || 0) + 1 }
              : item
          ),
        })),
      decrementQuantity: (productId: string) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId && (item.quantity || 0) > 1
              ? { ...item, quantity: (item.quantity ?? 1) - 1 }
              : item
          ),
        })),

      // delete all items

      clearCart: () => set({ cart: [] }),

      // get the total price.
      getTotal: (): number =>
        get().cart.reduce(
          (acc: number, item: Product) =>
            acc + item.price * (item.quantity ?? 1),
          0
        ),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
