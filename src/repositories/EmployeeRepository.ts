// import { IRepository } from "./IRepository";
import { FetchAPI } from "../api/FetchAPI";
import { Employee, EmployeeData } from "../types/employee";
import { employeeStore, globalStore } from "../store";
import { IRepository } from "../types/repository";

export class EmployeeRepository implements IRepository {
  private api: FetchAPI;
  private basePath = "/employee";
  private globalState = globalStore.getState();

  constructor(api: FetchAPI) {
    this.api = api;
  }

  async search(query: string) {
    this.globalState.setError(null);
    const response = await this.api.get<Employee[]>(
      `${this.basePath}/search?searchTerm=${query}`
    );
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    employeeStore.setState({ employees: response.data || [] });
  }

  async getAll() {
    this.globalState.setLoading(true);
    this.globalState.setError(null);
    const response = await this.api.get<Employee[]>(this.basePath);
    if (response.error) {
      this.globalState.setError(response.error.message);
      this.globalState.setLoading(false);
    }
    employeeStore.setState({ employees: response.data || [] });
    this.globalState.setLoading(false);
  }

  async getById(id: number) {
    this.globalState.setLoading(true);
    this.globalState.setError(null);
    const response = await this.api.get<Employee>(`${this.basePath}/${id}`);
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    employeeStore.setState({ employee: response.data || null });
    this.globalState.setLoading(false);
  }

  async create(data: EmployeeData) {
    this.globalState.setError(null);
    const response = await this.api.post<EmployeeData>(this.basePath, data);
    if (response.error) {
      this.globalState.setError(response.error.message);
    }
    return response.data;
  }

  async update(data: EmployeeData) {
    const response = await this.api.put<EmployeeData>(`${this.basePath}`, data);
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
