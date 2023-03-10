import { createSlice } from "@reduxjs/toolkit";

export interface UtilsState {
  categories_tab: string;
}

const initialState: UtilsState = {
  categories_tab: "coffee" || "tea" || "treatsAndSweets",
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    switch_categories: (state, { payload }) => {
      state.categories_tab = payload;
    },
  },
});

export const { switch_categories } = utilsSlice.actions;

export default utilsSlice.reducer;
