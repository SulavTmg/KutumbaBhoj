interface SignUp {
  name: string;
  password: string;
  email: string;
  phone: string;
  address: string;
}

export type AuthState = {
  setToken: (token: string | null) => void;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  signUp: (values: SignUp) => Promise<void>;
  logout: () => void;
};
