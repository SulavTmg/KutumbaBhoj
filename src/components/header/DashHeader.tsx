import { useState } from "react";
import profile from "../../assets/profile/Pp.png";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/assets";
import { accessRepository } from "../../providers/RepositoryProvider";

const DashHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await accessRepository.logout();
    navigate("/login");
  };

  const {
    icons: { MsgIcon, BellIcon, SearchIcon },
  } = assets;
  return (
    <>
      <header className="bg-white flex flex-wrap justify-between items-center px-10 py-4 -m-3 mb-8">
        <div className="ml-2">
          <h1 className="text-[#CE1B22] font-bold text-[28px]">Welcome</h1>
          <p className="text-[#808080] -mt-[2px] pl-[2px] tracking-wide font-josefin">
            Your dashboard is ready
          </p>
        </div>
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <div className="relative">
                <button className="absolute left-5 top-[14.5px]">
                  <img src={SearchIcon} />
                </button>
                <input
                  placeholder="Search for something"
                  className="border rounded-[40px] outline-none pl-14 w-[280px] py-3 bg-[#F5F7FA]"
                />
              </div>
            </li>
            <li>
              <div className="bg-[#F5F7FA] rounded-full">
                <img src={MsgIcon} className="py-3 px-3" />
              </div>
            </li>
            <li>
              <div className="bg-[#F5F7FA] rounded-full">
                <img src={BellIcon} className="py-3 px-3" />
              </div>
            </li>
            <li>
              <div className="relative">
                <div
                  onClick={() => setIsVisible(!isVisible)}
                  className={`left-0 right-0 top-0 bottom-0 fixed inset-0 z-20 ${
                    isVisible ? "visible" : "invisible"
                  }`}
                ></div>
                <button onClick={() => setIsVisible(!isVisible)}>
                  <img
                    src={profile}
                    className="size-[48px] border rounded-full cursor-pointer"
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
      </header>
    </>
  );
};

export default DashHeader;
