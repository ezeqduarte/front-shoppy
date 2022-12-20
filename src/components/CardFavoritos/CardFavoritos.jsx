import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/ClearOutlined";
import "primeicons/primeicons.css";
import "../CardCarrito/cardcarrito.css";
import userActions from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";

import funciones from "../../config/funciones";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const { separator } = funciones;

export default function CardFavoritos({ producto }) {
  console.log(producto);

  return (
    <div className="cardFavoritos">
      <div className="FotocardFavoritos">
        <img src={producto?.photo} alt={producto?._id} />
      </div>
      <div className="infoCardCarrito">
        <h5 className="nombreEnFavorito">{producto?.name}</h5>
        <hr className="hr" />
        <h5>
          {producto?.category} {producto?.brand}
        </h5>
        <hr className="hr" />
        <div className="preciosFavoritos">
          <div className="botonIrAdetallesFavoritos">
            ELIMINAR
          </div>
          <NavLink
            className="botonIrAdetallesFavoritos"
            to={`/detalle-producto/${producto._id}`}
          >
            VER DETALLES
          </NavLink>
        </div>
      </div>
    </div>
  );
}
