import React from "react";
import { NavLink } from "react-router-dom";
import "../Bienvenida/bienvenida.css";

export default function Bienvenida() {
  return (
    <div className="mainBienvenida">
      <div className="divBienvenida">
        <h2>
          BIENVENIDOS A SHOPPY<span className="blanco">.</span>
        </h2>
        <p className="parrafoBienvenida">
          Te invitamos a conocer nuestra tienda y todos nuestros productos
        </p>
        <NavLink to={`/inicio`} style={{ textDecoration: "none" }}>
          <p className="buttonBienvenida">INGRESA</p>
        </NavLink>
      </div>
    </div>
  );
}
