import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api_config";
import { Product } from "../products/products";

export interface Order {
  id?: number;
  reserve_id: number;
  cart_items: Array<{ product_id: number; quantity: number; product: Product }>;
  total?: number;
  status?: string;
  created_at?: string;
}

export interface OrderState {
  orders: Array<Order>;
  make_order: Order;
  selected_order: Order;
  status: string;
  error: any;
}

const initialState: OrderState = {
  orders: [],
  make_order: {} as Order,
  selected_order: {} as Order,
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

export const getAllOrdersByReservationId = createAsyncThunk(
  "orders/getAllOrdersByReservationId",
  async (id: number) => {
    const res = await api.get(`/myorders/${id}`);
    console.log("RESERVATION ID", id + " ORDERS ->", res.data);
    return res.data.orders;
  }
);

export const getOrderById = createAsyncThunk(
  "orders/getOrderById",
  async (id: number) => {
    const res = await api.get(`/orders/${id}`);
    console.log("ORDER => ", res.data.data);
    return res.data.data;
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
      })
      .addCase(getAllOrdersByReservationId.pending, (state) => {
        state.status = "loading orders";
      })
      .addCase(getAllOrdersByReservationId.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.orders = payload;
      })
      .addCase(getAllOrdersByReservationId.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getOrderById.pending, (state) => {
        state.status = "loading order by id";
      })
      .addCase(getOrderById.fulfilled, (state, { payload }) => {
        state.status = "succeeded in getting order by id";
        state.selected_order = payload;
      })
      .addCase(getOrderById.rejected, (state) => {
        state.status = "error in getting order by id";
      });
  },
});

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
