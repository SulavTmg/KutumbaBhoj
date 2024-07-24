import { create } from "zustand";
import { FetchAPI } from "../api/FetchAPI";
import { EmployeeStore, Employee } from "../types/types";
import { globalStore } from ".";

const api = new FetchAPI();

const employeeStore = create<EmployeeStore>((set,get) => ({
  employees: [],
  searchQuery: "",

  getEmployees: async () => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);

    const search = get().searchQuery;

    const response = await api.get<Employee[]>(
      `/employee${search ? `?s=${search}` : ""}`
    );
    if (response.error) {
      globalState.setError(response.error);
      globalState.setLoading(false);
    } else {
      set({ employees: response.data || [] });
      globalState.setLoading(false);
    }
  },

   setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().getEmployees();
  },

}));

  

  

  export default employeeStore;
