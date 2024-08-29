import { FetchAPI } from "../api/FetchAPI";
import { globalStore, orderStore } from "../store";
import { Order, OrderData } from "../types/order";
import { IRepository } from "../types/repository";

export class OrderRepository implements IRepository{
  private api: FetchAPI;
  private basePath = "/orders";
  private globalState = globalStore.getState();

  constructor(api: FetchAPI) {
    this.api = api;
  }

  async search(query: string) {
    this.globalState.setError(null);
    const response = await this.api.get<Order[]>(
      `${this.basePath}/search?searchTerm=${query}`
    );
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    orderStore.setState({ orders: response.data || [] });
  }

  async getAll() {
    this.globalState.setLoading(true);
    this.globalState.setError(null);
    const response = await this.api.get<Order[]>(`${this.basePath}`);
    if (response.error) {
      this.globalState.setError(response.error.message);
      this.globalState.setLoading(false);
    }
    orderStore.setState({ orders: response.data || [] });
  }

  async getById(id: number) {
    this.globalState.setLoading(true);
    this.globalState.setError(null);
    const response = await this.api.get<Order[]>(
      `/orderdetails/${id}?id=${id}`
    );
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    orderStore.setState({
      order: response.data?.length ? response.data[0] : null,
    });
    this.globalState.setLoading(false);
  }

  async create(data: OrderData) {
    this.globalState.setError(null);
    const response = await this.api.put<OrderData>(`${this.basePath}`, data);
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    return response.data;
  }

  async update(data: OrderData) {
    const response = await this.api.put<OrderData>(`${this.basePath}`, data);
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
