import { jwtDecode } from "jwt-decode";

type UserPayload = {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
  jti: string;
  exp: number;
  iss: string;
  aud: string;
};

const userDetails = (): string | null => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const userDetails = jwtDecode<UserPayload>(token);
      return userDetails[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
      ];
    } catch (error) {
      console.error("Failed to decode token", error);
      return null;
    }
  }
  return null;
};

export default userDetails;
