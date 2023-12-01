import React from "react";
import { Link } from "react-router-dom";

function CardView({ car }) {
  return (
    <Link to={`/cars/${car.id}`}>
      <img src={car.image} alt={car.brand} />
    </Link>
  );
}

export default CardView;
