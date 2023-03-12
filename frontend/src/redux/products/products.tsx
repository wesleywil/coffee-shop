import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface ProductsState {
  allProducts: Array<Product>;
  products: Array<Product>;
  status: string;
  error: any;
}

const initialState: ProductsState = {
  allProducts: [],
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/products/");
    console.log("Result Products =>", res.data);
    return res.data.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filter_by_category: (state, { payload }) => {
      let filteredProducts = state.allProducts.filter((item) => {
        return item.category.toLowerCase() === payload.toLowerCase();
      });
      return {
        ...state,
        products: filteredProducts,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.allProducts = payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "error";
      });
  },
});

export const { filter_by_category } = productsSlice.actions;

export default productsSlice.reducer;
