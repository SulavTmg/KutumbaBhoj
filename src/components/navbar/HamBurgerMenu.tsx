import assets from "../../assets/assets";
import { defaultSec, userSec, adminSec } from "../../data/sideNavs";
import { NavLink } from "react-router-dom";

type HamBurgerMenuProps = {
  handleIsActive: () => void;
  isActive: boolean;
};

const HamBurgerMenu = ({ handleIsActive, isActive }: HamBurgerMenuProps) => {
  const {
    logos: { Logo },
  } = assets;

  return (
    <>
      <div
        onClick={handleIsActive}
        className={`left-0 right-0 top-0 bottom-0 fixed z-20 transition-all duration-300 ease-[cubic-bezier(0.39,0.575,0.565,1)] transform ${
          isActive ? "opacity-100 visible" : "opacity-0 invisible"
        } bg-[rgba(0,0,0,.8)]`}
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`overflow-scroll z-20 top-0 left-0 w-[250px] fixed h-full bg-white transition-all duration-300 ease-[cubic-bezier(0.39,0.575,0.565,1)] transform ${
          isActive
            ? "translate-x-0 opacity-100 visible"
            : "-translate-x-full opacity-0 invisible"
        }`}
      >
        <nav className="text-xs px-[1.875rem] bg-white py-4 fixed z-20 bottom-0 top-0 w-full h-full border-r">
          <div className="flex flex-col min-w-full items-stretch">
            <a className="mb-[2.375rem] leading-6 text-center py-[6px]">
              <img src={Logo} />
            </a>
            <div className="flex flex-col gap-5">
              <div className="-mx-[1.875rem]">
                <ul className="flex flex-col">
                  {defaultSec.map((sec, index) => (
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
                              className="mr-6 size-4"
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
                              className="mr-6 size-4"
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
                              className="mr-6 size-4"
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
      </div>
    </>
  );
};

export default HamBurgerMenu;
