import React from "react";
import "./carrito.css";
import GoTo from "../../components/GoTo/GoTo";
import CardCarrito from "../../components/CardCarrito/CardCarrito";

export default function Carrito() {
  let array = [
    {
      _id: "4fgsfigoas22",
      cantidad: 1,
      nombre: "7Wireless headphones",
      marca: "CORSAIR",
      tipo: "Auriculares",
      stock: 35,
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      _id: "4fgsfigoas22",
      nombre: "8Wireless headphones",
      marca: "HyperX",
      tipo: "Auriculares",
      cantidad: 4,
      stock: 53,
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      nombre: "9Wireless headphones",
      marca: "Acer",
      cantidad: 1,
      tipo: "Auriculares",
      stock: 1,
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      _id: "4fgsfigoas22",
      nombre: "10Wireless headphones",
      tipo: "Auriculares",
      marca: "Logitech",
      cantidad: 2,
      stock: 17,
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
      descripcion:
        "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
  ];

  return (
    <>
      <div className="mainCarrito">
        <div className="divInicio">
          <h2>
            REALIZA TU COMPRA<span className="blanco">.</span>
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
            <CardCarrito producto={x} key={x._id}  />
          ))}
        </div>
      </div>
    </>
  );
}
