import { createReducer } from "@reduxjs/toolkit";
import productsActions from "../actions/productsActions";
const { productos, productosFiltrados } = productsActions;

const initialState = {
  TodosLosproductos: [],
  productosFiltradosArray: [],
};

const productsReducer = createReducer(initialState, (builder) => {
  builder.addCase(productos.fulfilled, (state, action) => {
    const { success, response } = action.payload;

    if (success) {
      return {
        ...state,
        TodosLosproductos: response,
      };
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  });

  builder.addCase(productosFiltrados.fulfilled, (state, action) => {
    const { success, response } = action.payload;
    
    if (success) {
      return {
        ...state,
        productosFiltradosArray: response,
      };
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  });
});

export default productsReducer;
