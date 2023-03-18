import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Table {
  id: number;
  seats: number;
  status: string;
}

export interface TableState {
  tables: Array<Table>;
  status: string;
  error: any;
}

const initialState: TableState = {
  tables: [],
  status: "idle",
  error: null,
};

export const fetchTables = createAsyncThunk("tables/fetchTables", async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/tables/");
  return res.data.data;
});

export const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTables.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTables.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.tables = payload;
      })
      .addCase(fetchTables.rejected, (state) => {
        state.error = "error";
      });
  },
});

export const {} = tablesSlice.actions;

export default tablesSlice.reducer;
