import React from "react";
import { useNavigate } from "react-router-dom";
import CardS from "./CardS";

function CarCar() {
  const navigate = useNavigate();

  const handleFormulaire = () => {
    navigate("/cars/formulaire");
  };

  return (
    <div>
      <CardS />
      <button className="button_form" type="button" onClick={handleFormulaire}>
        Modification de ta liste
      </button>
    </div>
  );
}

export default CarCar;
