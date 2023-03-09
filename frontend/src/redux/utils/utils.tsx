import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

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
    swtich_categories: (state, { payload }) => {
      state.categories_tab = payload;
    },
  },
});

export const { swtich_categories } = utilsSlice.actions;

export default utilsSlice.reducer;
