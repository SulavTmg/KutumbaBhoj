import { useEmployeeStore, useGlobalStore } from "../store";
import { Employee } from "../types/employee";
import { IRepository } from "../types/repository";
import { IEmployeeService } from "../types/services";

export class EmployeeService implements IEmployeeService<Employee, number> {
  private setLoading = useGlobalStore.getState().setLoading;
  private setError = useGlobalStore.getState().setError;

  constructor(private employeeRepo: IRepository<Employee, number>) {}

  async getEmployees(): Promise<void> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.employeeRepo.getAll();
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    useEmployeeStore.setState({ employees: response.data || [] });
  }

  async searchEmployee(query: string): Promise<void> {
    this.setError(null);
    const response = await this.employeeRepo.search(query);
    if (response.error) {
      this.setError(response.error.message);
    }
    useEmployeeStore.setState({ employees: response.data || [] });
  }

  async getEmployeeById(id: number): Promise<void> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.employeeRepo.getById(id);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    useEmployeeStore.setState({ employee: response.data || null });
  }

  async addEmployee(data: Employee): Promise<unknown> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.employeeRepo.create(data);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }

  async updateEmployee(data: Employee): Promise<unknown> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.employeeRepo.update(data);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }

  async deleteEmployee(id: number): Promise<number | undefined> {
    this.setError(null);
    this.setLoading(true);
    const response = await this.employeeRepo.delete(id);
    if (response.error) {
      this.setError(response.error.message);
      this.setLoading(false);
    }
    this.setLoading(false);
    return response.data;
  }
}
