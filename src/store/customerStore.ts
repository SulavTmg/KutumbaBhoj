import { create } from "zustand";
import { FetchAPI } from "../api/FetchAPI";
import { CustomerStore, Customer, EditCustomer } from "../types/customer";
import { globalStore } from ".";

const api = new FetchAPI();

const customerStore = create<CustomerStore>((set, get) => ({
  customers: [],
  customer: null,
  searchQuery: "",

  getCustomers: async () => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const search = get().searchQuery;
    const response = await api.get<Customer[]>(
      `/customers${search ? `/search?search=${search}` : ""}`
    );
    if (response.error) {
      globalState.setError(response.error.message);
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

  removeCustomers: async (id: number) => {
    const globalState = globalStore.getState();
    globalState.setError(null);
    globalState.setLoading(true);
    const response = await api.delete(`/customers/${id}`);
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      globalState.setLoading(false);
      get().getCustomers();
      return response.data as number;
    }
  },

  getCustomer: async (id: number) => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const response = await api.get<EditCustomer>(`/customers/${id}`);
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      set({ customer: response.data || null });
      globalState.setLoading(false);
    }
  },

  updateCustomers: async (customer: EditCustomer) => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const response = await api.put("/customers", customer);
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      globalState.setLoading(false);
      get().getCustomers();
      return response.data;
    }
  },
}));

export default customerStore;
