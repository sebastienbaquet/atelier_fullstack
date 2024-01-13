import React from "react";
import { Link } from "react-router-dom";
import MotoImage from "../assets/moto.jpg";
import "./NavCard.css";

function NavMotos() {
  return (
    <div>
      <Link className="nav_container" to="/motos">
        <img className="nav_img" src={MotoImage} alt="Borne" />
        <p className="nav_text"> Moto</p>
      </Link>
    </div>
  );
}

export default NavMotos;
