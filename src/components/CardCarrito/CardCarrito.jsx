import React, { useEffect, useState } from "react";
import "./cardcarrito.css";

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
    <article className="product">
      <header>
        <a className="remove">
          <img src={producto.foto} alt="" />

          <h3>Remove product</h3>
        </a>
      </header>

      <div className="content">
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
      </div>

      <footer className="content">
        <span className="qt-minus" onClick={restar}>
          -
        </span>
        <span className="qt">{cantidad}</span>
        <span className="qt-plus" onClick={sumar}>
          +
        </span>

        <h2 className="price">{producto.precio}</h2>
        <h2 className="full-price">{precioTotal}</h2>
      </footer>
    </article>
  );
}
