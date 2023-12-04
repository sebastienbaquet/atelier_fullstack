import React from "react";
import { useLoaderData } from "react-router-dom";
import CardView from "./CardView";

function CardS() {
  const cars = useLoaderData();

  return (
    <div className="cart">
      {cars.map((car) => (
        <CardView key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CardS;
