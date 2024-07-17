import { create } from "zustand";
import { FetchAPI } from "../api/FetchAPI";
import { Order, OrderStore } from "../types/types";
const api = new FetchAPI("https://admin.kutumbabazar.com/foodapi");

const orderStore = create<OrderStore>((set) =>({

    loading: false,
    error: null,
    orders: [],

    getOrders: async () => {
    set({ loading: true, error: null });
    const response = await api.get<Order[]>("/orders");
    if (response.error) {
      set({ error: response.error, loading: false });
    } else {
      set({ orders: response.data || [], loading: false });
    }
  },
}));

export default orderStore;