import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLoggedOut } from "../hooks/useLoggedOut";
import { Redirect } from "react-router-dom";

const AppNavBar = () => {
  const { logOut } = useLoggedOut();
  const handleSignOut = () => {
    logOut();
  };
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
      <div className="container">
        <Link to={user ? `/` : `/login`} className="navbar-brand">
          Client Panels
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto" style={{ display: "flex", flexDirection: "row" }}>
            {user ? (
              <li className="nav-items">
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
              </li>
            ) : (
              <Redirect to="/login" />
            )}
          </ul>
          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-items" style={{ marginRight: "30px" }}>
                  {user.email}
                </li>
                <li className="nav-items" onClick={handleSignOut} style={{ cursor: "pointer" }}>
                  Log out
                </li>
              </>
            ) : (
              <>
                <li className="nav-right">
                  <Link to="/login" className="nav-link" style={{ flex: "1" }}>
                    Login
                  </Link>
                </li>
                <li className="nav-items">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavBar;
