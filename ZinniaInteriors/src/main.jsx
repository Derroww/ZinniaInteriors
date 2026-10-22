import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { ShopProvider } from "./Context/ShopContext";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <ShopProvider>
            <App />
          </ShopProvider>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </>,
);
