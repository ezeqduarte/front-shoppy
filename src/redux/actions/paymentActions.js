import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/api";

const mercadoPago = createAsyncThunk("mercadoPago", async (preference) => {
    
    const url=`${API}payment`
    
  try {
    const res = await axios.post(url,preference);
    console.log(res)
    return{
        response: res.data,
        success: true
    } 
  } catch (error) {
    console.log(error.response.data);
  }
});



const paymentActions = { mercadoPago};

export default paymentActions;
