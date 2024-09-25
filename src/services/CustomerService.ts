import { useCustomerStore, useGlobalStore } from "../store"; // Zustand store
import { Customer } from "../types/customer";
import { IRepository } from "../types/repository";
import { ICustomerService } from "../types/services";

export class CustomerService implements ICustomerService<Customer, number> {
  private setLoading = useGlobalStore.getState().setLoading;
  private setError = useGlobalStore.getState().setError;

  constructor(private customerRepo: IRepository<Customer, number>) {}

  async getCustomers(): Promise<void> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.customerRepo.getAll();
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    useCustomerStore.setState({ customers: response.data || [] });
  }

  async searchCustomer(query: string): Promise<void> {
    this.setError(null);
    const response = await this.customerRepo.search(query);
    if (response.error) {
      this.setError(response.error.message);
    }
    useCustomerStore.setState({ customers: response.data || [] });
  }

  async getCustomerById(id: number): Promise<void> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.customerRepo.getById(id);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    useCustomerStore.setState({ customer: response.data || null });
  }

  async addCustomer(data: Customer): Promise<unknown> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.customerRepo.create(data);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }

  async updateCustomer(data: Customer): Promise<unknown> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.customerRepo.update(data);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }

  async deleteCustomer(id: number): Promise<number | undefined> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.customerRepo.delete(id);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }
}
