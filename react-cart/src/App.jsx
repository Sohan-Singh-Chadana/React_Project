import React, { useEffect, useState } from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components/index";
import { CartContext } from "./context/Cartcontext";

function App() {
  const [cart, setCart] = useState({});
  // Fetch cart from local storage

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <Outlet />
      </CartContext.Provider>
    </>
  );
}

export default App;
