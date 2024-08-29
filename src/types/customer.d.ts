export type AddCustomer = {
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
};

export type Customer = AddCustomer & {
  Id: number;
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
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
