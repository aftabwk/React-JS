import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeChanger from "./ThemeChanger.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeChanger />
  </StrictMode>
);
