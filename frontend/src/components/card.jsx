import React from "react";
import { useLoaderData } from "react-router-dom";

function Card() {
  const cars = useLoaderData();

  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>
          <p>{car.brand}</p>
          <img src={car.image} alt={car.brand} />
        </div>
      ))}
    </div>
  );
}

export default Card;
