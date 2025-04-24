'use client';


import {create} from "zustand";

interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<StoreState>((set: (arg0: (state: any) => { count: any; }) => any) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 || 1 }))
}));

export default useStore;
