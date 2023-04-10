import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../services/api_config";

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
  product: Product;
  status: string;
  error: any;
}

const initialState: ProductsState = {
  allProducts: [],
  products: [],
  product: {} as Product,
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await api.get("/products/");
    console.log("Result Products =>", res.data);
    return res.data.data;
  }
);

export const selectProduct = createAsyncThunk(
  "products/selectProduct",
  async (id: number) => {
    const res = await api.get(`/products/${id}`);
    return res.data.data;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data: any) => {
    const res = await api.post("/products", data);
    return res.data.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (data: any) => {
    const { id, ...noIdData } = data;
    const res = await api.put(`/products/${id}`, noIdData);
    return res.data.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: number) => {
    const res = await api.delete(`/products/${id}`);
    return res.data.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clean_selected_product: (state) => {
      state.product = {} as Product;
    },
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
        return state;
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
      })
      .addCase(selectProduct.pending, (state) => {
        state.status = "trying to select the product";
      })
      .addCase(selectProduct.fulfilled, (state, { payload }) => {
        state.status = "succeeded in selecting the product";
        state.product = payload;
      })
      .addCase(selectProduct.rejected, (state) => {
        state.error = "error while trying to select the product";
      })
      .addCase(createProduct.pending, (state) => {
        state.status = "trying to create a new product";
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.status = "product created successfully";
      })
      .addCase(createProduct.rejected, (state) => {
        state.error = "error in creating a new product";
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = "trying to update the product";
      })
      .addCase(updateProduct.fulfilled, (state) => {
        state.status = "product updated successfully";
      })
      .addCase(updateProduct.rejected, (state) => {
        state.error = "error while trying to update the product";
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "trying to delete the product";
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.status = "product was deleted successfully";
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.error = "error while trying to delete the product";
      });
  },
});

export const {
  clean_selected_product,
  get_all_products,
  filter_by_category,
  search_product,
} = productsSlice.actions;

export default productsSlice.reducer;
