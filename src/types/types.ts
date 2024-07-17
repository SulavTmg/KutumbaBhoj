export interface FetchOptions {
  method?: string;
  headers?: { [key: string]: string };
  body?: BodyInit | null | undefined;
}

export interface FetchResponse<T> {
  data?: T;
  error?: string;
}


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

export interface AuthState {
  loading: boolean;
  error: string | null;
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string | null) => void;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export interface EmployeeStore {
  loading: boolean;
  error: null | string;
  employees: Employee[];
  getEmployees: () => Promise<void>;
}

export interface OrderStore {
  loading: boolean;
  error: null | string;
  orders: Order[];
  getOrders: () => Promise<void>;
}
