import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
import EditRestaurant from "./components/modals/EditRestaurant";
import EditEmployee from "./components/modals/EditEmployee";
import EditEndUser from "./components/modals/EditCustomer";
import EditMenuItems from "./components/modals/EditMenuItems";
import AddMenuItem from "./components/modals/AddMenuItem";

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
        path: "/employees/edit-employee/:id",
        element: <EditEmployee />,
      },
      {
        path: "/end-user",
        element: <EndUser />,
      },
      {
        path: "/end-user/edit-endUser/:id",
        element: <EditEndUser />,
      },
      {
        path: "/restaurants",
        element: <Resturants />,
      },
      {
        path: "/restaurants/add-restaurant",
        element: <AddRestaurant />,
      },
      {
        path: "/restaurants/edit-restaurant/:id",
        element: <EditRestaurant />,
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
        path: "/menu/add-item/:restaurantId/:categoryId",
        element: <AddMenuItem />,
      },
      {
        path: "/menu/edit-items/:id",
        element: <EditMenuItems />,
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
    <Toaster />
  </React.StrictMode>
);
