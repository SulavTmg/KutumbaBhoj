import { FetchAPI } from "../api/FetchAPI";
import { customerStore, globalStore } from "../store";
import { AddCustomer, Customer, EditCustomer } from "../types/customer";
import { IRepository } from "../types/repository";

export class CustomerRepository implements IRepository {
  private api: FetchAPI;
  private basePath = "/customers";
  private globalState = globalStore.getState();

  constructor(api: FetchAPI) {
    this.api = api;
  }

  async search(query: string) {
    this.globalState.setError(null);
    const response = await this.api.get<Customer[]>(
      `${this.basePath}/search?search=${query}`
    );
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    customerStore.setState({ customers: response.data || [] });
  }

  async getAll() {
    this.globalState.setLoading(true);
    this.globalState.setError(null);
    const response = await this.api.get<Customer[]>(this.basePath);
    if (response.error) {
      this.globalState.setError(response.error.message);
      this.globalState.setLoading(false);
    }
    customerStore.setState({ customers: response.data || [] });
    this.globalState.setLoading(false);
  }

  async getById(id: number) {
    this.globalState.setLoading(true);
    this.globalState.setError(null);
    const response = await this.api.get<EditCustomer>(`${this.basePath}/${id}`);
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    customerStore.setState({ customer: response.data || null });
    this.globalState.setLoading(false);
  }

  async create(data: AddCustomer) {
    this.globalState.setError(null);
    const response = await this.api.post<AddCustomer>(this.basePath, data);
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    return response.data;
  }

  async update(data: EditCustomer) {
    const response = await this.api.put<EditCustomer>(`${this.basePath}`, data);
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
