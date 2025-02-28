import { createSlice } from "@reduxjs/toolkit";

import signin from "./actions/signin";
import register from "./actions/register";

type TAuthState = {
  isLoading: boolean;
  isLoadingAction: boolean;
  error: string | null;
  accessToken: string;
  user: {
    id: number;
    email: string;
    avatar: string;
    lastName: string;
    firstName: string;
  } | null;
};

const initialState: TAuthState = {
  error: null,
  isLoading: false,
  isLoadingAction: false,
  user: null,
  accessToken: "",
  // user: {
  //   id: 1,
  //   lastName: "one",
  //   firstName: "user",
  //   email: "user1@gmail.com",
  //   avatar:
  //     "https://web-master-intern-workshop-1-ecommerce-backend.vercel.app/data/users/user-avatar-1.png",
  // },
  // accessToken:
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTc0MDcyMDc2MSwiZXhwIjoxNzQwNzI0MzYxLCJzdWIiOiIxIn0.SJ1d8q8K0w1Gvd3O1Z6BtaqSZWLU3dQiNNSGo40Cd4E",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUi: (state) => {
      state.error = null;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.accessToken = "";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.error = null;
        state.isLoadingAction = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoadingAction = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoadingAction = false;
        if (typeof action.payload === "string") state.error = action.payload;
      });

    builder
      .addCase(signin.pending, (state) => {
        state.error = null;
        state.isLoadingAction = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoadingAction = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isLoadingAction = false;
        if (typeof action.payload === "string") state.error = action.payload;
      });
  },
});

export { register, signin };
export default authSlice.reducer;
export const { resetUi, logout } = authSlice.actions;
