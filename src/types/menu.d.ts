import { Image } from "./restaurant";

interface List {
  Id: number;
  Name: string;
  Price: number;
}

type MenuListsProps = {
  menuLists: List[];
  restaurantId: number;
  categoryId: number;
};

interface Item {
  Id: number;
  Name: string;
  Price: number;
}

interface Category {
  Id: number;
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
  CategoryId: number;
  Name: string;
  Price: number;
  Images: Image[];
};

export interface AddCategory {
  Name: string;
  ImageIds?: number[];
}

export interface AddItem extends AddCategory {
  RestaurantId: number;
  CategoryId: number;
  Price: number;
}

interface ItemDetails {
  Id: number;
  RestaurantId: number | undefined;
  CategoryId: number;
  Name: string;
  Price: number;
  ImageIds?: number[];
}

export interface MenuStore {
  menu: Menu | null;
  item: ItemFields | null;
}
