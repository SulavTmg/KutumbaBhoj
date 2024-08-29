export type Employee = {
  Id: number;
  Name: string;
  Contact: string;
  Gender: string;
  Designation: string;
  Shift: string;
  Joined: string;
};

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
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}
