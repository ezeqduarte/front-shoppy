import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/ClearOutlined";
import "primeicons/primeicons.css";
import "./cardcarrito.css";
import { Button } from "primereact/button";

export default function CardCarrito({ producto }) {
  let [cantidad, setCantidad] = useState(producto.cantidad);
  let [precioTotal, setPrecioTotal] = useState(
    producto.precio * producto.cantidad
  );

  const sumar = () => {
    setCantidad(cantidad + 1);
  };

  const restar = () => {
    cantidad > 0 ? setCantidad(cantidad - 1) : setCantidad(0);
  };

  useEffect(() => {
    setPrecioTotal(producto.precio * cantidad);
  }, [cantidad]);

  return (
    <div className="cardCarritoEd">
      <div className="fotocardCarritoEd">
        <img src={producto.foto} alt="" />
        <div className="buttonDeleteCarrito">X</div>
      </div>

      <div className="infoCardCarrito">
        <h5>{producto.tipo.toUpperCase()}</h5>
        <h4 className="blanco">{producto.nombre}</h4>
        <p>Cantidad en carro</p>
        <div className="sumarRestarProductos">
          <p className="botonesCarritoRestaSuma" onClick={restar}>-</p>
          <p  className="cantidadCarrito">{cantidad}</p>
          <p className="botonesCarritoRestaSuma" onClick={sumar}>+</p>
        </div>
      </div>
    </div>
  );
}
