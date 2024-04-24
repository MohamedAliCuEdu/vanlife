// react component:
import React from "react";
import { Link, NavLink } from "react-router-dom";
import User from "./user";
import "../style/layouts.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link className="logo" to="/">
          <img src="logo.png" alt="#vanlife " />
        </Link>
        <nav>
          <NavLink to="host" title="Host page">
            host
          </NavLink>
          <NavLink to="vans" title="Vans Page">
            vans
          </NavLink>
          <NavLink to="about" title="About Page">
            about
          </NavLink>
          <User />
        </nav>
      </div>
    </header>
  );
}

export default Header;
