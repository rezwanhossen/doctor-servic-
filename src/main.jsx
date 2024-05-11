import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Route/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
