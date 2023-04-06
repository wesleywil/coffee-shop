import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api_config";

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
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
  async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    const res = await api.post("/register", { name, email, password });
    localStorage.setItem("userToken", res.data.data.token);
    return res.data.data.token;
  }
);

export const getUserInfo = createAsyncThunk("account/getUserInfo", async () => {
  const res = await api.get("/user");
  return res.data;
});

export const loginUser = createAsyncThunk(
  "account/login",
  async ({ email, password }: { email: string; password: string }) => {
    const res = await api.post("/login", { email, password });
    console.log("USER TOKEN FROM LOGIN => ", res.data.token);
    localStorage.setItem("userToken", res.data.token);
    return res.data.token;
  }
);

export const logoutUser = createAsyncThunk("account/logout", async () => {
  const res = await api.post("/logout");
  localStorage.removeItem("userToken");
  return res.data;
});

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
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = "trying to log out the user";
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.status = "succeeded in logging out the user";
        state.userToken = payload;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.error = "error in logging out the user";
      });
  },
});

export const {} = accountsSlice.actions;

export default accountsSlice.reducer;
