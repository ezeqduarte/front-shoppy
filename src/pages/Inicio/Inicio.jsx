import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../../components/card/Card";
import Carrousel from "../../components/Carrousel/Carrousel";
import GoTo from "../../components/GoTo/GoTo";
import ItemsShoppy from "../../components/ItemsShoppy/ItemsShoppy";
import "../Inicio/inicio.css";

export default function Inicio() {
  const [activeNuevos, setActiveNuevos] = useState(false);
  const [activeMasVendidos, setMasVendidos] = useState(false);
  const [activeOfertas, setActiveOfertas] = useState(false);

  const nuevos = (event) => {
    setActiveNuevos(!activeNuevos);
    activeMasVendidos
      ? setMasVendidos(!activeMasVendidos)
      : setMasVendidos(activeMasVendidos);
    activeOfertas
      ? setActiveOfertas(!activeOfertas)
      : setActiveOfertas(activeOfertas);
  };

  const masVendidos = (event) => {
    activeNuevos
      ? setActiveNuevos(!activeNuevos)
      : setActiveNuevos(activeNuevos);
    setMasVendidos(!activeMasVendidos);
    activeOfertas
      ? setActiveOfertas(!activeOfertas)
      : setActiveOfertas(activeOfertas);
  };

  const ofertas = (event) => {
    activeNuevos
      ? setActiveNuevos(!activeNuevos)
      : setActiveNuevos(activeNuevos);
    activeMasVendidos
      ? setMasVendidos(!activeMasVendidos)
      : setMasVendidos(activeMasVendidos);
    setActiveOfertas(!activeOfertas);
  };

  let array = [
    {
      nombre: "1Wireless headphones",
      marca: "CORSAIR",
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      nombre: "2Wireless headphones",
      marca: "CORSAIR",
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      nombre: "3Wireless headphones",
      marca: "CORSAIR",
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      nombre: "4Wireless headphones",
      marca: "CORSAIR",
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      nombre: "5Wireless headphones",
      marca: "CORSAIR",
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      nombre: "6Wireless headphones",
      marca: "CORSAIR",
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      nombre: "7Wireless headphones",
      marca: "CORSAIR",
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      nombre: "8Wireless headphones",
      marca: "CORSAIR",
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      nombre: "9Wireless headphones",
      marca: "CORSAIR",
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
    {
      nombre: "10Wireless headphones",
      marca: "CORSAIR",
      precio: 40.99,
      foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    },
  ];

  return (
    <>
      <div className="mainInicio">
        <div className="divInicio">
          <h2>
            SHOPPY COMPUTACION<span className="blanco">.</span>
          </h2>
          <p className="parrafoInicio">
            Tenemos todo lo que buscas, tenemos los mejores productos y las
            mejores marcas. Te invitamos a ver nuestros productos en stock.
          </p>

          <a href="#productos" className="buttonInicio">
            <GoTo texto="VER MAS" />
          </a>
        </div>
      </div>
      <div id="productos" className="productosMain">
        <div className="headerInicio">
          <h2>
            NUESTROS PRODUCTOS <span className="blanco">.</span>
          </h2>
          <div className="selectsInicio">
            <p className={activeNuevos ? "underline" : ""} onClick={nuevos}>
              NUEVOS
            </p>
            <p
              className={activeMasVendidos ? "underline" : ""}
              onClick={masVendidos}
            >
              MAS VENDIDOS
            </p>
            <p className={activeOfertas ? "underline" : ""} onClick={ofertas}>
              OFERTAS
            </p>
          </div>
        </div>
        <div className="containerCardsInicio">
          <Carrousel array={array}></Carrousel>
          <Carrousel array={array}></Carrousel>
        </div>
        <ItemsShoppy />
        <div className="Registrate">
          <h3>Registrate y obtené beneficios</h3>
          <p>
            Registrate para recibir todas nuestras noticias sobre productos
            nuevos, cupones de compra y demas novedades. Ademas como estamos en
            mes mundialista, por registrarte en nuestra pagina estaras
            participando de un sorteo por una camiseta de la seleccion.
          </p>
          <a className="buttonInicioRegistrate">REGISTRATE</a>
        </div>
        {/* <div className="CarrouselMarcas">
          <img
            src="https://cdn.discordapp.com/attachments/830354293822324736/1051988778824249445/Mesa_de_trabajo_2.jpg"
            alt=""
          />
        </div> */}
      </div>
    </>
  );
}
