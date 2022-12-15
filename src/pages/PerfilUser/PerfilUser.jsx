import React from 'react'
import './perfilUser.css'

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

import DownloadIcon from '@mui/icons-material/Download';
import PaidIcon from '@mui/icons-material/Paid';
import HelpIcon from '@mui/icons-material/Help';

import TextField from "@mui/material/TextField";

import GoTo from '../../components/GoTo/GoTo';

export default function PerfilUser() {
  return (<>

            <div className="mainPerfil">
                <div className="divInicio">
                    <h2>
                       TU LUGAR EN SHOPPY<span className="blanco">.</span>
                    </h2>
                    <p className="parrafoInicio">
                       Al registrarte ayudas a que esta gran familia como es shoppy siga creciendo y pueda seguir ayudandote en la busqueda de los componentes para tu pc. Por eso es que decidimos darte este pequeño lugar para que te sientas aun mas parte de todo esto.
                    </p>
                    <a href="#consultas" className="buttonInicio">
                      <GoTo texto="VER MAS" />
                    </a>
                </div>
            </div>
        <div className='mc-containerPerfil'>
                {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
              <Card className="mc-cardPerfil">
                <Avatar className='mc-iconoAvatar' src="/broken-image.jpg" />
                <CardContent className='mc-containerSubCard'>
                      <Typography
                        className="mc-tituloConsultasCartel"
                        sx={{ fontSize: 20 }}
                        color="text.black"
                        gutterBottom
                      >
                        Matias Calvi
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Perfil creado : 14/12/2022
                      </Typography>
                </CardContent>
              </Card>
            <div className="mc-containerMisDatos">
              <h2 className='mc-titulosPerfilMisDatos'>Mis Datos</h2>
                <TextField id="outlined-basic" label="Nombre" variant="outlined" defaultValue={"Matias Calvi"} className='mc-inputsPerfil' />
                <TextField id="outlined-basic" label="E-mail" variant="outlined" defaultValue={"matiascalvi@gmail.com"} className='mc-inputsPerfil' />
            </div>    
            <div className="mc-containerDatosPersonales"> 
              <h2 className='mc-titulosDatosPersonales'>Datos Personales</h2>
              
                <TextField id="outlined-basic" label="Nombre de DNI" defaultValue={"Matias A. Calvi"} variant="outlined" className='mc-inputsPerfil' />
                <TextField id="outlined-basic" label="DNI" variant="outlined" defaultValue={"2019378674"} className='mc-inputsPerfil' />
                <TextField id="outlined-basic" label="Domicilio" variant="outlined" defaultValue={"Calle Falsa 123"} className='mc-inputsPerfil' />
                <TextField id="outlined-basic" label="Codigo Postal" variant="outlined" defaultValue={"1828"} className='mc-inputsPerfil' />
                <TextField id="outlined-basic" label="Agregar numero de contacto" variant="outlined" className='mc-inputsPerfil' />
            </div>
            <div className='mc-containerFacturasYPreguntas'>
                <div className='mc-containerFacturas'>
                  <h2 className='mc-titulosFacturas'>Mis Facturas</h2>
                    <Card className="mc-cardPerfilFacturas">
                          <CardContent className='mc-containerSubCardFacturas'>
                                <div className='mc-subContainerFactura'>
                                    <Typography
                                      className="mc-tituloCartelFactura"
                                      sx={{ fontSize: 20 }}
                                      color="text.black"
                                      gutterBottom
                                    >
                                      Tipo: <span className='mc-spanFactura'>Factura B</span>
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} className="mc-tituloCartelFactura">
                                      Comprobante: <span className='mc-spanFactura'>00003-0000305225</span>
                                    </Typography>
                                </div>
                                <DownloadIcon/>
                          </CardContent>
                    </Card>
                    <Card className="mc-cardPerfilFacturas">
                        <CardContent className='mc-containerSubCardFacturas'>
                              <div className='mc-subContainerFactura'>
                                  <Typography
                                    className="mc-tituloCartelFactura"
                                    sx={{ fontSize: 20 }}
                                    color="text.black"
                                    gutterBottom
                                  >
                                    Tipo: <span className='mc-spanFactura'>Factura B</span>
                                  </Typography>
                                  <Typography sx={{ mb: 1.5 }} className="mc-tituloCartelFactura">
                                    Comprobante: <span className='mc-spanFactura'>00003-0000305330</span>
                                  </Typography>
                              </div>
                              <DownloadIcon/>
                        </CardContent>
                    </Card>
                </div>
                <div className='mc-containerPregYCoins'>
                  <h2 className='mc-titulosFacturas'>Mis Preguntas</h2>
                    <Card >
                        <CardContent className='mc-containerCardCoinsYPreguntas'>
                              <div className='mc-subContainerCoins'>
                                  <Typography className='mc-titulosCoins'><HelpIcon/> Mis Preguntas</Typography>
                                  <Typography
                                    className="mc-tituloCartelCoins"
                                    sx={{ fontSize: 20 }}
                                    color="text.black"
                                    gutterBottom
                                  >
                                    Podés ver las preguntas que hiciste y darle seguimiento desde
                                  </Typography>
                              </div>
                              <CardActions><Button variant="contained" size="small" className="mc-buttonCoins" >ACA</Button></CardActions>
                             
                        </CardContent>
                    </Card>
                    <h2 className='mc-titulosFacturas'>Mis Coins</h2>
                    <Card >
                        <CardContent className='mc-containerCardCoinsYPreguntas'>
                              <div className='mc-subContainerCoins'>
                                  <Typography className='mc-titulosCoins'><PaidIcon/> Mis Coins</Typography>
                                  <Typography
                                    className="mc-tituloCartelCoins"
                                    sx={{ fontSize: 20 }}
                                    color="text.black"
                                    gutterBottom
                                  >
                                    Tenés un total de 82 gamer coins. Para ver el detalle de tus movimientos entrá 
                                  </Typography>
                              </div>
                              <CardActions><Button variant="contained" size="small" className="mc-buttonCoins" >ACA</Button></CardActions>
                             
                        </CardContent>
                    </Card>
                </div>
            </div>   
        </div>
  </>)
}
