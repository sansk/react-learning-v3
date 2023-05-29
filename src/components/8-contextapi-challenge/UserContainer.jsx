import { useContext } from "react";
import { NavbarContext } from "./Navbar";

export const UserContainer = () => {
  const { user, logOut } = useContext(NavbarContext);
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hi {user.name}</p>
          <button type="button" className="btn" onClick={logOut}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
