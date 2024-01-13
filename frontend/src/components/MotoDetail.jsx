import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function MotoDetail() {
  const moto = useLoaderData();
  return (
    <div className="cartdetail">
      <Link to="/motos">
        <img className="cartdetail_image" src={moto.image} alt={moto.brand} />
      </Link>
      <div className="cartdetail_text">
        <p>{moto.brand}</p>
        <p>{moto.engine}</p>
        <p>{moto.attribut_label}</p>
      </div>
    </div>
  );
}

export default MotoDetail;
