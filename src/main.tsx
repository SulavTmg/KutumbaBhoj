import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Employees from "./pages/users/Employees";
import EndUser from "./pages/users/Customers";
import Resturants from "./pages/admin/Restaurants";
import Menu from "./pages/admin/Menu";
import Insights from "./pages/admin/Insights";
import Settings from "./pages/admin/Settings";
import AddEmployees from "./components/modals/AddEmployees";
import MenuDetails from "./components/menu_details/MenuDetails";
import AccessControl from "./components/settings/AccessControl";
import UserControl from "./components/settings/UserControl";
import PrivateRoute from "./PrivateRoute";
import Access from "./pages/Access";
import AddRestaurant from "./components/modals/AddRestaurant";
import Orderdetails from "./components/order_details/Orderdetails";
import AddMenuCategory from "./components/modals/AddMenuCategory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/end-user",
        element: <EndUser />,
      },
      {
        path: "/restaurants",
        element: <Resturants />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/menu/:id",
        element: <MenuDetails />,
      },
      {
        path: "/menu/add-category/:id",
        element: <AddMenuCategory />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/employees/add-employee",
        element: <AddEmployees />,
      },

      {
        path: "/settings/access-control",
        element: <AccessControl />,
      },
      {
        path: "/settings/user-control",
        element: <UserControl />,
      },
      {
        path: "/restaurants/add-restaurant",
        element: <AddRestaurant />,
      },
      {
        path: "/orders/orderdetails/:id",
        element: <Orderdetails />,
      },
    ],
  },

  {
    path: "/login",
    element: <Access />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
