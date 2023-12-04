import React from "react";
import { Link } from "react-router-dom";
import "./CardView.css";

function CardView({ car }) {
  return (
    <Link className="image_garde" to={`/cars/${car.id}`}>
      <img className="bordering" src={car.image} alt={car.brand} />
    </Link>
  );
}

export default CardView;
