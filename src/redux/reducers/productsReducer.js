import { createReducer } from "@reduxjs/toolkit";
import productsActions from "../actions/productsActions";
const { productos } = productsActions;

const initialState = {
  TodosLosproductos: [],
};

const productsReducer = createReducer(initialState, (builder) => {
  builder.addCase(productos.fulfilled, (state, action) => {
    const { success, response } = action.payload;
    console.log(action.payload);
    if (success) {
      return {
        ...state,
        TodosLosproductos: response
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
