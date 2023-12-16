import React from "react";
import { useNavigate } from "react-router-dom";
import Moto from "./Moto";

function MotoMoto() {
  const navigate = useNavigate();

  const handleReturnToApp = () => {
    navigate("/");
  };

  return (
    <div>
      <Moto />
      <button type="button" onClick={handleReturnToApp}>
        Retourner
      </button>
    </div>
  );
}

export default MotoMoto;
