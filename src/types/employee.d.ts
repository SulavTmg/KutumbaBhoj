export type Employee = {
  Id: number;
  Name: string;
  Contact: string;
  Gender: string;
  Designation: string;
  Shift: string;
  Joined: string;
}

interface AddEmployeeData {
  Id: number;
  Name: string;
  Contact: string;
  Gender: string;
  Designation: string;
  Shift: string;
  VehicleType: string;
  VehicleNumber: string;
}

export interface EmployeeStore {
  employees: Employee[];
  getEmployees: () => Promise<void>;
  addEmployee: (employee: AddEmployeeData) => Promise<unknown>;
  removeEmployee: (id: number) => Promise<number | undefined>;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}
