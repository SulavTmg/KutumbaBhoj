export interface CustomerStore {
  customers: Customer[];
  getCustomers: () => Promise<void>;
  updateCustomers: (formData: FormData) => Promise<void>;
  removeCustomers: (id: number) => Promise<number | undefined>;
  getCustomers: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}
export type Customer = {
  Id: number;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
};
