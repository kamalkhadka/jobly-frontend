import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "./UserContext";

const Navigation = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  const navigation = currentUser
    ? loggedInUserNavigation()
    : loggedOutNavigation();

  function loggedInUserNavigation() {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={logout}>
            Logout
          </Link>
        </li>
      </>
    );
  }

  function loggedOutNavigation() {
    return (
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <Link className="navbar-brand" to="/">
        Jobly
      </Link>
      <ul className="navbar-nav ml-auto">{navigation}</ul>
    </nav>
  );
};

export default Navigation;
