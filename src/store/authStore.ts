import { create } from "zustand";
import { FetchAPI } from "../api/FetchAPI";
import { AuthState } from "../types/types";
const api = new FetchAPI("https://admin.kutumbabazar.com/foodapi");

const authStore = create<AuthState>((set) => ({
  loading: false,
  error: null,
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),

  setToken: (token) => {
    if (token) {
      localStorage.setItem("token", token);
      set({ token, isAuthenticated: true });
    } else {
      localStorage.removeItem("token");
      set({ token: null, isAuthenticated: false });
    }
  },

  login: async (credentials: { email: string; password: string }) => {
    set({ loading: true, error: null });
    const response = await api.post<{
      token: string;
    }>("/Logins", credentials);

    if (response.error) {
      set({ error: response.error, loading: false });
    } else if (response.data) {
      const { token } = response.data;
      authStore.getState().setToken(token);
      set({loading: false})
    } else {
      set({ error: "Unexpected response format", loading: false });
    }
  },

  logout: () => {
    try {
      authStore.getState().setToken(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message });
      } else {
        set({ error: "An unknown error occurred"});
      }
    }
  },
}));

export default authStore;
