import { FetchAPI } from "../api/FetchAPI";
import { globalStore, menuStore } from "../store";
import { AddCategory, ItemDetails, ItemFields, Menu, AddItem } from "../types/menu";
import { IMenuRepository } from "../types/repository";

export class MenuRepository implements IMenuRepository {
  private api: FetchAPI;
  private basePath = "/menus";
  private globalState = globalStore.getState();

  constructor(api: FetchAPI) {
    this.api = api;
  }

  async getMenu(id: number) {
    this.globalState.setLoading(true);
    this.globalState.setError(null);
    const response = await this.api.get<Menu[]>(`/restaurantmenu/${id}`);
    if (response.error) {
      this.globalState.setError(response.error.message);
      this.globalState.setLoading(false);
    }
    menuStore.setState({
      menu: response.data?.length ? response.data[0] : null,
    });
    this.globalState.setLoading(false);
  }

  async getItem(id: number) {
    this.globalState.setLoading(true);
    this.globalState.setError(null);
    const response = await this.api.get<ItemFields>(`${this.basePath}/${id}`);
    if (response.error) {
      this.globalState.setError(response.error.message);
      this.globalState.setLoading(false);
    }
    menuStore.setState({
      item: response.data || null,
    });
    this.globalState.setLoading(false);
  }

  async addItem(data: AddItem) {
    this.globalState.setError(null);
    const response = await this.api.post<AddItem>(this.basePath, data);
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    return response.data;
  }

  async addCategory(data: AddCategory){
    this.globalState.setError(null);
    const response = await this.api.post<AddCategory>("/categories", data);
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    return response.data;
  }

  async update(data: ItemDetails) {
    this.globalState.setError(null);
    const response = await this.api.put<ItemDetails>(`${this.basePath}`, data);
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    return response.data;
  }

  async delete(id: number) {
    this.globalState.setError(null);
    const response = await this.api.delete<number | undefined>(
      `${this.basePath}/${id}`
    );
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    return response.data;
  }
}
