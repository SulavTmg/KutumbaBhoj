export type Employee = {
  Id: number;
  Name: string;
  Contact: string;
  Gender: string;
  Designation: string;
  Shift: string;
  Joined: string;
}

export interface EmployeeData {
  Id: number;
  Name: string;
  Contact: string;
  Gender: string;
  Designation: string;
  Shift: string;
}

export interface EmployeeStore {
  employees: Employee[];
  employee: Employee | null;
  getEmployees: () => Promise<void>;
  getEmployee: (id: number) => Promise<void>;
  updateEmployee: (data: EmployeeData) => Promise<unknown>;
  addEmployee: (employee: EmployeeData) => Promise<unknown>;
  removeEmployee: (id: number) => Promise<number | undefined>;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}
