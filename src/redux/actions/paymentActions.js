import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/api";

const mercadoPago = createAsyncThunk("mercadoPago", async (data) => {
    
    const url=`${API}payment`
    console.log(data)
  try {
    const res = await axios.get(url,data);
    console.log(res,'aqui')
  } catch (error) {
    console.log(error);
  }
});



const paymentActions = { mercadoPago};

export default paymentActions;
