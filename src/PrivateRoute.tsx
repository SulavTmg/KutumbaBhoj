import { Navigate } from "react-router-dom";
import userDetails from "./utils/userDetails";
import { PropsWithChildren } from "react";

const PrivateRoute = ({ children }: PropsWithChildren) => {
  return userDetails() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
