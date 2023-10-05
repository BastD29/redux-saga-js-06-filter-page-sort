import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: undefined,
};

const slice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    reset: (state) => {
      state.sort = undefined;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

const getSort = (state) => state.sort.sort;
// console.log("getSort", getSort);

export const selectors = {
  getSort,
};

export const { actions, reducer } = slice;
