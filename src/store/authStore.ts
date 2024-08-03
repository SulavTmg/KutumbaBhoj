import { create } from "zustand";
import { FetchAPI } from "../api/FetchAPI";
import { AuthState, SignUp } from "../types/auth";
import { globalStore } from ".";

const api = new FetchAPI();

const authStore = create<AuthState>(() => ({
  setToken: (token) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
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

  signUp: async (values: SignUp) => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const response = await api.post<{
      message?: string;
    }>("/customers", values);
    if (response.error) {
      globalState.setError(response.error?.message);
      globalState.setLoading(false);
    } else {
      globalState.setLoading(false);
      return response.data;
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
