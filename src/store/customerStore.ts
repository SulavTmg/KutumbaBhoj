import { create } from "zustand";
import { CustomerStore } from "../types/customer";

const customerStore = create<CustomerStore>((set) => ({
  customers: [],
  customer: null,
  searchQuery: "",

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },
}));

export default customerStore;
