import { create } from "zustand";
import { FetchAPI } from "../api/FetchAPI";
import { Order, OrderStore } from "../types/types";
import { globalStore } from ".";

const api = new FetchAPI();

const orderStore = create<OrderStore>((set, get) => ({
  orders: [],
  searchQuery: "",

  getOrders: async () => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);

    const search = get().searchQuery;
    const response = await api.get<Order[]>(
      `/orders${search ? `?s=${search}` : ""}`
    );
    if (response.error) {
      globalState.setError(response.error);
      globalState.setLoading(false);
    } else {
      set({ orders: response.data || [] });
      globalState.setLoading(false);
    }
  },
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().getOrders();
  },
}));

export default orderStore;
