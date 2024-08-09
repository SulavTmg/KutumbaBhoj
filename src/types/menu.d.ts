import { Image } from "./restaurant";

interface List {
  Id: number;
  Name: string;
  Price: number;
}

type MenuListsProps = {
  menuLists: List[];
  restaurantId: number;
};

interface Item {
  Id: number;
  Name: string;
  Price: number;
}

interface Category {
  Name: string;
  Items: Item[];
}

type Menu = {
  Id: number;
  Name: string;
  Address: string;
  Contact: string;
  Categories: Category[];
  Images: Image[];
};

type ItemFields = {
  Id: number;
  RestaurantId: number;
  Name: string;
  Category: string;
  Price: number;
  Images: Image[];
};

export interface AddCategory {
  RestaurantId: number;
  Category: string;
  Name: string;
  Price: number;
  ImageIds: number[];
}

interface ItemDetails {
  Id: number;
  RestaurantId: number | undefined;
  Category: string;
  Name: string;
  Price: number;
  ImageIds?: number[];
}


export interface MenuStore {
  menu: Menu | null;
  item: ItemFields | null;
  getMenu: (id: number) => Promise<void>;
  addCategory: (menu: AddCategory) => Promise<unknown>;
  removeItem: (id: number) => Promise<number | undefined>;
  updateItem: (data: ItemDetails) => Promise<unknown>;
  getItem: (id: number) => Promise<void>;
}
