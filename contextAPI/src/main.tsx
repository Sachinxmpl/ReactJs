import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { CartContextProvider } from "./context/cartContext.tsx";

const Cart = lazy(() => import("./components/cart.tsx"));
const App = lazy(() => import("./App.tsx"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
