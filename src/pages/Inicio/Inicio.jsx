import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../../components/card/Card";
import "../Inicio/inicio.css";

export default function Inicio() {
  return (
    <>
      <div className="mainInicio">
        <div className="divInicio">
          <h2>
            SHOPPY COMPUTACION<span className="decoradoblanco">.</span>
          </h2>
          <p className="parrafoInicio">
            Tenemos todo lo que buscas, tenemos los mejores productos y las
            mejores marcas. Te invitamos a ver nuestros productos en stock.
          </p>

          <a href="#productos" className="buttonInicio">
            VER MAS
          </a>
        </div>
      </div>
      <div className="productosMain">
        <div className="headerInicio">
          <h2>NUESTROS PRODUCTOS</h2>
          <div className="selectsInicio">
            <p>NUEVOS</p>
            <p>MAS VENDIDOS</p>
            <p>OFERTAS</p>
          </div>
        </div>
        <div className="containerCardsInicio">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
}
