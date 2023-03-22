import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../products/products";

export interface CartProduct {
  product: Product;
  quantity: number;
}

export interface CartState {
  cart_products: Array<CartProduct>;
  total: number;
  hidden: boolean;
}

const initialState: CartState = {
  cart_products: [],
  total: 0.0,
  hidden: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    switch_hidden: (state) => {
      state.hidden = !state.hidden;
    },
    add_to_cart: (state, { payload }) => {
      const item = state.cart_products.find(
        (obj) => obj.product.id === payload.product.id
      );
      if (!item)
        return {
          ...state,
          cart_products: [...state.cart_products, payload],
        };
    },
    set_cart_total: (state, { payload }) => {
      state.total = 0.0;
    },
  },
});

export const { switch_hidden, add_to_cart, set_cart_total } = cartSlice.actions;

export default cartSlice.reducer;
