import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import handleAxiosErr from "../../../utils/handleAxiosErr";

const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (subtotal: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;

    const orderItems = cart.products?.map((el) => ({
      id: el.id,
      img: el.img,
      title: el.title,
      price: el.price,
      quantity: cart.items[el.id],
    }));

    // try {
    //   const response = await axios.post(
    //     `${import.meta.env.BASE_API_URL}/orders`,
    //     {
    //       subtotal,
    //       userId: 12,
    //       items: orderItems,
    //     }
    //   );
    //   return response.data;
    // } catch (err) {
    //   return rejectWithValue(handleAxiosErr(err));
    // }

    return { id: 1, subtotal, userId: 12, items: orderItems };
  }
);

export default createOrder;
