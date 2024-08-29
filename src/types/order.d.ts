export interface OrderStore {
  orders: Order[];
  order: Order | null;
  searchQuery: string;
}

interface OrderedItem {
  Id: number;
  MenuItemId: number;
  MenuItemName: string;
  Quantity: number;
  Price: number;
}

interface OrderData {
  Id: number;
  RestaurantId: number;
  Restaurant: string;
  CustomerId: number;
  CustomerName: string;
  Total: number;
  Payment: string;
  CreatedAt: string;
  Status: string;
  OrderedItems: OrderedItem[];
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