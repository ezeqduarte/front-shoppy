import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/ClearOutlined";
import "primeicons/primeicons.css";
import "./cardcarrito.css";
import { Button } from "primereact/button";
import {
  Done,
  LocalShippingOutlined,
  SecurityOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

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
    <div className="cardDetalleDeProductoEd">
      <div className="fotoDetalleDeProductoEd">
        <img src={producto?.photo} alt="" />
      </div>
      <div className="InfoDetalleDeProductoEd">
        <p className="ProductoTitulo">
          {producto?.name} <span className="blanco">.</span>
        </p>

        <hr className="hrDetallesProductos" />

        <div className="contadorParaCarrito">
          <p onClick={restar}>-</p> <p>{cantidad}</p> <p onClick={sumar}>+</p>
          <p id="agregarAlCarrito">Agregar al carrito</p>
          <NavLink className="BotonIrAlCarrito" to={"/carrito"}>
            <ShoppingCart fontSize="large" />
            <p id="agregarAlCarrito">Ir al carrito</p>
          </NavLink>
        </div>

        <hr className="hrDetallesProductos" />
        <div className="PrecioStockDetalles">
          <p
            className="
              negrita blanco"
          >
          SUBTOTAL  $ {producto?.price}
          </p>
          <p
            className="
              negrita blanco"
          >
           TOTAL $ {producto?.price*cantidad}
          </p>
        </div>
        <hr className="hrDetallesProductos" />
        
      </div>
    </div>
  );
}
