import SideBar from "./components/dashboard/SideBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <SideBar />
      <main className="ml-[290px] bg-[#F3F2F7] min-h-screen h-full max-w-[calc(100vw-290px)] py-3 px-3">
        <Outlet />
        {/* <div className="px-[2.8125rem] w-full">
        </div> */}
      </main>
    </>
  );
};

export default Layout;
