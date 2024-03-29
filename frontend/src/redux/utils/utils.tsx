import { createSlice } from "@reduxjs/toolkit";

interface SelectTable {
  id: number;
  seats: number;
}

export interface UtilsState {
  categories_tab: string;
  select_table_hidden: boolean;
  select_table: SelectTable;
  order_details_hidden: boolean;
  admin_form_product_hidden: boolean;
  product_delete_hidden: boolean;
}

const initialState: UtilsState = {
  categories_tab: "coffee" || "tea" || "treatsAndSweets",
  select_table_hidden: true,
  select_table: { id: 0, seats: 0 },
  order_details_hidden: true,
  admin_form_product_hidden: true,
  product_delete_hidden: true,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    switch_categories: (state, { payload }) => {
      state.categories_tab = payload;
    },
    set_select_table_hidden: (state, { payload }) => {
      state.select_table_hidden = payload;
    },
    switch_hidden_select_table: (state) => {
      state.select_table_hidden = !state.select_table_hidden;
    },
    switch_order_hidden: (state) => {
      state.order_details_hidden = !state.order_details_hidden;
    },
    switch_form_product_hidden: (state) => {
      state.admin_form_product_hidden = !state.admin_form_product_hidden;
    },
    switch_product_delete_hidden: (state) => {
      state.product_delete_hidden = !state.product_delete_hidden;
    },
    select_table: (state, { payload }) => {
      state.select_table = payload;
    },
  },
});

export const {
  switch_categories,
  set_select_table_hidden,
  switch_hidden_select_table,
  switch_order_hidden,
  switch_form_product_hidden,
  switch_product_delete_hidden,
  select_table,
} = utilsSlice.actions;

export default utilsSlice.reducer;
