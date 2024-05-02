import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../style/pages/hostPage/hostLayouts.scss";

function HostLayout() {
  return (
    <main className="host-page page-content">
      <div className="container">
        <nav className="host-nav">
          <NavLink to="." end>
            dashboard
          </NavLink>
          <NavLink to="income">income</NavLink>
          <NavLink to="vans">vans</NavLink>
          <NavLink to="reviews">reviews</NavLink>
        </nav>
      <Outlet />
      </div>
    </main>
  );
}

export default HostLayout;
