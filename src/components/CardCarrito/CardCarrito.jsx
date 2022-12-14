import React, { useState } from "react";
import "./cardcarrito.css";

export default function CardCarrito({ producto }) {
  let [cantidad, setCantidad] = useState(0);

  return (
    <div className="EdcardCarrito">
      <img src={producto.foto} alt="asdf" />
      <div className="EdInfocardCarrito">
        <h5>{producto.tipo}</h5>
        <h4 className="EdNombreProductoCarrito">{producto.nombre}</h4>
        <div>
          <h4>Cantidad en carro:</h4>
          <h4> {cantidad}</h4>
        </div>
      </div>
    </div>
  );
}
