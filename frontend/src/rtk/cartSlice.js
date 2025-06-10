import { createSlice } from "@reduxjs/toolkit";

const getInitialCartState = () => {
  if (typeof window !== "undefined") {
    try {
      const cart = localStorage.getItem("cart");
      if (cart) return JSON.parse(cart);
    } catch (e) {
      console.warn("Invalid cart in localStorage", e);
    }
  }
  return { products: [], totalQuantity: 0, totalPrice: 0 };
};

const saveCartToLocalStorage = (state) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(state));
  }
};

const initialState = getInitialCartState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
      } else {
        const itemToAdd = {
          id: newItem.id,
          name: newItem.name,
          price: newItem.discountedPrice,
          quantity: 1,
          totalPrice: newItem.discountedPrice,
          image: newItem.image,
        };
        state.products.push(itemToAdd);
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.discountedPrice;

      saveCartToLocalStorage(state);
    },

    removeFromCart(state, action) {
      const id = action.payload;
<<<<<<< Updated upstream
      const itemToRemove = state.products.find((item) => item.id === id);

      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.totalPrice;

=======
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
>>>>>>> Stashed changes
        state.products = state.products.filter((item) => item.id !== id);

        // prevent negative values
        if (state.totalQuantity < 0) state.totalQuantity = 0;
        if (state.totalPrice < 0) state.totalPrice = 0;

        saveCartToLocalStorage(state);
      }
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);

      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalQuantity += 1;
        state.totalPrice += item.price;

        saveCartToLocalStorage(state);
      }
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;

        saveCartToLocalStorage(state);
      }
    },

    clearCart(state) {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveCartToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const getCartFromLocalStorage = () => {
//   if (typeof window !== "undefined") {
//     const cart = localStorage.getItem("cart");
//     return cart
//       ? JSON.parse(cart)
//       : { products: [], totalQuantity: 0, totalPrice: 0 };
//   }
// };

// const initialState = getCartFromLocalStorage();

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const newItem = action.payload;
//       const itemIndex = state.products.find((item) => item.id === newItem.id);
//       if (itemIndex) {
//         itemIndex.quantity++;
//         itemIndex.totalPrice += newItem.discountedPrice;
//       } else {
//         state.products.push({
//           id: newItem.id,
//           name: newItem.name,
//           price: newItem.discountedPrice,
//           quantity: 1,
//           totalPrice: newItem.discountedPrice,
//           image: newItem.image,
//         });
//       }
//       state.totalPrice += newItem.discountedPrice;
//       state.totalQuantity++;
//       savedCartToLocalStorage(state);
//     },
//     removeFromCart(state, action) {
//       const id = action.payload;
//       const findItem = state.products.find((item) => item.id === id);
//       if (findItem) {
//         state.totalPrice -= findItem.totalPrice;
//         state.products = state.products.filter((item) => item.id !== id);
//         state.totalQuantity -= findItem.quantity;
//       }
//       savedCartToLocalStorage(state);
//     },
//     increaseQuantity(state, action) {
//       const id = action.payload;
//       const findItem = state.products.find((item) => item.id === id);
//       if (findItem) {
//         findItem.quantity++;
//         findItem.totalPrice += findItem.price;
//         state.totalQuantity++;
//         state.totalPrice += findItem.price;
//       }
//       savedCartToLocalStorage(state);
//     },
//     decreaseQuantity(state, action) {
//       const id = action.payload;
//       const findItem = state.products.find((item) => item.id === id);
//       if (findItem.quantity > 1) {
//         if (findItem) {
//           findItem.quantity--;
//           findItem.totalPrice -= findItem.price;
//           state.totalQuantity--;
//           state.totalPrice -= findItem.price;
//         }
//       }
//       savedCartToLocalStorage(state);
//     },
//   },
// });

// const savedCartToLocalStorage = (cartSate) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("cart", JSON.stringify(cartSate));
//   }
// };

// export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
//   cartSlice.actions;
// export default cartSlice.reducer;
