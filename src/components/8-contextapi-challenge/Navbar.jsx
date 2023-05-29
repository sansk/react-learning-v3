import { useState, createContext } from "react";
import { NavLinks } from "./NavLinks";

export const NavbarContext = createContext();
console.log(NavbarContext);

export const Navbar = () => {
  const [user, setUser] = useState({ name: "SK" });

  const logOut = () => {
    if (user.name) {
      setUser(null);
    }
  };
  return (
    <NavbarContext.Provider value={{ user, logOut }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
