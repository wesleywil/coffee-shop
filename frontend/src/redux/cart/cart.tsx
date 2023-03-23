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
      state.total = payload;
    },
    add_quantity: (state, { payload }) => {
      const updatedCartProducts = state.cart_products.map((cartProduct) => {
        if (cartProduct.product.id === payload) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }
        return cartProduct;
      });

      return {
        ...state,
        cart_products: updatedCartProducts,
      };
    },
    sub_quantity: (state, { payload }) => {
      const updatedCartProducts = state.cart_products.map((cartProduct) => {
        if (cartProduct.product.id === payload) {
          if (cartProduct.quantity > 1) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }
        }
        return cartProduct;
      });

      return {
        ...state,
        cart_products: updatedCartProducts,
      };
    },
    remove_product: (state, { payload }) => {
      state.cart_products = state.cart_products.filter(
        (item) => item.product.id !== payload
      );
    },
  },
});

export const {
  switch_hidden,
  add_to_cart,
  set_cart_total,
  add_quantity,
  sub_quantity,
  remove_product,
} = cartSlice.actions;

export default cartSlice.reducer;
