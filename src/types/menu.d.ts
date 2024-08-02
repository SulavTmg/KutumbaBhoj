interface List {
  Id: number;
  Name: string;
  Price: number;
}

export type MenuListsProps = {
  menuLists: List[];
  restaurantId: number;
};

interface Item {
  Id: number;
  Name: string;
  Price: number;
}

export interface Category {
  Name: string;
  Items: Item[];
}

export type Menu = {
  Id: number;
  Name: string;
  Address: string;
  Contact: string;
  Categories: Category[];
};

export interface AddCategory {
  RestaurantId: number;
  Category: string;
  Name: string;
  Price: number;
  ImageIds: number[];
}

export interface MenuStore {
  menu: Menu | null;
  getMenu: (id: number) => Promise<void>;
  addCategory: (menu: AddCategory) => Promise<unknown>;
  removeItem: (id: number) => Promise<number | undefined>;
}
