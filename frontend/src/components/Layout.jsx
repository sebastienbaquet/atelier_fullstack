import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./Layout.css";

function Layout() {
  return (
    <div>
      <Footer />
      <Outlet />
    </div>
  );
}

export default Layout;
