import { SignUp } from "../types/auth";
import { FetchResponse } from "./api";
import { AddCategory, AddItem, ItemDetails } from "./menu";

export interface IRepository<T, ID> {
  search(query: string): Promise<FetchResponse<T[]>>;
  getAll(): Promise<FetchResponse<T[]>>;
  getById(id: ID, endpoint?: string): Promise<FetchResponse<T>>;
  create(data: T): Promise<FetchResponse<T>>;
  update(data: T): Promise<FetchResponse<T>>;
  delete(id: ID): Promise<FetchResponse<ID | undefined>>;
}

export interface IAuthRepository {
  login(credentials: {
    email: string;
    password: string;
  }): Promise<FetchResponse<T>>;
  signUp(data: SignUp): Promise<FetchResponse<T>>;
}

export interface IImageRepository {
  uploadImage(formdata: FormData): Promise<FetchResponse<T>>;
  getImages(): Promise<FetchResponse<T>>;
}

export interface IMenuRepository {
  getMenu(id: number): Promise<FetchResponse<T>>;
  getItem(id: number): Promise<FetchResponse<T>>;
  addCategory(menu: AddCategory): Promise<FetchResponse<T>>;
  addItem(data: AddItem): Promise<FetchResponse<T>>;
  update(data: ItemDetails): Promise<FetchResponse<T>>;
  delete(id: number): Promise<ID | undefined>;
}
