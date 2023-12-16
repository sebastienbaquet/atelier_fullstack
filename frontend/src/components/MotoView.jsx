import React from "react";
import { Link } from "react-router-dom";

function MotoView({ moto }) {
  return (
    <Link className="image_garde" to={`/motos/${moto.id}`}>
      <img className="bordering" src={moto.image} alt={moto.brand} />
    </Link>
  );
}

export default MotoView;
