import React from "react";
import { Outlet } from "react-router-dom";

// style files:
import "../style/layouts.scss";

// layouts Components:
import Header from "./header";
import Footer from "./footer";

function Layouts() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layouts;
