import React from "react";
import { useLoaderData } from "react-router-dom";
import MotoView from "./MotoView";

function Moto() {
  const motos = useLoaderData();
  return (
    <div className="moto">
      {motos.map((moto) => (
        <MotoView key={moto.id} moto={moto} />
      ))}
    </div>
  );
}

export default Moto;
