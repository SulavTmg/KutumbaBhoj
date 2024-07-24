export interface FetchOptions {
  method?: string;
  headers?: { [key: string]: string };
  body?: BodyInit | null | undefined | FormData;
}

export interface FetchResponse<T> {
  data?: T;
  error?: { message: string };
}

export type HeaderProps = {
  icon?: string;
  btnName?: string;
  heading: string;
  className?: string;
  path?: string;
  search?: boolean;
  filter?: boolean;
  subHeading?: string;
  onSearchChange?: (query: string) => void;
  onClick?: () => void;
};

export type Employee = {
  Id: number;
  Name: string;
  Contact: string;
  Gender: string;
  Designation: string;
  Shift: string;
  Joined: string;
};

export type Customer = {
  Id: number;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
};

export type Order = {
  Id: number;
  RestaurantId: number;
  Restaurant: string;
  CustomerId: number;
  Total: number;
  Payment: string;
  CreatedAt: string;
  Status: string;
};

export type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string | null) => void;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
};

export interface EmployeeStore {
  employees: Employee[];
  getEmployees: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  // filteredEmployees: () => Employee[];
}

export interface OrderStore {
  orders: Order[];
  getOrders: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}

export interface CustomerStore {
  customers: Customer[];
  getCustomers: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  // filteredCustomers: () => Customer[];
}

export interface GlobalStore {
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}
