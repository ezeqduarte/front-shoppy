import React from "react";
import "./carrito.css";
import GoTo from "../../components/GoTo/GoTo";
import CardCarrito from "../../components/CardCarrito/CardCarrito";
import { Done, LocalShippingOutlined, SecurityOutlined } from "@mui/icons-material";

export default function Carrito() {
  let array = [
    {
      _id: "4fgsfigoas22",
      name: "10Wireless headphones",
      category: "Auriculares",
      brand: "Logitech",
      stock: 17,
      cantidad: 2,
      price: 40.99,
      photo:
        "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      _id: "4fgsfigoas22",
      name: "10Wireless headphones",
      category: "Auriculares",
      brand: "Logitech",
      stock: 17,
      cantidad: 2,
      price: 40.99,
      photo:
        "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      _id: "4fgsfigoas22",
      name: "10Wireless headphones",
      category: "Auriculares",
      brand: "Logitech",
      stock: 17,
      cantidad: 2,
      price: 40.99,
      photo:
        "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
  ];

  return (
    <>
      <div className="mainCarrito">
        <div className="divInicio">
          <h2>
            FINALIZA TU COMPRA<span className="blanco">.</span>
          </h2>
          <p className="parrafoInicio">
            En esta seccion podes ver todos los componentes que fuiste agregando
            al carrito, analizarlos y finalizar tu compra
          </p>

          <a href="#productos" className="buttonInicio">
            <GoTo texto="FINALIZAR" />
          </a>
        </div>
      </div>
      <div className="edContainerCarrito">
        <h2>
          TUS PRODUCTOS SELECCIONADOS <span className="blanco">.</span>
        </h2>
        <div className="edContainerCardsCarrito">
          {array.map((x) => (
            <CardCarrito producto={x} key={x._id} />
          ))}
        </div>
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
    </>
  );
}
