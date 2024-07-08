import assets from "../assets/assets";

const {
  DashIcon,
  CartIcon,
  EmployeesIcon,
  EndUserIcon,
  ResturantIcon,
  MenuIcon,
  InsightsIcon,
  SettingsIcon,
  ActiveEmpIcon,
  ActiveCartIcon,
  ActiveDashIcon,
  ActiveEndUser,
  ActiveMenu,
  ActiveResturant,
  ActiveInsights,
  ActiveSettings,
} = assets;

export const defaultSec = [
  {
    path: "",
    icon: DashIcon,
    activeIcon: ActiveDashIcon,
    name: "Dashboard",
  },
  {
    path: "/orders",
    icon: CartIcon,
    activeIcon: ActiveCartIcon,
    name: "Orders",
  },
];

export const userSec = [
  {
    path: "/employees",
    icon: EmployeesIcon,
    activeIcon: ActiveEmpIcon,
    name: "Employess",
  },
  {
    path: "/end-user",
    icon: EndUserIcon,
    activeIcon: ActiveEndUser,
    name: "End-User",
  },
];

export const adminSec = [
  {
    path: "/resturants",
    icon: ResturantIcon,
    activeIcon: ActiveResturant,
    name: "Resturant",
  },
  {
    path: "/menu",
    icon: MenuIcon,
    activeIcon: ActiveMenu,
    name: "Menu",
  },
  {
    path: "/insights",
    icon: InsightsIcon,
    activeIcon: ActiveInsights,
    name: "Insights",
  },
  {
    path: "/settings",
    icon: SettingsIcon,
    activeIcon: ActiveSettings,
    name: "Settings",
  },
];
