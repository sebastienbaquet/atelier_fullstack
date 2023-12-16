import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function MotoDetail() {
  const moto = useLoaderData();
  return (
    <div className="motodetail">
      <Link to="/motos">
        <img src={moto.image} alt={moto.brand} />
      </Link>
      <p>{moto.brand}</p>
      <p>{moto.engine}</p>
      <p>{moto.attribut_label}</p>
    </div>
  );
}

export default MotoDetail;
