import React from "react";
import { Outlet } from "react-router-dom";
import connexion from "../services/connexion";

function LayoutDeconnect() {
  const handleLogout = async () => {
    try {
      await connexion.post("logout");
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <div>
      <a href="/">
        <button className="bdeconnection" type="button" onClick={handleLogout}>
          Déconnection
        </button>
      </a>
      <Outlet />
    </div>
  );
}
export default LayoutDeconnect;
