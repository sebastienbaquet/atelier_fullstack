import React from "react";
import { useNavigate } from "react-router-dom";
import Moto from "./Moto";

function MotoMoto() {
  const navigate = useNavigate();

  const handleReturnToApp = () => {
    navigate("/");
  };
  const handleFormulaire = () => {
    navigate("/motos/formulaire");
  };

  return (
    <div>
      <Moto />
      <button type="button" onClick={handleReturnToApp}>
        Retourner
      </button>
      <button type="button" onClick={handleFormulaire}>
        Formulaire
      </button>
    </div>
  );
}

export default MotoMoto;
