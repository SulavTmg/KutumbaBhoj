import { create } from "zustand";
import { FetchAPI } from "../api/FetchAPI";
import { EmployeeStore,EmployeeData, Employee } from "../types/employee";
import { globalStore } from ".";

const api = new FetchAPI();

const employeeStore = create<EmployeeStore>((set, get) => ({
  employees: [],
  employee: null,
  searchQuery: "",

  getEmployees: async () => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);

    const search = get().searchQuery;

    const response = await api.get<Employee[]>(
      `/employee${search ? `/search?searchTerm=${search}` : ""}`
    );
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      set({ employees: response.data || [] });
      globalState.setLoading(false);
    }
  },

  addEmployee: async (data: EmployeeData) => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const response = await api.post<EmployeeData>("/employee", data);
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      globalState.setLoading(false);
      get().getEmployees();
      return response.data;
    }
  },

  removeEmployee: async (id: number) => {
    const globalState = globalStore.getState();
    globalState.setError(null);
    globalState.setLoading(true);
    const response = await api.delete(`/employee/${id}`);
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      globalState.setLoading(false);
      get().getEmployees();
      return response.data as number;
    }
  },

  updateEmployee: async(data: EmployeeData) => {
     const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const response = await api.put<EmployeeData>("/employee", data);
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      globalState.setLoading(false);
      get().getEmployees();
      return response.data;
    }
  },

  getEmployee: async(id : number) => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const response = await api.get<Employee>(
      `/employee/${id}`
    );
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      set({ employee: response.data || null});
      globalState.setLoading(false);
    }
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().getEmployees();
  },
}));

export default employeeStore;
