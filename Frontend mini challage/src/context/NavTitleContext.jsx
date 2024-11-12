import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NavTitleContext = createContext();

function NavTitleProvider({ children }) {
  const [navTitle, setNavTitle] = useState(null);
  const { title } = useParams();

  useEffect(() => {
    if (title) {
      setNavTitle(title);
    } else {
      setNavTitle(null);
    }
  }, [title]);

  return (
    <NavTitleContext.Provider value={{ navTitle, setNavTitle }}>
      {children}
    </NavTitleContext.Provider>
  );
}

export { NavTitleProvider };
export default NavTitleContext;
