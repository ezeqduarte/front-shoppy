import React from "react";
import "./productos.css";
import Card from "../../components/card/Card";
import GoTo from "../../components/GoTo/GoTo";
import adata from "../../imagenes/adata.png";
import amd from "../../imagenes/amd.png";
import asrock from "../../imagenes/asrock.png";
import rogstrix from "../../imagenes/rogstrix.png";
import tForce from "../../imagenes/t-force.png";
import western from "../../imagenes/western-digital.png";
import zotac from "../../imagenes/zotacGaming.png";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

const options = ["Option 1", "Option 2"];

export default function Productos() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const [value2, setValue2] = React.useState(options[0]);
  const [inputValue2, setInputValue2] = React.useState("");

  const [value3, setValue3] = React.useState(options[0]);
  const [inputValue3, setInputValue3] = React.useState("");

  const [value4, setValue4] = React.useState(options[0]);
  const [inputValue4, setInputValue4] = React.useState("");

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
      <div className="mainProductos">
        <div className="divInicio">
          <h2>
            PRODUCTOS<span className="blanco">.</span>
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

      <div className="mc-containerProductos" id="productos">
        <div className="mc-ContainerFiltros">
          <h2 className="mc-subtituloProducto">Busca tu Producto</h2>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" />
          {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
              <div>{`inputValue: '${inputValue}'`}</div> */}
          <br />
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Tipos" />}
          />
          {/* <h3 className='titulos-input'>Marca</h3>
            <select name="" id="" className='mc-inputs'></select>
            <h3 className='titulos-input'>Color</h3>
            <select name="" id="" className='mc-inputs'></select>
            <h3 className='titulos-input'>Precio</h3> */}
          {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
              <div>{`inputValue: '${inputValue}'`}</div> */}
          <br />
          <Autocomplete
            value={value2}
            onChange={(event, newValue) => {
              setValue2(newValue);
            }}
            inputValue={inputValue2}
            onInputChange={(event, newInputValue) => {
              setInputValue2(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Marca" />}
          />
          {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
              <div>{`inputValue: '${inputValue}'`}</div> */}
          <br />
          <Autocomplete
            value={value3}
            onChange={(event, newValue) => {
              setValue3(newValue);
            }}
            inputValue={inputValue3}
            onInputChange={(event, newInputValue) => {
              setInputValue3(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Color" />}
          />
          {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
              <div>{`inputValue: '${inputValue}'`}</div> */}
          <br />
          <Autocomplete
            value={value4}
            onChange={(event, newValue) => {
              setValue4(newValue);
            }}
            inputValue={inputValue4}
            onInputChange={(event, newInputValue) => {
              setInputValue4(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Tipos" />}
          />
          <br />
          {/* <input type="range" className='input-filterRange'/>
            <input type="range" className='input-filterRange' /> */}
          <h3 className="titulos-input">Precio</h3>
          <div className="mc-containerPrecios">
            <TextField
              id="outlined-basic"
              label="$ Minimo"
              sx={{ width: 120 }}
              variant="outlined"
            />
            <h4 className="mc-guionPrecio">-</h4>
            <TextField
              id="outlined-basic"
              label="$ Maximo"
              sx={{ width: 120 }}
              variant="outlined"
            />
          </div>
          <aside className="mc-containerPublicidad"></aside>
        </div>
        <div className="mc-containerCardsProductos">
          <div className="mc-containerTitulosProductos">
            <h2 className="mc-TituloProductos">Nuestra Tienda<span className="blanco">.</span></h2>
          </div>
          {array.map((x) => (
            <Card objeto={x}></Card>
          ))}
        </div>
      </div>
      <div class="slider" style={{marginTop:50, marginBottom: 50}}>
        <div class="slide-track">
          <div class="slide">
            <img src={adata} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={amd} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={rogstrix} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={tForce} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={zotac} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={rogstrix} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={tForce} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={adata} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={zotac} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={rogstrix} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={tForce} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={zotac} height="100" width="250" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
