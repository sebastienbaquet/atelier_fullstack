import React from "react";
import { Link } from "react-router-dom";
import CarImage from "../assets/voiture1.jpg";
import "./NavCard.css";

function NavCar() {
  return (
    <div>
      <Link className="nav_container" to="/cars">
        <img className="nav_img" src={CarImage} alt="Borne" />
        <p className="nav_text"> Moto</p>
      </Link>
    </div>
  );
}

export default NavCar;
