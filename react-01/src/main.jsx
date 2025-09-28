import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./Counter.jsx";
import CardListing from "./CardListing.jsx";
import Background from "./Background.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Counter />
    <CardListing />
    <Background />
  </StrictMode>
);
