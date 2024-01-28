import React from "react";
import NavMotos from "../components/NavMotos";
import NavCar from "../components/NavCar";

function PageSelec() {
  return (
    <div>
      <div className="Nav">
        <NavMotos />
        <NavCar />
      </div>
    </div>
  );
}

export default PageSelec;
