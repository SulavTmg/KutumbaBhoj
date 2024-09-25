import { useEffect, useState } from "react";
import SideBar from "./components/navbar/SideBar.tsx";
import { Outlet, useNavigate } from "react-router-dom";
import { router } from "./main.tsx";
import { useService } from "./providers/ServiceProvider.tsx";

const Layout = () => {
  const navigate = useNavigate();
  const [location] = useState(router.state.location);
  const { customerService, employeeService, restaurantService, orderService } =
    useService();
  useEffect(() => {
    if (location.search) {
      navigate(location.pathname);
    }
    customerService.getCustomers();
    employeeService.getEmployees();
    orderService.getOrders();
    restaurantService.getRestaurants();
  }, [
    location.pathname,
    location.search,
    navigate,
    customerService,
    employeeService,
    orderService,
    restaurantService,
  ]);

  return (
    <>
      <SideBar />
      <main className="lg:ml-[290px] bg-[#F3F2F7] min-h-screen h-full p-3 lg:max-w-[calc(100vw-290px)] ">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
