import { useEffect } from "react";
import SideBar from "./components/dashboard/SideBar";
import { Outlet } from "react-router-dom";
import { employeeStore } from "./store";
const Layout = () => {

  useEffect(()=>{
      employeeStore.getState().getEmployees();
  },[])
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
