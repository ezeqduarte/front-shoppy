import React from 'react'
import './productos.css'
import Card from '../../components/card/Card'
import GoTo from '../../components/GoTo/GoTo'
import adata from '../../imagenes/adata.png'
import amd from '../../imagenes/amd.png'
import asrock from '../../imagenes/asrock.png'
import rogstrix from '../../imagenes/rogstrix.png'
import tForce from '../../imagenes/t-force.png'
import western from '../../imagenes/western-digital.png'
import zotac from '../../imagenes/zotacGaming.png'

export default function Productos() {

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

  return (<>

    <div className='mainProductos'>
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
    <div className='mc-containerTitulosProductos'>
    <h2 className='mc-TituloProductos'>Nuestra Tienda</h2></div>
    <div className='mc-containerProductos' id="productos">
        <div className='mc-ContainerFiltros'>
            <h2 className='mc-subtituloProducto'>Busca tu Producto</h2>
            <h3 className='titulos-input'>Nombre</h3>
            <input type="text" className='mc-inputs'/>
            <h3 className='titulos-input'>Tipo</h3>
            <select name="" id="" className='mc-inputs'></select>
            <h3 className='titulos-input'>Marca</h3>
            <select name="" id="" className='mc-inputs'></select>
            <h3 className='titulos-input'>Color</h3>
            <select name="" id="" className='mc-inputs'></select>
            <h3 className='titulos-input'>Precio</h3>
            <input type="range" className='input-filterRange'/>
            <input type="range" className='input-filterRange' />
            <aside className='mc-containerPublicidad'>
            </aside>
        </div>
        <div className='mc-containerCardsProductos'>        
            {array.map(x=><Card objeto={x}></Card>)}
        </div>
    </div>
        <div class="slider">
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
  </>)
}