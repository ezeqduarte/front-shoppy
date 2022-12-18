import React, { useEffect, useState } from "react";
import "./carrito.css";
import GoTo from "../../components/GoTo/GoTo";
import CardCarrito from "../../components/CardCarrito/CardCarrito";
import {
  Done,
  DoneAllOutlined,
  DoneOutlined,
  ExpandMore,
  LocalShippingOutlined,
  PaymentOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../redux/actions/userActions";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import funciones from "../../config/funciones";

export default function Carrito() {
  let { carrito, token } = useSelector((store) => store.userReducer);
  const { getDatos } = userActions;
  const dispatch = useDispatch();
  const { separator } = funciones;

  let [total, setTotal] = useState();

  useEffect(() => {
    dispatch(getDatos({ token: token }));
  }, []);

  const [inputCode, setInputCode] = useState("");

  useEffect(() => {
    if (carrito.length !== 0) {
      const precioTotalCompra = carrito
        .map((x) => x.productId.price * x.quantity)
        .reduce(function (valorAnterior, valorActual) {
          return valorAnterior + valorActual;
        });

      setTotal(separator(precioTotalCompra));
    }
  }, [carrito]);

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
      <h2 style={{ textAlign: "center", marginTop: 25 }}>
        TUS PRODUCTOS SELECCIONADOS <span className="blanco">.</span>
      </h2>

      <div className="edContainerCarrito">
        {carrito.length === 0 ? (
          <div
            className="edContainerCardsCarrito"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div className="sinarticulosencarro">
              <h3>No tienes articulos en el carrito</h3>
              <NavLink className="botonIrAproductos" to="/productos">
                Investigar los productos disponibles
              </NavLink>
            </div>
          </div>
        ) : (
          <>
            <div className="edContainerCardsCarrito">
              {carrito.map((x) => (
                <CardCarrito producto={x} key={x._id} />
              ))}
            </div>
            <div className="FinalizarCompraDivEd">
              <div>
                <h3>PRECIO TOTAL DE LA COMPRA</h3>
                <p className="precioTotalCostadoEd">$ {total}</p>
              </div>
              <Accordion className="accordionCarrito">
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="mc-titulosAcordionConsultas">
                    Codigo promocional
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="mc-containerDatosPersonales">
                    <div className="ed-InputCodigoPromocional">
                      <TextField
                        id="nombre"
                        label="Inserte codigo promocional"
                        variant="outlined"
                        className="mc-inputsPerfilAcordion"
                        onChange={(text) => setInputCode(text.target.value)}
                      />
                      <Button
                        variant="contained"
                        size="small"
                        className="mc-buttonAcordion"
                        /* onClick={editMail} */
                      >
                        {<DoneOutlined className="mc-iconButtonPerfil" />}
                      </Button>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion className="accordionCarrito">
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="mc-titulosAcordionConsultas">
                    Shoppy coins
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="mc-containerDatosPersonales">
                    <div className="ed-InputCodigoPromocional">
                      <TextField
                        id="nombre"
                        label="Inserte codigo promocional"
                        variant="outlined"
                        className="mc-inputsPerfilAcordion"
                        onChange={(text) => setInputCode(text.target.value)}
                      />
                      <Button
                        variant="contained"
                        size="small"
                        className="mc-buttonAcordion"
                        /* onClick={editMail} */
                      >
                        {<DoneOutlined className="mc-iconButtonPerfil" />}
                      </Button>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <div className="botonFinalizarCompraEd" to="/productos">
                Finalizar compra
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
