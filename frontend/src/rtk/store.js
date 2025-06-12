import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
import { grainApi } from './grainApi';


export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    [grainApi.reducerPath]: grainApi.reducer,

  },

   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(grainApi.middleware),
});
