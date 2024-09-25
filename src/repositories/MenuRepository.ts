import { FetchAPI } from "../api/FetchAPI";
import { FetchResponse } from "../types/api";
import {
  AddCategory,
  ItemDetails,
  ItemFields,
  Menu,
  AddItem,
} from "../types/menu";
import { IMenuRepository } from "../types/repository";

export class MenuRepository implements IMenuRepository {
  private api: FetchAPI;
  private basePath = "/menus";

  constructor(api: FetchAPI) {
    this.api = api;
  }

  async getMenu(id: number): Promise<FetchResponse<Menu[]>> {
    return this.api.get<Menu[]>(`/restaurantmenu/${id}`);
  }

  async getItem(id: number): Promise<FetchResponse<ItemFields>> {
    return this.api.get<ItemFields>(`${this.basePath}/${id}`);
  }

  async addItem(data: AddItem): Promise<FetchResponse<AddItem>> {
    return this.api.post<AddItem>(this.basePath, data);
  }

  async addCategory(data: AddCategory): Promise<FetchResponse<AddCategory>> {
    return this.api.post<AddCategory>("/categories", data);
  }

  async update(data: ItemDetails): Promise<FetchResponse<ItemDetails>> {
    return this.api.put<ItemDetails>(`${this.basePath}`, data);
  }

  async delete(id: number): Promise<FetchResponse<number | undefined>> {
    return this.api.delete<number | undefined>(`${this.basePath}/${id}`);
  }
}
