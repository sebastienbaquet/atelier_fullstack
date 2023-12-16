import React from "react";
import { useNavigate } from "react-router-dom";
import CardS from "./CardS";
import CarForm from "./form";

function CarCar() {
  const navigate = useNavigate();

  const handleReturnToApp = () => {
    navigate("/");
  };

  return (
    <div>
      <CardS />
      <CarForm />
      <button type="button" onClick={handleReturnToApp}>
        Retourner
      </button>
    </div>
  );
}

export default CarCar;
