import { FetchAPI } from "../api/FetchAPI";
import { globalStore, authStore } from "../store";
import { SignUp } from "../types/auth";
import { IAccessRepository } from "../types/repository";

export class AccessRepository implements IAccessRepository {
  private api: FetchAPI;
  private globalState = globalStore.getState();

  constructor(api: FetchAPI) {
    this.api = api;
  }

  async login(credentials: { email: string; password: string }) {
    this.globalState.setLoading(true);
    this.globalState.setError(null);
    const response = await this.api.post<{
      token?: string;
      message?: string;
    }>("/Logins", credentials);
    if (response.error) {
      this.globalState.setError(response.error?.message);
      this.globalState.setLoading(false);
    } else if (response.data) {
      const { token } = response.data;
      authStore.getState().setToken(token!);
      this.globalState.setLoading(false);
    } else {
      this.globalState.setError("Unexpected Error");
      this.globalState.setLoading(false);
    }
  }

  async signUp(data: SignUp) {
    this.globalState.setLoading(true);
    this.globalState.setError(null);
    const response = await this.api.post<{
      message?: string;
    }>("/account/register", data);
    if (response.error) {
      this.globalState.setError(response.error?.message);
      this.globalState.setLoading(false);
    } else {
      this.globalState.setLoading(false);
      return response.data;
    }
  }

  async logout() {
    try {
      authStore.getState().setToken(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.globalState.setError(error.message);
      } else {
       this.globalState.setError("Unkown error occured");
      }
    }
  }

  async logOut() {}
}
