import { create } from "zustand";
import { FetchAPI } from "../api/FetchAPI";
import { AuthState } from "../types/types";
import { globalStore } from ".";

const api = new FetchAPI();

const authStore = create<AuthState>((set) => ({
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
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const response = await api.post<{
      token?: string;
      message?: string;
    }>("/Logins", credentials);

    if (response.error) {
      console.log(response.error)
      globalState.setError(response.error?.message);
      globalState.setLoading(false);
    } else if (response.data) {
      const { token } = response.data;
      authStore.getState().setToken(token!);
      globalState.setLoading(false);
    } else {
      globalState.setError("Unexpected Error");
      globalState.setLoading(false);
    }
  },

  logout: () => {
    try {
      authStore.getState().setToken(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        globalStore.getState().setError(error.message);
      } else {
        globalStore.getState().setError("Unkown error occured");
      }
    }
  },
}));

export default authStore;
