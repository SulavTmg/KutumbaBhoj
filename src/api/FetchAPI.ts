import { FetchResponse, FetchOptions } from "../types/api";

export class FetchAPI {
  private baseURL: string;
  private token: string | null;

  constructor(baseURL: string = import.meta.env.VITE_API_BASE_URL) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem("token");
  }

  private async request<T>(
    path: string,
    options: FetchOptions = {}
  ): Promise<FetchResponse<T>> {
    const url = `${this.baseURL}${path}`;
    try {
      const reqHeader = new Headers();

      if (!(options.body instanceof FormData)) {
        reqHeader.append("Content-Type", "application/json");
      }
      if (this.token) {
        reqHeader.append("Authorization", `Bearer ${this.token}`);
      }

      const reqOptions = { ...options, headers: reqHeader };
      const response = await fetch(url, reqOptions);
      if (!response.ok) {
        return { error: await response.json() };
      }

      const data = await response.json();
      return { data };
    } catch (error) {
      const err = error as Error;
      return { error: err };
    }
  }

  get<T>(
    path: string,
    headers: { [key: string]: string } = {}
  ): Promise<FetchResponse<T>> {
    return this.request<T>(path, { method: "GET", headers });
  }

  post<T>(
    path: string,
    body: unknown,
    headers: { [key: string]: string } = {}
  ): Promise<FetchResponse<T>> {
    const options: FetchOptions = {
      method: "POST",
      headers,
    };
    if (body instanceof FormData) {
      options.body = body;
    } else {
      options.body = JSON.stringify(body);
    }
    return this.request<T>(path, options);
  }

  delete<T>(
    path: string,
    headers: { [key: string]: string } = {}
  ): Promise<FetchResponse<T>> {
    return this.request<T>(path, { method: "DELETE", headers });
  }

  put<T>(
    path: string,
    body: unknown,
    headers: { [key: string]: string } = {}
  ): Promise<FetchResponse<T>> {
    const options: FetchOptions = {
      method: "PUT",
      headers,
    };
    if (body instanceof FormData) {
      options.body = body;
    } else {
      options.body = JSON.stringify(body);
    }
    return this.request(path, options);
  }
}
