import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/dashboards/Dashboard";
import Orders from "./pages/dashboards/Orders";
import Employees from "./pages/dashboards/Users/Employees";
import EndUser from "./pages/dashboards/Users/EndUser";
import Resturants from "./pages/dashboards/Admin/Resturants";
import Menu from "./pages/dashboards/Admin/Menu";
import Insights from "./pages/dashboards/Admin/Insights";
import Settings from "./pages/dashboards/Admin/Settings";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
