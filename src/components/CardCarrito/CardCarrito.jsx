import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/ClearOutlined";
import "primeicons/primeicons.css";
import "./cardcarrito.css";

import funciones from "../../config/funciones";
const { separator } = funciones;

export default function CardCarrito({ producto }) {

 

  let [cantidad, setCantidad] = useState(producto?.quantity);
  let [precioTotal, setPrecioTotal] = useState(
    producto?.productId?.price * producto?.quantity
  );

  const sumar = () => {
    setCantidad(cantidad + 1);
  };

  const restar = () => {
    cantidad > 0 ? setCantidad(cantidad - 1) : setCantidad(0);
  };

  useEffect(() => {
    setPrecioTotal(producto?.productId?.price * cantidad);
  }, [cantidad]);



  return (
    <div className="cardCarrito">
      <img src={producto?.productId?.photo} alt={producto?.productId?._id} />
      <div className="infoCardCarrito">
        <h5>
          {producto?.quantity}x {producto?.productId?.category}{" "}
          {producto?.productId?.brand} {producto?.productId?.name}
        </h5>
        <hr className="hr" />
        <div className="contadorCarrito">
          <p onClick={restar}>-</p>
          <p>{cantidad}</p>
          <p onClick={sumar}>+</p>
        </div>
        <hr className="hr" />
        <div className="preciosCarrito">
          <p>Unitario: $ {separator(producto?.productId?.price)}</p>
          <p>Subtotal: $ {separator(precioTotal)}</p>
        </div>
      </div>
    </div>
  );
}
