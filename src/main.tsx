import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Employees from "./pages/users/Employees";
import EndUser from "./pages/users/EndUsers";
import Resturants from "./pages/admin/Restaurants";
import Menu from "./pages/admin/Menu";
import Insights from "./pages/admin/Insights";
import Settings from "./pages/admin/Settings";
import AddEmployees from "./components/modals/AddEmployees";
import MenuDetails from "./components/dashboard/menu/MenuDetails";
import AccessControl from "./components/dashboard/Settings/AccessControl";
import UserControl from "./components/dashboard/Settings/UserControl";
import PrivateRoute from "./PrivateRoute";
import Access from "./pages/Access";

const router = createBrowserRouter([
  {
    
    path: "/",
    element:
    <PrivateRoute>
      <Layout />
    </PrivateRoute>,
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
        path: "/resturants",
        element: <Resturants />,
      },
      {
        path: "/menu",
        element: <Menu />,
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
        path: "/employees/add-employees",
        element: <AddEmployees />,
      },
      {
        path: "/menu/:id",
        element: <MenuDetails />,
      },
      {
        path: "/settings/access-control",
        element: <AccessControl />,
      },
      {
        path: "/settings/user-control",
        element: <UserControl />,
      },
    ],
  },

  {
    path: "/login",
    element: <Access/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
