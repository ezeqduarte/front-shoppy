import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/api";

const productos = createAsyncThunk("productos", async () => {
  try {
    const res = await axios.get(`${API}product`);
    
    if (res.data.success) {
      return {
        success: true,
        response: res.data.response,
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

const productsActions = {productos};

export default productsActions;
