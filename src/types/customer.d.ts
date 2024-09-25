export type Customer = {
  Id?: number;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
  Password?: string;
};

export interface CustomerStore {
  customers: Customer[];
  customer: Customer | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
