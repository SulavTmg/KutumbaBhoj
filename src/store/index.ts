import { create } from "zustand";
import useEmployeeStore from "./useEmployeeStore";
import useAuthStore from "./useAuthStore";
import useOrderStore from "./useOrderStore";
import useCustomerStore from "./useCustomerStore";
import useRestaurantStore from "./useRestaurantStore";
import useImgUploadStore from "./useImgUploadStore";
import useMenuStore from "./useMenuStore";

interface GlobalStore {
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const useGlobalStore = create<GlobalStore>((set) => ({
  loading: false,
  error: null,

  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
}));

export {useEmployeeStore,useAuthStore, useCustomerStore,useImgUploadStore,useMenuStore,useOrderStore,useRestaurantStore, useGlobalStore};