import { create } from "zustand";
import { FetchAPI } from "../api/FetchAPI";
import { CustomerStore, Customer } from "../types/types";
import { globalStore } from ".";

const api = new FetchAPI();

const customerStore = create<CustomerStore>((set, get) => ({
  customers: [],
  searchQuery: "",
  
  getCustomers: async () => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const search = get().searchQuery;
    const response = await api.get<Customer[]>(
      `/customers${search ? `?s=${search}` : ""}`
    );
    if (response.error) {
      globalState.setError(response.error);
      globalState.setLoading(false);
    } else {
      set({ customers: response.data || [] });
      globalState.setLoading(false);
    }
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().getCustomers();
  },

  // filteredCustomers: () => {
  //   const { customers, searchQuery } = get();
  //   if (!searchQuery) return customers;
  //   return customers.filter((customer) =>
  //     customer.Name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // },
}));

export default customerStore;
