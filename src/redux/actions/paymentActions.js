import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/api";

const mercadoPago = createAsyncThunk("mercadoPago", async (preference) => {
    
    const url=`${API}payment`
    console.log(preference)
  try {
    const res = await axios.get(url,preference);
    console.log(res,'aqui')
  } catch (error) {
    console.log(error.response.data);
  }
});



const paymentActions = { mercadoPago};

export default paymentActions;
