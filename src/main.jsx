import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Domain from "./components/Routes/Domain.jsx";
import WebHosting from "./components/Routes/WebHosting.jsx";
import DedicatedServers from "./components/Routes/DedicatedServers.jsx";
import VirtualCloudServers from "./components/Routes/VirtualCloudServers.jsx";
import WordpressHosting from "./components/Routes/WordpressHosting.jsx";
import EmailHosting from "./components/Routes/EmailHosting.jsx";
import VpsHosting from "./components/Routes/VpsHosting.jsx";
import FreeHosting from "./components/Routes/FreeHosting.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <Navigate to="/domains" replace />,
      },
      {
        path: "/domains",
        element: <Domain />,
        
      },

      {
        path: "/webhosting",
        element: <WebHosting />,
      },

      {
        path: "/dedicatedservers",
        element: <DedicatedServers />,
      },

      {
        path: "/virtualcloud",
        element: <VirtualCloudServers />,
      },

      {
        path: "/wordpress",
        element: <WordpressHosting />,
      },

      {
        path: "/emailhosting",
        element: <EmailHosting />,
      },

      {
        path: "/vpshosting",
        element: <VpsHosting />,
      },

      {
        path: "/freeHosting",
        element: <FreeHosting />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
