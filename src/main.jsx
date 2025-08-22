import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "preline"; // Add this line to import Preline's JavaScript

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
