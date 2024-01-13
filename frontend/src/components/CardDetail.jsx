import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Carddetail.css";

function CardDetail() {
  const car = useLoaderData();
  return (
    <div className="cartdetail">
      <Link to="/cars">
        <img className="cartdetail_image" src={car.image} alt={car.brand} />
      </Link>
      <div className="cartdetail_text">
        <p>{car.brand}</p>
        <p>{car.engine}</p>
        <p>{car.fonction_label}</p>
      </div>
    </div>
  );
}

export default CardDetail;
