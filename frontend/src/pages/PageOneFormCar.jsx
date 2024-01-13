import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";

function PageOneFormCar() {
  const navigate = useNavigate();
  const handleReturnToApp = () => {
    navigate("/cars");
  };
  return (
    <div>
      {" "}
      <Form />
      <button type="button" onClick={handleReturnToApp}>
        Retourner
      </button>
    </div>
  );
}

export default PageOneFormCar;
