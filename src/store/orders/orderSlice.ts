import { createSlice } from "@reduxjs/toolkit";

import getOrders from "./actions/getOrders";
import createOrder from "./actions/createOrder";

import { TOrder } from "../../types/orders.types";

type OrderState = {
  isLoading: boolean;
  error: string | null;
  orders: TOrder[];
};

const initialState: OrderState = {
  orders: [],
  error: null,
  isLoading: true,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,

  reducers: {
    resetOrderState: (state) => {
      state.error = null;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.orders.push(action.payload);
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") state.error = action.payload;
      });

    builder
      .addCase(getOrders.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") state.error = action.payload;
      });
  },
});

export { createOrder, getOrders };
export const { resetOrderState } = ordersSlice.actions;
export default ordersSlice.reducer;
