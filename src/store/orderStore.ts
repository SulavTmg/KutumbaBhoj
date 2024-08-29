import { create } from "zustand";
import { OrderStore } from "../types/order";
const orderStore = create<OrderStore>((set) => ({
  orders: [],
  order: null,
  searchQuery: "",

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },
}));

export default orderStore;
