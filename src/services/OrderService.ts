import { useGlobalStore, useOrderStore } from "../store";
import { Order } from "../types/order";
import { IRepository } from "../types/repository";
import { IOrderService } from "../types/services";

export class OrderService implements IOrderService<Order, number> {
  private setLoading = useGlobalStore.getState().setLoading;
  private setError = useGlobalStore.getState().setError;

  constructor(private orderRepo: IRepository<Order, number>) {}

  async getOrders(): Promise<void> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.orderRepo.getAll();
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    useOrderStore.setState({ orders: response.data || [] });
  }

  async searchOrder(query: string): Promise<void> {
    this.setError(null);
    const response = await this.orderRepo.search(query);
    if (response.error) {
      this.setError(response.error.message);
    }
    useOrderStore.setState({ orders: response.data || [] });
  }

  async getOrderById(id: number): Promise<void> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.orderRepo.getById(id, "/orderdetails");
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    const orderData = Array.isArray(response.data) && response.data.length > 0
        ? response.data[0]
        : response.data;
    useOrderStore.setState({ order: orderData || null });
  }

  async addOrder(data: Order): Promise<unknown> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.orderRepo.create(data);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }

  async updateOrder(data: Order): Promise<unknown> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.orderRepo.update(data);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }

  async deleteOrder(id: number): Promise<number | undefined> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.orderRepo.delete(id);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }
}
