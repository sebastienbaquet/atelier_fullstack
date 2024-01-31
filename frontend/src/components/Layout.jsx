import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./Layout.css";

function Layout() {
  const navigate = useNavigate();
  const handleReturnToApp = () => {
    navigate("/");
  };
  return (
    <div>
      <Footer />
      <button
        className="bdeconnection"
        type="button"
        onClick={handleReturnToApp}
      >
        Déconnection
      </button>
      <Outlet />
    </div>
  );
}

export default Layout;
