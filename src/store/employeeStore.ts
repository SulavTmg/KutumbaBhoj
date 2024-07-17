import { create } from "zustand";
import { FetchAPI } from "../api/FetchAPI";
import { EmployeeStore, Employee } from "../types/types";

const api = new FetchAPI("https://admin.kutumbabazar.com/foodapi");

const employeeStore = create<EmployeeStore>((set) => ({
  employees: [],
  loading: false,
  error: null,

  getEmployees: async () => {
    set({ loading: true, error: null });
    const response = await api.get<Employee[]>("/employee");
    if (response.error) {
      set({ error: response.error, loading: false });
    } else {
      set({ employees: response.data || [], loading: false });
    }
  },
}));

export default employeeStore;
