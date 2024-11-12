import { useContext } from "react";
import { Link } from "react-router-dom";
import NavTitleContext from "../context/NavTitleContext";

function Navbar() {
  const { navTitle } = useContext(NavTitleContext);

  return (
    <>
      <header className="p-4 flex items-center justify-center mb-5 shadow-lg bg-[#fafafa]">
        <nav>
          {navTitle !== null ? (
            <Link to="/" className="absolute top-2 left-3">
              <button className="bg-green-400 py-2 px-4 rounded-md ">
                Back
              </button>
            </Link>
          ) : (
            ""
          )}
          <h2 className="text-4xl py-2 font-medium">
            {navTitle === null ? "Frontend Mini Challenges " : navTitle}
          </h2>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
