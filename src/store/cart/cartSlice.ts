import { createSlice } from "@reduxjs/toolkit";

import getCartProducts from "./actions/getCartProducts";

import { TProductWithQty } from "../../types/product.types";

type TCartState = {
  isLoading: boolean;
  error: string | null;
  products: TProductWithQty[];

  items: { [key: string]: number };
};

const initialState: TCartState = {
  items: { "11": 10, "12": 2, "14": 1, "15": 6 },
  error: null,
  products: [],
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) state.items[id]++;
      else state.items[id] = 1;
    },

    changeQty: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      delete state.items[id];
      state.products = state.products.filter((el) => el.id !== id);
      if (Object.keys(state.items).length == 0) state.isLoading = false;
    },

    clearCart: (state) => {
      state.items = {};
      state.error = null;
      state.products = [];
      state.isLoading = false;
    },

    cleanUpCart: (state) => {
      state.products = [];
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCartProducts.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getCartProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getCartProducts.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") state.error = action.payload;
      });
  },
});

export { getCartProducts };
export default cartSlice.reducer;
export const { addToCart, changeQty, clearCart, cleanUpCart, removeFromCart } =
  cartSlice.actions;
