import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  Background,
  CardListing,
  Counter,
  CurrencyConvirter,
  Github,
  PasswordGenerator,
} from "./pages/Index";
import { githubInfoLoader } from "./pages/GithubCall.js";

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
      { path: "/", element: <Navigate to="/counter" replace /> },
      { path: "counter", element: <Counter /> },
      { path: "cards", element: <CardListing /> },
      { path: "bg", element: <Background /> },
      { path: "password", element: <PasswordGenerator /> },
      { path: "currency", element: <CurrencyConvirter /> },
      {
        path: "github",
        loader: githubInfoLoader,
        element: <Github />,
      }, //loader: It helps in fetching data when you click on navLink from api and stor in catche memory. it calls data before useEffect
    ],
  },
]);

export default AppRoutes;
