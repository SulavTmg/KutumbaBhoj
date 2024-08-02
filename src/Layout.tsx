import { useEffect, useState } from "react";
import SideBar from "./components/navbar/SideBar.tsx";
import { Outlet, useNavigate } from "react-router-dom";
import { router } from "./main.tsx";
import { Toaster } from "react-hot-toast";
import {
  customerStore,
  employeeStore,
  orderStore,
  restaurantStore,
} from "./store";

const Layout = () => {
  const navigate = useNavigate();
  const [location] = useState(router.state.location);

  useEffect(() => {
    if (location.search) {
      navigate(location.pathname);
    }
    employeeStore.getState().getEmployees();
    orderStore.getState().getOrders();
    customerStore.getState().getCustomers();
    restaurantStore.getState().getRestaurants();
  }, [location.pathname, location.search, navigate]);
  return (
    <>
      <SideBar />
      <main className="ml-[290px] bg-[#F3F2F7] min-h-screen h-full max-w-[calc(100vw-290px)] p-3">
        <Outlet />
        <Toaster/>
      </main>
    </>
  );
};

export default Layout;
