import { create } from "zustand";
import { GlobalStore } from "../types/types";
import employeeStore from "./employeeStore";
import authStore from "./authStore";
import orderStore from "./orderStore";
import customerStore from "./customerStore";

const globalStore = create<GlobalStore>((set) => ({
  loading: false,
  error: null,

  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
}));

export {employeeStore, authStore, orderStore, customerStore, globalStore};