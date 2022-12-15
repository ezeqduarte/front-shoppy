import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carrousel from "../../components/Carrousel/Carrousel";
import GoTo from "../../components/GoTo/GoTo";
import ItemsShoppy from "../../components/ItemsShoppy/ItemsShoppy";
import imagenes from "../../imagenes/imagenes";
import "../Inicio/inicio.css";
import productsActions from "../../redux/actions/productsActions";

export default function Inicio() {
  const { amd, adata, rogstrix, tForce, zotac } = imagenes;
  const [activeNuevos, setActiveNuevos] = useState(false);
  const [activeMasVendidos, setMasVendidos] = useState(false);
  const [activeOfertas, setActiveOfertas] = useState(false);

  let { TodosLosproductos: array } = useSelector((store) => store.productsReducer);


  const nuevos = () => {
    setActiveNuevos(!activeNuevos);
    activeMasVendidos
      ? setMasVendidos(!activeMasVendidos)
      : setMasVendidos(activeMasVendidos);
    activeOfertas
      ? setActiveOfertas(!activeOfertas)
      : setActiveOfertas(activeOfertas);
  };

  const masVendidos = () => {
    activeNuevos
      ? setActiveNuevos(!activeNuevos)
      : setActiveNuevos(activeNuevos);
    setMasVendidos(!activeMasVendidos);
    activeOfertas
      ? setActiveOfertas(!activeOfertas)
      : setActiveOfertas(activeOfertas);
  };

  const ofertas = () => {
    activeNuevos
      ? setActiveNuevos(!activeNuevos)
      : setActiveNuevos(activeNuevos);
    activeMasVendidos
      ? setMasVendidos(!activeMasVendidos)
      : setMasVendidos(activeMasVendidos);
    setActiveOfertas(!activeOfertas);
  };

  const dispatch = useDispatch();
  const { productos } = productsActions;

  const productosTotales = async () => {
    dispatch(productos());
  };

  useEffect(() => {
    productosTotales();
  }, []);


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
        <div className="slider" style={{ marginTop: 50, marginBottom: 50 }}>
          <div className="slide-track">
            <div className="slide">
              <img src={adata} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={amd} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={rogstrix} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={tForce} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={zotac} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={rogstrix} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={tForce} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={adata} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={zotac} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={rogstrix} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={tForce} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={zotac} height="100" width="250" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
