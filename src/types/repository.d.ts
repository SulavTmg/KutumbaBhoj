import { SignUp } from "../types/auth";
import { AddCategory, AddItem, ItemDetails } from "./menu";

export interface IRepository {
  search(query: string): Promise<void>;
  getAll(): Promise<void>;
  getById(id: ID): Promise<T>;
  create(entity: T): Promise<unknown>;
  update(entity: T): Promise<unknown>;
  delete(id: ID): Promise<number | undefined>;
}

export interface IAccessRepository {
  login(credentials: { email: string; password: string }): Promise<void>;
  signUp(data: SignUp): Promise<unknown>;
  logout(): Promise<void>;
}

export interface IImageRepository {
  uploadImage: (formdata: FormData) => Promise<unknown>;
  getImages: () => Promise<void>;
}

export interface IMenuRepository {
  getMenu: (id: number) => Promise<void>;
  getItem: (id: number) => Promise<void>;
  addCategory: (menu: AddCategory) => Promise<unknown>;
  addItem: (data: AddItem) => Promise<>;
  update(entity: ItemDetails): Promise<unknown>;
  delete(id: number): Promise<number | undefined>;
}
