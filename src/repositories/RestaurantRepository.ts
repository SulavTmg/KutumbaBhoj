import { FetchAPI } from "../api/FetchAPI";
import { globalStore, restaurantStore } from "../store";
import { IRepository } from "../types/repository";
import {
  AddRestaurant,
  Restaurant,
  UpdateRestaurant,
} from "../types/restaurant";

export class RestaurantRepository implements IRepository {
  private api: FetchAPI;
  private basePath = "/restaurants";
  private globalState = globalStore.getState();

  constructor(api: FetchAPI) {
    this.api = api;
  }

  async search(query: string) {
    this.globalState.setError(null);
    const response = await this.api.get<Restaurant[]>(
      `${this.basePath}/search?searchTerm=${query}`
    );
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    restaurantStore.setState({ restaurants: response.data || [] });
  }

  async getAll() {
    this.globalState.setLoading(true);
    this.globalState.setError(null);
    const response = await this.api.get<Restaurant[]>(this.basePath);
    if (response.error) {
      this.globalState.setError(response.error.message);
      this.globalState.setLoading(false);
    }
    restaurantStore.setState({ restaurants: response.data || [] });
    this.globalState.setLoading(false);
  }

  async getById(id: number) {
    this.globalState.setLoading(true);
    this.globalState.setError(null);
    const response = await this.api.get<Restaurant>(`${this.basePath}/${id}`);
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    restaurantStore.setState({ restaurant: response.data || null });
    this.globalState.setLoading(false);
  }

  async create(data: AddRestaurant) {
    this.globalState.setError(null);
    const response = await this.api.post<AddRestaurant>(this.basePath, data);
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    return response.data;
  }

  async update(data: UpdateRestaurant) {
    const response = await this.api.put<UpdateRestaurant>(
      `${this.basePath}`,
      data
    );
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
