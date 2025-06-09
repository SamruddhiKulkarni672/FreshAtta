import { createSlice } from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    return cart
      ? JSON.parse(cart)
      : { products: [], totalQuantity: 0, totalPrice: 0 };
  }
};

const initialState = getCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.discountedPrice;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.discountedPrice,
          quantity: 1,
          totalPrice: newItem.discountedPrice,
          image: newItem.image,
        });
      }
      state.totalPrice += newItem.discountedPrice;
      state.totalQuantity++;
      savedCartToLocalStorage(state);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.products = state.products.filter((item) => item.id !== id);
        state.totalQuantity -= findItem.quantity;
      }
      savedCartToLocalStorage(state);
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
      savedCartToLocalStorage(state);
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem.quantity > 1) {
        if (findItem) {
          findItem.quantity--;
          findItem.totalPrice -= findItem.price;
          state.totalQuantity--;
          state.totalPrice -= findItem.price;
        }
      }
      savedCartToLocalStorage(state);
    },
  },
});

const savedCartToLocalStorage = (cartSate) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cartSate));
  }
};

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
