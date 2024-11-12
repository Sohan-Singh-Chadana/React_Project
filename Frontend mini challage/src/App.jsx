import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { NavTitleProvider } from "./context/NavTitleContext";
import { ComponentProvider } from "./context/ComponentContext";

function App() {
  return (
    <>
      <NavTitleProvider>
        <ComponentProvider>
          <Navbar />
          <Outlet />
        </ComponentProvider>
      </NavTitleProvider>
    </>
  );
}

export default App;
