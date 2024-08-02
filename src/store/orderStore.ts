import { create } from "zustand";
import { FetchAPI } from "../api/FetchAPI";
import { Order, OrderStore } from "../types/order";
import { globalStore } from ".";

const api = new FetchAPI();

const orderStore = create<OrderStore>((set, get) => ({
  orders: [],
  order: null,
  searchQuery: "",

  getOrders: async () => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);

    const search = get().searchQuery;
    const response = await api.get<Order[]>(
      `/orders${search ? `/search?searchTerm=${search}` : ""}`
    );
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      set({ orders: response.data || [] });
      globalState.setLoading(false);
    }
  },

  getOrder: async (id: number) => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const response = await api.get<Order[]>(`/orderdetails?id=${id}`);
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      set({ order: response.data?.length ? response.data[0] : null });
      globalState.setLoading(false);
    }
  },

  removeOrder: async (id: number) => {
    const globalState = globalStore.getState();
    globalState.setError(null);
    globalState.setLoading(true);
    const response = await api.delete(`/orders/${id}`);
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      globalState.setLoading(false);
      get().getOrders();
    }
  },
  
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().getOrders();
  },
}));

export default orderStore;
