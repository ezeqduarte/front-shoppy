import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/api";

const ingress = createAsyncThunk("ingress", async (datos) => {
  try {
    
    const res = await axios.post(`${API}auth/signin`, datos);

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

const reIngress = createAsyncThunk("reIngress", async (token) => {
  let url = `${API}auth/token`;

  let headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
    let user = await axios.post(url, null, headers);

    return {
      success: true,
      response: {
        user: user.data.response,
        token,
      },
    };
  } catch (error) {

    return {
      success: false,
      response: error.response.data.message,
    };
  }
});

const logout = createAsyncThunk("logout", async (token) => {
  let url = `${API}auth/signout`;
  let headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    let user = await axios.post(url, null, headers);

    return {
      success: true,
      response: user.data.message,
    };
  } catch (error) {
    return {
      success: false,
      response: error.response.data.message,
    };
  }
});


const userActions = {
  ingress,
  reIngress,
  logout,
};

export default userActions;
