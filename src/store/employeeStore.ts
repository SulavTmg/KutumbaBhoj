import { create } from "zustand";
import { EmployeeStore } from "../types/employee";


const employeeStore = create<EmployeeStore>((set) => ({
  employees: [],
  employee: null,
  searchQuery: "",

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },

}));

export default employeeStore;
