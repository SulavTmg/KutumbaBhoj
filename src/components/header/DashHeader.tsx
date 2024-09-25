import { useState } from "react";
import profile from "../../assets/profile/Pp.png";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/assets";
import { useService } from "../../providers/ServiceProvider";
import HamBurgerMenu from "../navbar/HamBurgerMenu";

const DashHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();
  const { authService } = useService();
  const handleLogout = async () => {
    await authService.logout();
    navigate("/login");
  };

  const handleIsActive = () => {
    setIsActive(!isActive);
    console.log(isActive)
  }

  const {
    icons: { MsgIcon, BellIcon, SearchIcon, ListIcon },
  } = assets;
  return (
    <>
      <header className="bg-white  px-10 py-4 -m-3 mb-8">
        <div className="flex justify-between items-center">
          <div className="ml-2 max-lg:hidden">
            <h1 className="text-[#CE1B22] font-bold text-[28px]">Welcome</h1>
            <p className="text-[#808080] -mt-[2px] pl-[2px] tracking-wide font-josefin">
              Your dashboard is ready
            </p>
          </div>
          <div className="ml-2 hidden max-lg:block">
            <button onClick={handleIsActive}>
              <img src={ListIcon} className="size-[28px]"/>
            </button>
          </div>
          <HamBurgerMenu handleIsActive = {handleIsActive} isActive = {isActive}/>
          <nav>
            <ul className="flex items-center gap-8">
              <li className="max-[1085px]:hidden">
                <div className="relative">
                  <button className="absolute left-5 top-[14.5px]">
                    <img src={SearchIcon} />
                  </button>
                  <input
                    placeholder="Search for something"
                    className="border rounded-[40px] text-sm outline-none pl-14 pr-4 w-[280px] py-3 bg-[#F5F7FA]"
                  />
                </div>
              </li>
              <li>
                <div className="bg-[#F5F7FA] rounded-full size-[48px]">
                  <img src={MsgIcon} className="py-3 px-3" />
                </div>
              </li>
              <li>
                <div className="bg-[#F5F7FA] rounded-full size-[48px]">
                  <img src={BellIcon} className="py-3 px-3" />
                </div>
              </li>
              <li>
                <div className="relative size-[48px]">
                  <div
                    onClick={() => setIsVisible(!isVisible)}
                    className={`left-0 right-0 top-0 bottom-0 fixed inset-0 z-20 ${
                      isVisible ? "visible" : "invisible"
                    }`}
                  ></div>
                  <button onClick={() => setIsVisible(!isVisible)}>
                    <img
                      src={profile}
                      className="border rounded-full cursor-pointer"
                    />
                  </button>
                  {isVisible && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute mt-2 z-30 w-32 right-1 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <ul>
                        <li>
                          <button
                            className=" block w-full px-4 py-2 text-sm text-gray-700"
                            onClick={() => handleLogout()}
                          >
                            Log Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden w-full mt-5 max-[1085px]:block">
          <div className="relative">
            <button className="absolute left-5 top-[12px]">
              <img src={SearchIcon} className="size-5" />
            </button>
            <input
              placeholder="Search for something"
              className="border rounded-[40px] text-sm outline-none pl-14 pr-4 w-full py-[10px] bg-[#F5F7FA]"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default DashHeader;
