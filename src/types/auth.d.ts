interface SignUp {
  name: string;
  password: string;
  email: string;
  phone: string;
  address: string;
}

export type AuthState = {
  setToken: (token: string | null) => void;
};
