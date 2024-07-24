import { useNavigate } from "react-router-dom";
import { useEffect, PropsWithChildren } from "react";
import userDetails from "./utils/userDetails";

type PrivateRouteProps = PropsWithChildren;

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!userDetails()) {
      return navigate("/login", { replace: true });
    }
  }, [navigate]);

  return userDetails()? children : <></>;
};

export default PrivateRoute;
