import React from "react";
import GoTo from "../../components/GoTo/GoTo";
import "./consultas.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import adata from "../../imagenes/adata.png";
import amd from "../../imagenes/amd.png";
import asrock from "../../imagenes/asrock.png";
import rogstrix from "../../imagenes/rogstrix.png";
import tForce from "../../imagenes/t-force.png";
import western from "../../imagenes/western-digital.png";
import zotac from "../../imagenes/zotacGaming.png";

import { toast } from "react-toastify";

import { useSelector } from "react-redux";

export default function Consultas() {
  const [option, setOption] = React.useState("");
  let [inputConsultas,setInputConsultas]=React.useState('')

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  
  const { logged } = useSelector((state) => state.userReducer);

  const clickSubmit = (e) => {
    if (!logged) {
      toast.error(`Tienes que estar logeado para realizar una consulta`, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      }
      else{
        toast.success(`Su consulta fue enviada`, {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  

  return (
    <>
      <div className="mainConsultas">
        <div className="divInicio">
          <h2 id="consultasFrecuentes">
            CONSULTAS FRECUENTES<span className="blanco">.</span>
          </h2>
          <p className="parrafoInicio">
            Tenemos algunas consultas que suelen hacerse nuestros usuarios, a
            continuacion dejamos las preguntas mas frecuentes para que puedas
            sacarte todo tipo de dudas rapidamente.
          </p>

          <a href="#consultas" className="buttonInicio">
            <GoTo texto="VER MAS" />
          </a>
        </div>
      </div>
      <div className="mc-containerTitulosProductos">
        <h2 className="mc-TituloConsultas">Preguntas Frecuentes</h2>
      </div>
      <div className="mc-containerConsultas" id="consultas">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="mc-titulosAcordionConsultas">
              Realizar un pedido
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="mc-subtitulosAcordionConsultas">
              ??C??mo realizo un pedido?
            </Typography>
            <Typography>
              Solo ten??s que seleccionar todos los productos que deseas
              adquirir. Seguidamente, en el carrito de compras, para conocer el
              costo del env??o coloc??s tu c??digo postal en el recuadro
              correspondiente, eleg??s la mensajer??a de tu preferencia y debajo
              seleccionas la forma de pago. Luego hac??s clic en el bot??n COMPRAR
              y pod??s acceder como cliente (si ya ten??s cuenta en Compra Gamer)
              o crear un cliente nuevo. Por ??ltimo, complet??s los pasos
              brindados por el asistente, hasta confirmar la compra. Se te
              asignar?? un n??mero de pedido y se mostrar??n los datos del mismo.
              Tambi??n enviaremos un mail a tu correo electr??nico registrado con
              los detalles del pedido realizado.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="mc-titulosAcordionConsultas">
              Precio
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="mc-subtitulosAcordionConsultas">
              ??El precio que figura en la web es el precio final?
            </Typography>
            <Typography>
              Todos los precios en la web incluyen el IVA, y se encuentran
              expresados en pesos argentinos.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="mc-titulosAcordionConsultas">
              Formas de pago
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="mc-subtitulosAcordionConsultas">
              ??Cu??les son las formas de pago?
            </Typography>
            <Typography>
              Contamos con dos formas de pago: a trav??s de
              dep??sito/transferencia bancaria, con la cual obten??s el precio
              especial, o bien, a trav??s de los m??todos Pago Gamer (Visa o
              MasterCard) o MercadoPago (Tarjetas online, PagoF??cil y RapiPago)
              con los cuales pod??s abonar en cuotas, al precio de lista.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="mc-titulosAcordionConsultas">
              Dep??sito - Transferencia bancaria
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="mc-subtitulosAcordionConsultas">
              ??C??mo abono a trav??s de dep??sito/transferencia?
            </Typography>
            <Typography className="mc-descripcionAcordionConsultas">
              Una vez se realiza el pedido, te facilitamos los datos del CBU.
              Debes abonar e informar el pago desde nuestra web, antes de la
              fecha de vencimiento de la reserva.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="mc-titulosAcordionConsultas">
              Mercadopago
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="mc-subtitulosAcordionConsultas">
              ??C??mo puedo abonar a trav??s de MercadoPago?
            </Typography>
            <Typography>
              Pod??s hacerlo de tres formas: Con tarjetas online en cuotas (no se
              puede acceder a cuotas sin inter??s); A trav??s de RapiPago/
              PagoF??cil (se abona al precio de lista, pero no se pueden hacer
              cuotas, s??lo se puede abonar en un pago); y realizando una
              transferencia desde tu cuenta de MercadoPago.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="mc-titulosAcordionConsultas">
              Env??os
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="mc-subtitulosAcordionConsultas">
              ??C??mo gestiono el env??o de mi pedido?
            </Typography>
            <Typography>
              En primer lugar, para conocer el costo del env??o, una vez al
              agregues al carrito tu compra, solo debes colocar tu c??digo postal
              en el recuadro correspondiente, seleccionar la mensajer??a de tu
              preferencia y elegir si deseas el retiro en alguna sucursal o la
              entrega a domicilio. Actualmente realizamos env??os a todo el pa??s
              trav??s de Oca y Andreani; y si te encontr??s en CABA o alrededores,
              podr??s seleccionar el servicio de Mensajer??a Privada que es
              exclusivo de Compra Gamer. Ten?? en cuenta que, para calcular el
              costo del env??o, se toman en consideraci??n tanto las dimensiones y
              peso del paquete como la distancia de la localidad de entrega.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="mc-titulosAcordionConsultas">
              Facturaci??n
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="mc-subtitulosAcordionConsultas">
              ??C??mo tramito la factura de mi compra?
            </Typography>
            <Typography>
              En todas las compras efectuadas en la web, brindamos sin excepci??n
              alguna, la factura de compra. Una vez que realiza y abona el
              pedido, enviamos a tu direcci??n de correo electr??nico la factura
              correspondiente. Por supuesto, tambi??n pod??s descargarla desde la
              secci??n Mi cuenta, Mis facturas. En caso de que precises factura
              A, solo debes ingresar tu CUIT al cargar el pedido por la web.
              Ten?? en cuenta que la factura A puede tener percepciones.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mc-containerPregunta">
                    <Card>
                      <CardContent>
                        <Typography
                          className="mc-tituloConsultasCartel"
                          sx={{ fontSize: 20 }}
                          color="text.black"
                          gutterBottom
                        >
                          Consultas
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: 16 }}
                          color="text.black"
                        >
                          Para consultas/reclamos mas especificos, realizarlos en el
                          apartado "Consultas" que se visualiza a continuacion.
                        </Typography>
                      </CardContent>
                    </Card>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Elija un motivo...
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={option}
                        onChange={handleChange}
                        label="option"
                      >
                        <MenuItem value="">
                          <em>Nada</em>
                        </MenuItem>
                        <MenuItem value={"Consulta sobre un producto"}>
                          Consulta sobre un producto
                        </MenuItem>
                        <MenuItem value={"Consulta general"}>Consulta general</MenuItem>
                        <MenuItem value={"Consulta sobre mi Pedido"}>
                          Consulta sobre mi Pedido
                        </MenuItem>
                        <MenuItem value={"Necesito ayuda para realizar mi compra"}>
                          Necesito ayuda para realizar mi compra
                        </MenuItem>
                        <MenuItem value={"Consulta sobre subir un Comprobante de Pago"}>
                          Consulta sobre subir un Comprobante de Pago
                        </MenuItem>
                        <MenuItem value={"Consulta sobre mi envio"}>
                          Consulta sobre mi envio
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      id="outlined-multiline-static"
                      label="Escriba su Pregunta"
                      multiline
                      rows={4}
                      onKeyUp={x=>setInputConsultas(x.target.value)}
                      className="mc-inputPregunta"
                    />
                    <div className="mc-containerButton">
                      {inputConsultas!=='' && option!==''
                          ?   <Button variant="contained" size="medium" className="mc-buttonSubmit" onClick={clickSubmit}>
                                  Enviar
                              </Button>
                          :   <Button variant="contained" size="medium" className="mc-buttonSubmit" disabled>
                                  Enviar
                              </Button>
                      }
                    </div>
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
    </>
  );
}
