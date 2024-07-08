import assets from "../../assets/assets";
import { defaultSec, userSec, adminSec } from "../../data/sideNavs";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const { Logo } = assets;

  return (
    <nav className="max-w-[290px] px-[1.875rem] py-4 fixed z-20 bottom-0 top-0 w-full border-r">
      <div className="flex flex-col min-w-full items-stretch ">
        <a className="mb-[2.375rem] w-max leading-6 text-center py-[6px]">
          <img src={Logo} />
        </a>
        <div className="flex flex-col gap-5">
          <div className="-mx-[1.875rem]">
            <ul className="flex flex-col">
              {defaultSec.map((sec, index) => (
                <li key={index} className="px-[1.875rem]">
                  <NavLink
                    to={sec.path}
                    className={ ({ isActive }) =>
                      `${
                        isActive? "bg-[#00B074] bg-opacity-[15%] " : ""
                      }  px-6 rounded-lg py-3 flex items-center cursor-pointer`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <img
                          src={isActive ? sec.activeIcon : sec.icon}
                          className="mr-6"
                        />
                        <span
                          className={`${
                            isActive ? " font-bold text-[#126837] " : ""
                          }`}
                        >
                          {sec.name}
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="-mx-[1.875rem]">
            <div className="px-[1.875rem] ">
              <span className="pl-6 text-[#808080]">Users</span>
            </div>
            <ul className="flex flex-col">
              {userSec.map((sec, index) => (
                <li key={index} className="px-[1.875rem]">
                  <NavLink
                    to={sec.path}
                    className={({ isActive }) =>
                      `${
                        isActive ? "bg-[#00B074] bg-opacity-[15%] " : ""
                      }  px-6 rounded-lg py-3 flex items-center cursor-pointer`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <img
                          src={isActive ? sec.activeIcon : sec.icon}
                          className="mr-6"
                        />
                        <span
                          className={`${
                            isActive ? " font-bold text-[#126837] " : ""
                          }`}
                        >
                          {sec.name}
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="-mx-[1.875rem]">
            <div className="px-[1.875rem]">
              <span className="pl-6 text-[#808080]">Admin</span>
            </div>
            <ul className="flex flex-col">
              {adminSec.map((sec, index) => (
                <li key={index} className="px-[1.875rem]">
                  <NavLink
                    to={sec.path}
                    className={({ isActive }) =>
                      `${
                        isActive ? "bg-[#00B074] bg-opacity-[15%] " : ""
                      }  px-6 rounded-lg py-3 flex items-center cursor-pointer`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <img
                          src={isActive ? sec.activeIcon : sec.icon}
                          className="mr-6"
                        />
                        <span
                          className={`${
                            isActive ? " font-bold text-[#126837] " : ""
                          }`}
                        >
                          {sec.name}
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
