import { useNavigate } from "react-router-dom";
import { useEffect, PropsWithChildren } from "react";
import userDetails from "./utils/userDetails";

type PrivateRouteProps = PropsWithChildren;

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const navigate = useNavigate();
  console.log(userDetails())
  useEffect(() => {
    if (userDetails() === null) {
      return navigate("/login", { replace: true });
    }
  }, [navigate]);

  return children;
};

export default PrivateRoute;
