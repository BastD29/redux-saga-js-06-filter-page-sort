import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pagination: undefined,
};

const slice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    reset: (state) => {
      state.pagination = undefined;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

const getPagination = (state) => state.pagination.pagination;
console.log("getPagination", getPagination);

export const selectors = {
  getPagination,
};

export const { actions, reducer } = slice;
