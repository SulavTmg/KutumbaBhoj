import { IRepository } from "../types/repository";
import { FetchAPI } from "../api/FetchAPI";
import { FetchResponse } from "../types/api";

export class BaseRepository<T, ID> implements IRepository<T, ID> {
  private api: FetchAPI;
  private basePath: string;
  private searchTerm: string;

  constructor(api: FetchAPI, basePath: string, searchTerm: string) {
    this.api = api;
    this.basePath = basePath;
    this.searchTerm = searchTerm;
  }

  async search(query: string): Promise<FetchResponse<T[]>> {
    return this.api.get<T[]>(
      `${this.basePath}/search?${this.searchTerm}=${query}`
    );
  }

  async getAll(): Promise<FetchResponse<T[]>> {
    return this.api.get<T[]>(this.basePath);
  }

  async getById(id: ID, endpoint?: string): Promise<FetchResponse<T>> {
    return this.api.get<T>(
      `${endpoint ? `${endpoint}/${id}?=${id}` : `${this.basePath}/${id}`}`
    );
  }

  async create(data: T): Promise<FetchResponse<T>> {
    return this.api.post<T>(this.basePath, data);
  }

  async update(data: T): Promise<FetchResponse<T>> {
    return this.api.put<T>(`${this.basePath}`, data);
  }

  async delete(id: ID): Promise<FetchResponse<ID>> {
    return this.api.delete<ID>(`${this.basePath}/${id}`);
  }
}
