import { createReducer } from "@reduxjs/toolkit";
import paymentActions from "../actions/paymentActions";
const { mercadoPago } =
paymentActions;

const initialState = {
    
};
const paymentsReducer = createReducer(initialState, (builder) => {
    builder.addCase(mercadoPago.fulfilled, (state, action) => {
        
        return {
        
        };
  });
})

export default paymentsReducer;