import { App } from "./pages/Index";
import { Outlet } from "react-router-dom";

// -----------------------------
// Layout Component
// -----------------------------
// - Common wrapper for all pages (e.g., navbar, header)
// - <Outlet /> renders the matched child route inside Layout

const Layout = () => {
  return (
    <>
      {/* App component: common UI like navbar/header */}
      <App />

      {/* Outlet: placeholder for child route component */}
      <Outlet />
    </>
  );
};

export default Layout;
