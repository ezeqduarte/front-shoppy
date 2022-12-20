import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/api";

const mercadoPago = createAsyncThunk("mercadoPago", async (data) => {

  try {
    const res = await axios.get(`${API}payment`);
    console.log(res)
  } catch (error) {
    console.log(error);
  }
});



const paymentActions = { mercadoPago};

export default paymentActions;
