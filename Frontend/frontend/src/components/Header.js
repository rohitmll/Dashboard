import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-body-secondary">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/">
            <span className="navbar-toggler-icon"></span>
            {/* </button> */}
            <span className="navbar-brand mb-0 h1">
              Data Visualisation Dashboard
            </span>
          </NavLink>
          <div className="form">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search..."
                aria-label="Search"
              />

              <NavLink to="/form">
                {" "}
                <img
                  src="https://static.thenounproject.com/png/4851855-200.png"
                  alt="Admin Profile Pic"
                  width="24"
                  height="24"
                ></img>
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
