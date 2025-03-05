import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../../store";

import { TOrder } from "../../../types/orders.types";

import { BASE_API_URL } from "../../../utils/constants";
import handleAxiosErr from "../../../utils/handleAxiosErr";

type TResponse = TOrder[];

const getOrders = createAsyncThunk("orders/getOrders", async (_, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue, getState, signal } = thunkAPI;
  const { auth } = getState() as RootState;

  try {
    const response = await axios.get<TResponse>(
      `${BASE_API_URL}/orders?userId=${auth.user?.id}`,
      { signal }
    );

    if (!response.data.length) return fulfillWithValue([]);

    return response.data;
  } catch (err) {
    return rejectWithValue(handleAxiosErr(err));
  }
});

export default getOrders;
