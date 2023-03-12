import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

export interface AccountsState {
  user: User;
  userToken: string;
  status: string;
  error: any;
}

const initialState: AccountsState = {
  user: {} as User,
  userToken: "",
  status: "idle",
  error: null,
};

export const registerUser = createAsyncThunk(
  "account/registerUser",
  async ({ name, email, password }: Partial<User>) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const res = await axios.post(
      "http://127.0.0.1:8000/api/register",
      { name, email, password },
      config
    );
    return res.data.data.token;
  }
);

export const getUserInfo = createAsyncThunk(
  "account/getUserInfo",
  async ({ userToken }: Partial<AccountsState>) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    const res = await axios.get("http://127.0.0.1:8000/api/user", config);
    return res.data.data;
  }
);

export const loginUser = createAsyncThunk(
  "account/login",
  async ({ email, password }: Partial<User>) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const res = await axios.post(
      "http://127.0.0.1:8000/api/login",
      { email, password },
      config
    );
    return res.data.data.token;
  }
);

export const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.user = payload;
      })
      .addCase(getUserInfo.rejected, (state) => {
        state.error = "error in getting the user info";
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "trying to register the user";
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.status = "succeeded in the user creation";
        state.userToken = payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.error = "error in registring the new user";
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "trying to log the user";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.status = "succeeded in log the user";
        state.userToken = payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.error = "error in login the user";
      });
  },
});

export const {} = accountsSlice.actions;

export default accountsSlice.reducer;
