import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/api";

const ingress = createAsyncThunk("ingress", async (datos) => {
  try {
    const res = await axios.post(`${API}auth/signin`, datos);
  
    if(res.data.success){
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

const userActions = {
  ingress,
};

export default userActions;
