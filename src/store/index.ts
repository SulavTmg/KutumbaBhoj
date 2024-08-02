import { create } from "zustand";
import employeeStore from "./employeeStore";
import authStore from "./authStore";
import orderStore from "./orderStore";
import customerStore from "./customerStore";
import restaurantStore from "./restaurantStore";
import imgUploadStore from "./imgUploadStore";
import menuStore from "./menuStore";

interface GlobalStore {
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const globalStore = create<GlobalStore>((set) => ({
  loading: false,
  error: null,

  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
}));

export {employeeStore, authStore, orderStore, customerStore, globalStore, restaurantStore, imgUploadStore, menuStore};