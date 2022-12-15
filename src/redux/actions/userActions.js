import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/api";

const ingress = createAsyncThunk("ingress", async (datos) => {
  try {
    const res = await axios.post(`${API}auth/signin`, datos);
    console.log(res);
    return {
      success: true,
      response: res.data.response,
    };
  } catch (error) {
    console.log(error.message);
  }
});

const userActions = {
  ingress,
};

export default userActions;
