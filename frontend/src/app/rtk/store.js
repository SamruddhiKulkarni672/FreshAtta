import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cartSlice: cartSliceReducer,
   },
});

 