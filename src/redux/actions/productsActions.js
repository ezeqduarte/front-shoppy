import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/api";

const productos = createAsyncThunk("productos", async () => {
  try {
    const res = await axios.get(`${API}product`);
    const productosFiltrado = res.data.response.filter(producto=>producto.stock !== 0)
    
    if (res.data.success) {
      return {
        success: true,
        response: productosFiltrado,
      };
    } else {
      return {
        success: false,
        response: res.data.message,
      };
    }
  } catch (error) {
    console.log(error.message);
  }
  
});

const productosFiltrados = createAsyncThunk("productosFiltrados", async ({peticion}) => {
  try {

    const res = await axios.get(`${API}product/${peticion}`);
    const productosConStock = res.data.response.filter(producto=>producto.stock !== 0)


    if (res.data.success) {
      return {
        success: true,
        response: productosConStock,
      };
    } else {
      return {
        success: false,
        response: res.data.message,
      };
    }
  } catch (error) {
    console.log(error.message);
  }
  
});



const productsActions = {productos, productosFiltrados};

export default productsActions;
