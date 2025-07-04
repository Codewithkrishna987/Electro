import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Pages/CartContext.jsx";
import ScrollTop from "./Components/ScrollTop.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
  </BrowserRouter>
);
