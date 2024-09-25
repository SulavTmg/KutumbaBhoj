export type Employee = {
  Id: number;
  Name: string;
  Contact: string;
  Gender: string;
  Designation: string;
  Shift: string;
  Address?: string;
  Joined?: string;
  Role?: string;
  VehicleType?: string;
  VehicleNumber?: string;
};

export interface EmployeeStore {
  employees: Employee[];
  employee: Employee | null;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}
