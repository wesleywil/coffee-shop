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
    get_all_products: (state) => {
      state.products = state.allProducts;
    },
    filter_by_category: (state, { payload }) => {
      let filteredProducts = state.allProducts.filter((item) => {
        return item.category.toLowerCase() === payload.toLowerCase();
      });
      return {
        ...state,
        products: filteredProducts,
      };
    },
    search_product: (state, { payload }) => {
      if (payload === undefined || payload === null) {
        return state; // Return the current state without changing the products array.
      } else if (payload === "") {
        return {
          ...state,
          products: state.allProducts,
        };
      } else {
        let filteredProducts = state.allProducts.filter((item) => {
          return item.title.toLowerCase().includes(payload.toLowerCase());
        });
        return {
          ...state,
          products: filteredProducts,
        };
      }
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
        state.products = payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "error";
      });
  },
});

export const { get_all_products, filter_by_category, search_product } =
  productsSlice.actions;

export default productsSlice.reducer;
