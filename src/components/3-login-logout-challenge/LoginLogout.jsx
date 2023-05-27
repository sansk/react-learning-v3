import { useState } from "react";

export const LoginLogout = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      name: "SK",
      role: "Full-Stack Developer",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};
