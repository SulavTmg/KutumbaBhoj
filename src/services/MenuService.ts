import { useGlobalStore, useMenuStore } from "../store";
import { AddCategory, AddItem, ItemDetails } from "../types/menu";
import { IMenuRepository } from "../types/repository";
import { IMenuService } from "../types/services";

export class MenuService implements IMenuService {
  private setLoading = useGlobalStore.getState().setLoading;
  private setError = useGlobalStore.getState().setError;
  constructor(private menuRepo: IMenuRepository) {}

  async getMenu(id: number): Promise<void> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.menuRepo.getMenu(id);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    useMenuStore.setState({
      menu: response.data?.length ? response.data[0] : null,
    });
    this.setLoading(false);
  }

  async getItem(id: number): Promise<void> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.menuRepo.getItem(id);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    useMenuStore.setState({
      item: response.data || null,
    });
    this.setLoading(false);
  }

  async addCategory(menu: AddCategory): Promise<unknown> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.menuRepo.addCategory(menu);
    if (response.error) {
      this.setError(response.error.message);
    }
    return response.data;
  }

  async addItem(data: AddItem): Promise<unknown> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.menuRepo.addItem(data);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }

  async updateItem(data: ItemDetails): Promise<unknown> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.menuRepo.update(data);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response;
  }

  async deleteItem(id: number): Promise<number | undefined> {
    this.setError(null);
    const response = await this.menuRepo.delete(id);
    if (response.error) {
      this.setError(response.error.message);
    }
    return response.data;
  }
}
