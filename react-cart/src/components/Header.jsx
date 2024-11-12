import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import cartIcon from "../assets/images/cart.png";
import { CartContext } from "../context/Cartcontext";

function Header() {
  const cartStyle = {
    background: "#f59e0d",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };
  const { cart } = useContext(CartContext);

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 font-medium ">
        <Link to="/">
          <img src={logo} alt="logo" style={{ height: "45px" }} />
        </Link>

        <ul className="flex items-center gap-6 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-black"} text-xl`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-black"} text-xl`
              }
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/cart">
              <div style={cartStyle}>
                <span className="mr-2 ">{cart.totalItems}</span>
                <img src={cartIcon} alt="cartIcon" />
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
