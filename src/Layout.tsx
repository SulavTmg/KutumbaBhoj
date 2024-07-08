import SideBar from "./components/dashboard/SideBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <SideBar />
      <main className="ml-[290px] bg-[#F5F7FA] h-full min-h-screen flex flex-col">
        <Outlet />
        {/* <div className="px-[2.8125rem] w-full">
        </div> */}
      </main>
    </>
  );
};

export default Layout;
