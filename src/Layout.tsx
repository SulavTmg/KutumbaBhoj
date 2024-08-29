import { useEffect, useState } from "react";
import SideBar from "./components/navbar/SideBar.tsx";
import { Outlet, useNavigate } from "react-router-dom";
import { router } from "./main.tsx";
import {
  customerRepository,
  employeeRepository,
  orderRepository,
  restaurantRepository,
} from "./providers/RepositoryProvider.ts";

const Layout = () => {
  const navigate = useNavigate();
  const [location] = useState(router.state.location);

  useEffect(() => {
    if (location.search) {
      navigate(location.pathname);
    }
    employeeRepository.getAll();
    orderRepository.getAll();
    customerRepository.getAll();
    restaurantRepository.getAll();
  }, [location.pathname, location.search, navigate]);
  
  return (
    <>
      <SideBar />
      <main className="ml-[290px] bg-[#F3F2F7] min-h-screen h-full max-w-[calc(100vw-290px)] p-3">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
