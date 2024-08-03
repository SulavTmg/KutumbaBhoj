export type Customer = {
  Id: number;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
};

export type EditCustomer = {
  Id: number;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
  Password: string;
};

export interface CustomerStore {
  customers: Customer[];
  customer: EditCustomer | null;
  getCustomers: () => Promise<void>;
  getCustomer: (id: number) => Promise<void>;
  updateCustomers: (customer: EditCustomer) => Promise<void>;
  removeCustomers: (id: number) => Promise<number | undefined>;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}
