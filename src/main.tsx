import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/dashboards/Dashboard";
import Orders from "./pages/dashboards/Orders";
import Employees from "./pages/dashboards/users/Employees";
import EndUser from "./pages/dashboards/users/EndUsers";
import Resturants from "./pages/dashboards/admin/Restaurants";
import Menu from "./pages/dashboards/admin/Menu";
import Insights from "./pages/dashboards/admin/Insights";
import Settings from "./pages/dashboards/admin/Settings";
import AddEmployees from "./actions/AddEmployees";
import MenuDetails from "./pages/dashboards/menu/MenuDetails";
// import MenuLists from "./components/dashboard/Menu/MenuLists";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        element: <MenuDetails/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
