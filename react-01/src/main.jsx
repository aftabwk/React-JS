import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AppRoutes from "./AppRoutes";

// -----------------------------
// main.jsx: React entry point
// -----------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* StrictMode: enables extra checks in development */}

    {/* RouterProvider: supplies routing context to the app */}
    <RouterProvider router={AppRoutes} />
  </React.StrictMode>
);
