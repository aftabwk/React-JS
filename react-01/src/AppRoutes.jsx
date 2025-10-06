import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  Background,
  CardListing,
  Counter,
  CurrencyConvirter,
  PasswordGenerator,
} from "./pages/Index";

// -----------------------------
// AppRoutes: Define all routes
// -----------------------------
// - createBrowserRouter() creates a router instance for RouterProvider
// - Layout wraps all child pages via <Outlet />
// - Children routes render inside Layout
const AppRoutes = createBrowserRouter([
  {
    path: "/", // Root URL
    element: <Layout />, // Common wrapper
    children: [
      { path: "counter", element: <Counter /> },
      { path: "cards", element: <CardListing /> },
      { path: "bg", element: <Background /> },
      { path: "password", element: <PasswordGenerator /> },
      { path: "currency", element: <CurrencyConvirter /> },
    ],
  },
]);

export default AppRoutes;
