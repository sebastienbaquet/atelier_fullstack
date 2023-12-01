import React from "react";
import { useLoaderData } from "react-router-dom";

function CardDetail() {
  const car = useLoaderData();
  return (
    <div>
      <p>{car.brand}</p>
      <p>{car.engine}</p>
      <img src={car.image} alt={car.brand} />
      <p>{car.label}</p>
    </div>
  );
}

export default CardDetail;
