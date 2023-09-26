import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categories: [],
  isLoading: false, // track whether we are fetching data from the server, for thunk
  error: null, // track any error that might occur, for thunk
};

const categorySlice = createSlice({
  name: "category",
  initialState: INITIAL_STATE,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
