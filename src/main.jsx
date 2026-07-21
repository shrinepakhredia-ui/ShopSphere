import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./style/global.css";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(

  <StrictMode>

    <ThemeProvider>

      <AuthProvider>

        <CartProvider>

          <WishlistProvider>

            <App />

            <ToastContainer
              position="top-right"
              autoClose={2000}
              theme="colored"
            />

          </WishlistProvider>

        </CartProvider>

      </AuthProvider>

    </ThemeProvider>

  </StrictMode>

);