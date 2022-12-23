import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GoTo from "../../components/GoTo/GoTo";
import API from "../../config/api";
import paymentActions from "../../redux/actions/paymentActions";
import productsActions from "../../redux/actions/productsActions";
import userActions from "../../redux/actions/userActions";
import "./success.css";

export default function Success() {
  let {
    rol,
    nombre,
    carrito,
    favoritos,
    apellido,
    logged,
    aprove,
    monedas,
  } = useSelector((store) => store.userReducer);

  let { TodosLosproductos } = useSelector((store) => store.productsReducer);

  let [precioCompra, setPrecioCompra] = React.useState(0);

  const { productos,editarProducto } = productsActions;
  const { editUser } = userActions;

  let [usuarioPiyu,setUsuarioPiyu]=useState()
  let [usuarioCoin,setUsuarioCoin]=useState()

  let token = JSON.parse(localStorage.getItem("token"));
  token=token.token.user

  const dispatch = useDispatch();
  const productosTotales = async () => {
    dispatch(productos());
  };

  let usuario=async()=>{
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let a= await axios.get(`${API}auth/me`,headers)
    .then(a=>{
      setUsuarioCoin(a.data.response.coins)
      setUsuarioPiyu(a.data.response)
      console.log(usuarioPiyu)
    })
  }

  let precioTotal= () => {
    let precioCompra2
    if (carrito.length !== 0) {
        precioCompra2 = carrito
        .map((x) => x.productId.price * x.quantity)
        .reduce(function (valorAnterior, valorActual) {
          return valorAnterior + valorActual;
        });
      setPrecioCompra(usuarioPiyu ? precioCompra2-usuarioCoin : precioCompra2);
    }}

  let agregarCoins=async()=>{
    let data={
      coins: usuarioPiyu ? 0 : Math.round(precioCompra*0.02)
    }
    console.log(data)
    console.log(usuarioPiyu)
    console.log(precioCompra)

    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let a= await axios.patch(`${API}auth/me`,data,headers)
    console.log(a)
  }
  

  let vaciarCarrito=async()=>{
    let data={
      products:[]
    }
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let a= await axios.patch(`${API}auth/me`,data,headers)
    console.log(a)
  }

  useEffect(() => {
    usuario()
    productosTotales();
    precioTotal()
    agregarCoins()
    vaciarCarrito()
  }, []);

  /* console.log(carrito); */

  

  let createBill = async () => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = `${API}bill`;
    let data = {
      totalPrice: precioCompra,
      discount: usuarioPiyu,
    };
    if (token !== "") {
      let res = await axios.post(url, data, headers);
      console.log(res);
    }
  };

  /* useEffect(() => {
    createBill();
  }, [token]);
  

  
  let precioDescuento=()=>{
    if(usuarioPiyu){
      precioCompra=precioCompra-monedas
    }
  }

  let stockEdit= async()=>{
   
    carrito.map(x=>{

          let producto={
            stock:x.productId.stock-x.quantity 
          };
          console.log(producto)
          dispatch(editarProducto({token,producto,id:x.productId._id})) 

    })
    

  } 
  let editMonedas=async()=>{
    
    let data={}

    if(usuarioPiyu){
      data= {
        coins:0
      }
      
      let url = `${API}auth/me`;
      let headers = { headers: { Authorization: `Bearer ${token}` } }; 
      let res= await axios.patch(url,data,headers)
      console.log(data)
    }
    if(!usuarioPiyu || monedas===0){
      if (carrito.length !== 0) {
        let precioCompra2 = carrito
          .map((x) => x.productId.price * x.quantity)
          .reduce(function (valorAnterior, valorActual) {
            return valorAnterior + valorActual;
          });
      
      data= {
        coins: monedas+(precioCompra2*0.02)
      }
      
      let url = `${API}auth/me`;
      let headers = { headers: { Authorization: `Bearer ${token}` } }; 
      let res= await axios.patch(url,data,headers)
      console.log(monedas)
    }
    }
  }
  let eliminarStock=async()=>{

    let data= {
            products: []
    }
      let url = `${API}auth/me`;
      let headers = { headers: { Authorization: `Bearer ${token}` } }; 
      let res= await axios.patch(url,data,headers)
      
    }

  useEffect(()=>{
    editMonedas();
    stockEdit();
    setTimeout(async function () {
      await eliminarStock()
    },2000);
    console.log(usuarioPiyu);
  },[usuarioPiyu]) 

  precioDescuento()
  
 */
  //crear la bill
  //editar stock de los productos
  //editar usuario(vaciar carrito,setear usuarioPiyu)

  return (
    <div className="Ingreso">
      <img
        className="shoppyLogoRegistro"
        src="https://cdn.discordapp.com/attachments/830354293822324736/1051744433550397510/Sin_titulo-2.png"
        alt="logo_shoppy"
      />

      <div className="edFormSuccess">
        <h2>
          PAGO REALIZADO CON ÉXITO<span className="blanco">.</span>
        </h2>
        <h4>Muchas gracias por confiar en nosotros</h4>
        {/* <p className="botonAceptarVolver">

            VOLVER
            
        </p> */}
      </div>
      <div className="edFotoSuccess"></div>
      <NavLink to={"/inicio"}>
        <div className="edVolverAInicioRegistro">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            color="#f3f3f3"
            fill="currentColor"
            className="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>
          <p>volver</p>
        </div>
        <ToastContainer />
      </NavLink>
    </div>
  );
}
