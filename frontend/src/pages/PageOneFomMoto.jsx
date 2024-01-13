import React from "react";
import { useNavigate } from "react-router-dom";
import FormMotor from "../components/FormMotor";

function PageOneFomMoto() {
  const navigate = useNavigate();
  const handleReturnToApp = () => {
    navigate("/motos");
  };
  return (
    <div>
      <FormMotor />
      <button type="button" onClick={handleReturnToApp}>
        Retourner
      </button>
    </div>
  );
}

export default PageOneFomMoto;
