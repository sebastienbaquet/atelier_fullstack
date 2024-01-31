import React from "react";
import { useNavigate } from "react-router-dom";
import Moto from "./Moto";
import "./Carddetail.css";

function MotoMoto() {
  const navigate = useNavigate();

  const handleFormulaire = () => {
    navigate("/motos/formulaire");
  };

  return (
    <div>
      <Moto />
      <button className="button_form" type="button" onClick={handleFormulaire}>
        Modification de ta liste
      </button>
    </div>
  );
}

export default MotoMoto;
