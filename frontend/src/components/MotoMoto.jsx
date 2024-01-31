import React from "react";
import { useNavigate } from "react-router-dom";
import Moto from "./Moto";

function MotoMoto() {
  const navigate = useNavigate();

  const handleFormulaire = () => {
    navigate("/motos/formulaire");
  };

  return (
    <div>
      <Moto />

      <button type="button" onClick={handleFormulaire}>
        Formulaire
      </button>
    </div>
  );
}

export default MotoMoto;
