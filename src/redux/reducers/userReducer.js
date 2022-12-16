import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";
const { ingress, reIngress, logout, getDatos, editProfile } = userActions;

const initialState = {
  nombre: "",
  apellido: "",
  dni: null,
  direccion: "",
  rol: "",
  foto: "",
  edad: null,
  email: "",
  logged: false,
  carrito: [],
  favoritos: [],
  date: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(ingress.fulfilled, (state, action) => {
    const { success, response } = action.payload;

    if (success) {
      let { user, token } = response;
      localStorage.setItem("token", JSON.stringify({ token: { user: token } }));

      let newState = {
        ...state,
        nombre: user.name,
        apellido: user.lastName,
        dni: user.dni,
        direccion: user.adress,
        rol: user.role,
        foto: user.photo,
        edad: user.age,
        email: user.email,
        date: user.date,
        logged: true,
        carrito: user.products,
        favoritos: user.favorites,
        token: token,
      };
      return newState;
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  });

  builder.addCase(reIngress.fulfilled, (state, action) => {
    const { success, response } = action.payload;

    if (success) {
      let { user, token } = response;

      let newState = {
        ...state,
        nombre: user.name,
        apellido: user.lastName,
        date: user.date,
        dni: user.dni,
        email: user.email,
        direccion: user.adress,
        foto: user.photo,
        logged: true,
        token: token,
        rol: user.role,
        foto: user.photo,
        edad: user.age,
        email: user.email,
        logged: true,
        carrito: user.products,
        favoritos: user.favorites,
        token: token,
      };
      return newState;
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  });

  builder.addCase(logout.fulfilled, (state, action) => {
    const { success, response } = action.payload;
    if (success) {
      localStorage.removeItem("token");
      let newState = {
        ...state,
        name: "",
        photo: "",
        id: "",
        logged: false,
        token: "",
        role: "",
      };
      return newState;
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  });
});

export default userReducer;
