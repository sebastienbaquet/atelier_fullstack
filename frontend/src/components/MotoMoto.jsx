import React from "react";
import { useNavigate } from "react-router-dom";
import Moto from "./Moto";
import FormMotor from "./FormMotor";

function MotoMoto() {
  const navigate = useNavigate();

  const handleReturnToApp = () => {
    navigate("/");
  };

  return (
    <div>
      <FormMotor />
      <Moto />
      <button type="button" onClick={handleReturnToApp}>
        Retourner
      </button>
    </div>
  );
}

export default MotoMoto;
