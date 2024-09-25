import { FetchAPI } from "../api/FetchAPI";
import { SignUp } from "../types/auth";
import { IAuthRepository } from "../types/repository";

export class AuthRepository implements IAuthRepository {
  private api: FetchAPI;

  constructor(api: FetchAPI) {
    this.api = api;
  }

  async login(credentials: { email: string; password: string }) {
    return await this.api.post<{
      token?: string;
      message?: string;
    }>("/Logins", credentials);
  }

  async signUp(data: SignUp) {
    return await this.api.post<{
      message?: string;
    }>("/account/register", data);
  }
}
