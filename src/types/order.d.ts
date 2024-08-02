export interface OrderStore {
  orders: Order[];
  order: Order | null;
  getOrders: () => Promise<void>;
  getOrder: (id: number) => Promise<void>;
  removeOrder: (id: number) => Promise<void>;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}
interface OrderedItem {
  Id: number;
  MenuItemId: number;
  MenuItemName: string;
  Quantity: number;
  Price: number;
}

interface Order {
  Id: number;
  RestaurantId: number;
  Restaurant: string;
  CustomerId: number;
  CustomerName: string;
  Address: string;
  Contact: string;
  Total: number;
  Payment: string;
  CreatedAt: string;
  Status: string;
  OrderedItems: OrderedItem[];
}