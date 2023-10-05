import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortParams: {},
};

const slice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortParams: (state, action) => {
      state.sortParams = { ...state.sortParams, ...action.payload };
    },
    resetSortParams: (state) => {
      state.sortParams = {};
    },
  },
});

const getSortParams = (state) => state.sort.sortParams;
// console.log("getSortParams", getSortParams);

export const selectors = {
  getSortParams,
};

export const { actions, reducer } = slice;
