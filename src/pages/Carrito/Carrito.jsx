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
import paymentActions from "../../redux/actions/paymentActions";
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
import { async } from "q";
import axios from "axios";

export default function Carrito() {
  let { carrito, token } = useSelector((store) => store.userReducer);
  
  const { getDatos } = userActions;
  const {mercadoPago}=paymentActions;

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
  /* let data = JSON.stringify({
    username: this.state.username,
    password: password
  }); */
  
  let preference={
     
    items: [
      {
        title: "Dummy Title",
        description: "Dummy description",
        picture_url: "http://www.myapp.com/myimage.jpg",
        category_id: "category123",
        quantity: 1,
        unit_price: 1
      }
    ],
    back_urls: {
      failure: "/failure",
      pending: "/pending",
      success: "/success"
    }
  }

  let payment=async()=>{
     /* let res=await axios.get('http://localhost:8000/api/payment',{preference})
            .then(res=>console.log(res)) */
      try {
        let res= await dispatch(mercadoPago(preference))
        console.log(res)
      } catch (error) {
        console.log(error.response.data)
      }
    
  }
  

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
              <div className="botonFinalizarCompraEd" to="/productos" onClick={payment}>
                Finalizar compra
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
