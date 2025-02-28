import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import handleAxiosErr from "../../../utils/handleAxiosErr";

import { BASE_API_URL } from "../../../utils/constants";

type TFormDate = {
  email: string;
  password: string;
};

type TResponse = {
  user: {
    id: number;
    email: string;
    avatar: string;
    lastName: string;
    firstName: string;
  };
  accessToken: string;
};

const signin = createAsyncThunk(
  "signin",
  async (formData: TFormDate, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.post<TResponse>(
        `${BASE_API_URL}/signin`,
        formData
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(handleAxiosErr(err));
    }
  }
);

export default signin;
