import { useGlobalStore, useRestaurantStore } from "../store";
import { IRepository } from "../types/repository";
import { Restaurant } from "../types/restaurant";
import { IRestaurantService } from "../types/services";

export class RestaurantService
  implements IRestaurantService<Restaurant, number>
{
  private setLoading = useGlobalStore.getState().setLoading;
  private setError = useGlobalStore.getState().setError;

  constructor(private restaurantRepo: IRepository<Restaurant, number>) {}

  async getRestaurants(): Promise<void> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.restaurantRepo.getAll();
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    useRestaurantStore.setState({ restaurants: response.data || [] });
  }

  async searchRestaurant(query: string): Promise<void> {
    this.setError(null);
    const response = await this.restaurantRepo.search(query);
    if (response.error) {
      this.setError(response.error.message);
    }
    useRestaurantStore.setState({ restaurants: response.data || [] });
  }

  async getRestaurantById(id: number): Promise<void> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.restaurantRepo.getById(id);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    useRestaurantStore.setState({ restaurant: response.data || null });
  }

  async addRestaurant(data: Restaurant): Promise<unknown> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.restaurantRepo.create(data);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }

  async updateRestaurant(data: Restaurant): Promise<unknown> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.restaurantRepo.update(data);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }

  async deleteRestaurant(id: number): Promise<number | undefined> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.restaurantRepo.delete(id);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }
}
