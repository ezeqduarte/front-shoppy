import {
  Done,
  HomeRepairServiceOutlined,
  LocalShippingOutlined,
  SecurityOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import API from "../../config/api";
import "./detalleproducto.css";

export default function DetalleProducto() {
  const { id } = useParams();
  let [producto, setProducto] = useState();
  const [cantidad, setCantidad] = useState(0);
  async function productoDatos() {
    const res = await axios.get(`${API}product/${id}`);
    setProducto(res.data.response);
  }

  const sumarAlCarrito = () => {
    console.log("sumarCarro");
    if (cantidad < producto?.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restarAlCarrito = () => {
    console.log("restarCarro");
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  let arrayDeEspecificaciones = [];

  function especificaciones() {
    for (const [key, value] of Object.entries(producto.specifications)) {
      arrayDeEspecificaciones.push(
        `${key.toUpperCase()}: ${value.toUpperCase()}`
      );
    }
  }

  useEffect(() => {}, [producto]);

  useEffect(() => {
    productoDatos();
  }, []);

  return (
    <>
      <div className="HeaderProductosDetalleEd">
        <h2>
          {producto?.category} {producto?.brand} {producto?.name}
        </h2>
      </div>
      <div className="MainProductosDetalleEd">
        <h2>
          Detalles del producto<span className="blanco">.</span>
        </h2>
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to={"/productos"}
        >
          <p className="volverAProductos">{"<"}</p>
        </NavLink>
        <div className="cardDetalleDeProductoEd">
          <div className="fotoDetalleDeProductoEd">
            <img src={producto?.photo} alt="" />
          </div>
          <div className="InfoDetalleDeProductoEd">
            <p className="ProductoTitulo">
              {producto?.name} <span className="blanco">.</span>
            </p>
            <p>
              <span className="negrita">Tipo:</span> {producto?.category}
            </p>
            <p>
              <span className="negrita">Marca:</span> {producto?.brand}
            </p>
            <p>
              <span className="negrita">Especificaciones:</span>
            </p>

            {producto && especificaciones()}

            {arrayDeEspecificaciones.map((x) => (
              <p>{x}</p>
            ))}

            <hr className="hrDetallesProductos" />

            <div className="contadorParaCarrito">
              <p onClick={restarAlCarrito}>-</p> <p>{cantidad}</p>{" "}
              <p onClick={sumarAlCarrito}>+</p>
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
                $ {producto?.price}
              </p>
              <p
                className="
              negrita blanco"
              >
                {producto?.stock} ARTICULOS EN STOCK
              </p>
            </div>
            <hr className="hrDetallesProductos" />
            <div className="IconosDetallesEd">
              <div>
                <p className="IconosyParrafosAdicionales">
                  {" "}
                  <SecurityOutlined fontSize="large" />
                  Garantía - 12 meses
                </p>
              </div>
              <div>
                <p className="IconosyParrafosAdicionales">
                  {" "}
                  <Done fontSize="large" />
                  Stock disponible
                </p>
              </div>
              <div>
                <p className="IconosyParrafosAdicionales">
                  {" "}
                  <LocalShippingOutlined fontSize="large" />
                  Envíos a todo el país
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
