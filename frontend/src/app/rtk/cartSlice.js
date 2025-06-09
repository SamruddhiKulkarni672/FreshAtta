import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = cartSlice.actions;
export default cartSlice.reducer;
