import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api_config";

export interface Order {
  id?: number;
  reserve_id: number;
  cart_items: Array<{ product_id: number; quantity: number }>;
  total?: number;
  status?: string;
}

export interface OrderState {
  orders: Array<Order>;
  make_order: Order;
  status: string;
  error: any;
}

const initialState: OrderState = {
  orders: [],
  make_order: {} as Order,
  status: "idle",
  error: null,
};

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async ({
    reserve_id,
    cart_items,
  }: {
    reserve_id: number;
    cart_items: Array<{ product_id: number; quantity: number }>;
  }) => {
    const res = await api.post("/orders", { reserve_id, cart_items });
    return res.data;
  }
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = "creating a new order";
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.status = "successfully created a new order";
      })
      .addCase(createOrder.rejected, (state) => {
        state.status = "error in creating a new order";
      });
  },
});

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
