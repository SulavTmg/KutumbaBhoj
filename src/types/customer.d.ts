export type Customer = {
  Id: number;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
};

export interface CustomerStore {
  customers: Customer[];
  customer: Customer | null;
  getCustomers: () => Promise<void>;
  getCustomer: (id: number) => Promise<void>;
  updateCustomers: (customer: Customer) => Promise<void>;
  removeCustomers: (id: number) => Promise<number | undefined>;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}
