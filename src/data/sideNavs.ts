import assets from "../assets/assets";

const {
  icons: {
    DashIcon,
    CartIcon,
    EmployeesIcon,
    EndUserIcon,
    RestaurantIcon,
    MenuIcon,
    InsightsIcon,
    SettingsIcon,
    ActiveEmpIcon,
    ActiveCartIcon,
    ActiveDashIcon,
    ActiveEndUser,
    ActiveMenu,
    ActiveRestaurant,
    ActiveInsights,
    ActiveSettings,
  },
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
    path: "/restaurants",
    icon: RestaurantIcon,
    activeIcon: ActiveRestaurant,
    name: "Restaurant",
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
