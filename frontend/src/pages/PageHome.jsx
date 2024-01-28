import React from "react";
import { Link } from "react-router-dom";
import motofimage from "../assets/motof.jpg";

function PageHome() {
  return (
    <div className="Nav_button">
      <img className="motoph" src={motofimage} alt="moto" />
      <Link className="buton1" to="/Signup">
        <button className="buton1g" type="button">
          S'inscrire
        </button>
      </Link>
      <Link className="buton2" to="/Signin">
        <button className="buton2g" type="button">
          Connecter
        </button>
      </Link>
    </div>
  );
}

export default PageHome;
