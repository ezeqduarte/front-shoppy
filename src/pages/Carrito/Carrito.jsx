import React, { useEffect } from "react";
import "./carrito.css";
import GoTo from "../../components/GoTo/GoTo";
import CardCarrito from "../../components/CardCarrito/CardCarrito";
import {
  Done,
  LocalShippingOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../redux/actions/userActions";

export default function Carrito() {
  let { carrito, token } = useSelector((store) => store.userReducer);
  const {getDatos} = userActions
  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getDatos({token: token}))

  }, [])




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
          {carrito.map((x) => (
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
