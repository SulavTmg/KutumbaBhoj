import { useEffect, useState } from "react";
import SideBar from "./components/dashboard/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { customerStore, employeeStore, orderStore } from "./store";
import { router } from "./main.tsx";

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
  }, [location.pathname, location.search, navigate]);
  return (
    <>
      <SideBar />
      <main className="ml-[290px] bg-[#F3F2F7] min-h-screen h-full max-w-[calc(100vw-290px)] py-3 px-3">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
