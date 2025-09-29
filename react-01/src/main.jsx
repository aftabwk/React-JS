import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./pages/Counter.jsx";
import CardListing from "./pages/CardListing.jsx";
import Background from "./pages/Background.jsx";
import PasswordGenerator from "./pages/PasswordGenerator.jsx";
import CurrencyConvirter from "./pages/CurrencyConvirter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Counter />
    <CardListing />
    {/* <Background /> */}
    <PasswordGenerator />
    <CurrencyConvirter />
  </StrictMode>
);
