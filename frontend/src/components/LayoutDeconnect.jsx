import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function LayoutDeconnect() {
  const navigate = useNavigate();
  const handleReturnToApp = () => {
    navigate("/");
  };
  return (
    <div>
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

export default LayoutDeconnect;
