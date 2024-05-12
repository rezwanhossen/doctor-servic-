import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Router.jsx";
import FirbaseProvider from "./Components/Firbase/FirbaseProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <FirbaseProvider>
        <RouterProvider router={router} />
      </FirbaseProvider>
    </HelmetProvider>
  </React.StrictMode>
);
