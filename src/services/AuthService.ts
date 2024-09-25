import { useAuthStore, useGlobalStore } from "../store";
import { IAuthRepository } from "../types/repository";
import { SignUp } from "../types/auth";
import { IAuthService } from "../types/services";

export class AuthService implements IAuthService {
  private setLoading = useGlobalStore.getState().setLoading;
  private setError = useGlobalStore.getState().setError;

  constructor(private authRepo: IAuthRepository) {}

  async login(credentials: { email: string; password: string; }): Promise<void> {
        this.setError(null);
        this.setLoading(true);
      const response = await this.authRepo.login(credentials);
      if (response.error) {
        this.setError(response.error?.message);
        this.setLoading(false);
      } else if (response.data) {
        const { token } = response.data;
        useAuthStore.getState().setToken(token!);
        this.setLoading(false);
      } else {
        this.setLoading(false);
        this.setError("Unexpected Error");
      }
  }

  async signUp(data: SignUp): Promise<unknown> {
      const response = await this.authRepo.signUp(data);
      if (response.error) {
        this.setError(response.error?.message);
        this.setLoading(false);
      } else {
        this.setLoading(false);
        return response.data;
      }
  }

  async logout(): Promise<void> {
        try {
          useAuthStore.getState().setToken(null);
        } catch (error: unknown) {
          if (error instanceof Error) {
            this.setError(error.message);
          } else {
            this.setError("Unkown error occured");
          }
        }
  }
}