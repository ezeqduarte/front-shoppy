import React from "react";
import { NavLink } from "react-router-dom";
import "../Inicio/inicio.css";

export default function Inicio() {
  return (
    <>
      <div className="mainInicio">
        <div className="divInicio">
          <h2>SHOPPY ELECTRONICA.</h2>
          <p className="parrafoInicio">
            Tenemos todo lo que buscas, tenemos los mejores productos y las
            mejores marcas. Le invitamos a ver nuestros productos en stock.
          </p>
          <NavLink to={`/productos`} style={{ textDecoration: "none" }}>
            <p className="buttonInicio">VER MAS</p>
          </NavLink>
        </div>
      </div>
      ;<div className="productosMain"></div>
    </>
  );
}
