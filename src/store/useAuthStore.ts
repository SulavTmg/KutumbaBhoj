import { create } from "zustand";
import { AuthState } from "../types/auth";

const useAuthStore = create<AuthState>(() => ({
  setToken: (token) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  },
}));

export default useAuthStore;
