import React, { useState, useEffect } from "react";
import "./perfilUser.css";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  CardActions,
  Typography,
  Button,
  CardContent,
  Card,
  InputAdornment,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

import DownloadIcon from "@mui/icons-material/Download";
import PaidIcon from "@mui/icons-material/Paid";
import HelpIcon from "@mui/icons-material/Help";

import TextField from "@mui/material/TextField";

import GoTo from "../../components/GoTo/GoTo";

import userActions from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import adata from "../../imagenes/adata.png";
import amd from "../../imagenes/amd.png";
import asrock from "../../imagenes/asrock.png";
import rogstrix from "../../imagenes/rogstrix.png";
import tForce from "../../imagenes/t-force.png";
import western from "../../imagenes/western-digital.png";
import zotac from "../../imagenes/zotacGaming.png";

export default function PerfilUser() {
  const dispatch = useDispatch();
  const { logged, nombre, apellido, date, dni, email, direccion } = useSelector(
    (state) => state.userReducer
  );

  let [value, setValue] = useState();

  useEffect(() => {
    setValue(email);
  }, [email]);

  const [showPassword, setShowPassword] = React.useState(true);
  const [showPassword2, setShowPassword2] = React.useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log(direccion);
  return (
    <>
      <div className="mainPerfil">
        <div className="divInicio">
          <h2>
            TU LUGAR EN SHOPPY<span className="blanco">.</span>
          </h2>
          <p className="parrafoInicio">
            Al registrarte ayudas a que esta gran familia como es shoppy siga
            creciendo y pueda seguir ayudandote en la busqueda de los
            componentes para tu pc. Por eso es que decidimos darte este pequeño
            lugar para que te sientas aun mas parte de todo esto.
          </p>
          <a href="#consultas" className="buttonInicio">
            <GoTo texto="VER MAS" />
          </a>
        </div>
      </div>
      <div className="mc-containerPerfil">
        {/* <Avatar className='mc-iconoAvatar' sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
        <Card className="mc-cardPerfil">
          <Avatar className="mc-iconoAvatar" sx={{ bgcolor: deepOrange[500] }}>
            {nombre.charAt(0)}
          </Avatar>
          <CardContent className="mc-containerSubCard">
            <Typography
              className="mc-tituloConsultasCartel"
              sx={{ fontSize: 20 }}
              color="text.black"
              gutterBottom
            >
              {nombre + " " + apellido}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Perfil creado : {date}
            </Typography>
          </CardContent>
        </Card>
        <div className="mc-containerMisDatos">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="mc-titulosAcordionConsultas">
                Mis Datos
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="mc-renderInput">
                <p>
                  Nombre de Usuario :{" "}
                  <span className="mc-renderLetra">{nombre}</span>
                </p>
                <p>
                  E-mail : <span className="mc-renderLetra">{email}</span>
                </p>
              </div>
              <div className="mc-containerDatosPersonales">
                <TextField
                  id="nombre"
                  label="Nombre de Usuario"
                  variant="outlined"
                  onChange={(event) => setValue(event.target.value)}
                  className="mc-inputsPerfil"
                />
                <TextField
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  className="mc-inputsPerfil"
                />
                <FormControl variant="outlined" className="mc-inputsPerfil">
                  <InputLabel htmlFor="password">Contraseña</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={!showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Contraseña"
                  />
                </FormControl>
                <FormControl variant="outlined" className="mc-inputsPerfil">
                  <InputLabel htmlFor="confirmacionPassword">
                    Verifique su contraseña{" "}
                  </InputLabel>
                  <OutlinedInput
                    id="confirmacionPassword"
                    type={!showPassword2 ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Verifique su contraseña"
                  />
                </FormControl>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="mc-containerDatosPersonales">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="mc-titulosAcordionConsultas">
                Datos Personales
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="mc-renderInput2">
                <p>
                  Nombre de DNI :{" "}
                  <span className="mc-renderLetra">Matias A Calvi</span>
                </p>
                <p>
                  DNI : <span className="mc-renderLetra">{dni}</span>
                </p>
                <p>
                  Domicilio :{" "}
                  <span className="mc-renderLetra">{direccion}</span>
                </p>
                <p>
                  C.P : <span className="mc-renderLetra">{1832}</span>
                </p>
                <p>
                  Numero de Contacto :{" "}
                  <span className="mc-renderLetra">1167581426</span>
                </p>
              </div>
              <div className="mc-containerDatosPersonales">
                <TextField
                  id="nombreDeDNI"
                  label="Nombre de DNI"
                  variant="outlined"
                  className="mc-inputsPerfil"
                />
                <TextField
                  id="dni"
                  label="DNI"
                  variant="outlined"
                  className="mc-inputsPerfil"
                />
                <TextField
                  id="domicilio"
                  label="Domicilio"
                  variant="outlined"
                  className="mc-inputsPerfil"
                />
                <TextField
                  id="codigoPostal"
                  label="Codigo Postal"
                  variant="outlined"
                  className="mc-inputsPerfil"
                />
                <TextField
                  id="agregarNumeroDeContacto"
                  label="Agregar numero de contacto"
                  variant="outlined"
                  className="mc-inputsPerfil"
                />
              </div>
            </AccordionDetails>
          </Accordion>
          
        </div>
        <div>
        <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="mc-titulosAcordionConsultas">
                Mis Facturas
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="mc-containerDatosPersonales">
                <Card className="mc-cardPerfilFacturas">
                  <CardContent className="mc-containerSubCardFacturas">
                    <div className="mc-subContainerFactura">
                      <Typography
                        className="mc-tituloCartelFactura"
                        sx={{ fontSize: 20 }}
                        color="text.black"
                        gutterBottom
                      >
                        Tipo: <span className="mc-spanFactura">Factura B</span>
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        className="mc-tituloCartelFactura"
                      >
                        Comprobante:{" "}
                        <span className="mc-spanFactura">00003-0000305225</span>
                      </Typography>
                    </div>
                    <DownloadIcon />
                  </CardContent>
                </Card>
                <Card className="mc-cardPerfilFacturas">
                  <CardContent className="mc-containerSubCardFacturas">
                    <div className="mc-subContainerFactura">
                      <Typography
                        className="mc-tituloCartelFactura"
                        sx={{ fontSize: 20 }}
                        color="text.black"
                        gutterBottom
                      >
                        Tipo: <span className="mc-spanFactura">Factura B</span>
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        className="mc-tituloCartelFactura"
                      >
                        Comprobante:{" "}
                        <span className="mc-spanFactura">00003-0000305330</span>
                      </Typography>
                    </div>
                    <DownloadIcon />
                  </CardContent>
                </Card>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="mc-containerFacturasYPreguntas">
          
          <div className="mc-containerPregYCoins">
            <div className="mc-containerDatosPersonales">
              <h2 className="mc-titulosCardsPerfil">Mis Facturas :</h2>
              <Card className="mc-cardPerfilFacturas">
                <CardContent className="mc-containerCardCoinsYPreguntas">
                  <div className="mc-subContainerCoins">
                    <Typography className="mc-titulosCoins">
                      <HelpIcon /> Mis Preguntas
                    </Typography>
                    <Typography
                      className="mc-tituloCartelCoins"
                      sx={{ fontSize: 20 }}
                      color="text.black"
                      gutterBottom
                    >
                      Podés ver las preguntas que hiciste y darle seguimiento
                      desde
                    </Typography>
                  </div>
                  <CardActions>
                    <Button
                      variant="contained"
                      size="small"
                      className="mc-buttonCoins"
                    >
                      ACA
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
              <h2 className="mc-titulosCardsPerfil">Mis Coins :</h2>
              <Card className="mc-cardPerfilFacturas">
                <CardContent className="mc-containerCardCoinsYPreguntas">
                  <div className="mc-subContainerCoins">
                    <Typography className="mc-titulosCoins">
                      <PaidIcon /> Mis Coins
                    </Typography>
                    <Typography
                      className="mc-tituloCartelCoins"
                      sx={{ fontSize: 20 }}
                      color="text.black"
                      gutterBottom
                    >
                      Tenés un total de 82 gamer coins. Para ver el detalle de
                      tus movimientos entrá
                    </Typography>
                  </div>
                  <CardActions>
                    <Button
                      variant="contained"
                      size="small"
                      className="mc-buttonCoins"
                    >
                      ACA
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </div>
          </div>
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
