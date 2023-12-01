import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function CardDetail() {
  const car = useLoaderData();
  return (
    <div>
      <p>{car.brand}</p>
      <p>{car.engine}</p>
      <Link to="/">
        <img src={car.image} alt={car.brand} />
      </Link>
      <p>{car.label}</p>
    </div>
  );
}

export default CardDetail;
