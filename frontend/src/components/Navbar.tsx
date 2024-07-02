import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
      {isAuthenticated ? (
        <nav>
          {/* Content for authenticated users */}
        </nav>
      ) : (
        <nav>
          {/* Content for unauthenticated users */}
        </nav>
      )}
    </>
  );
};

export default Navbar;