import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: undefined,
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    reset: (state) => {
      state.filters = undefined;
    },
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});

const getFilters = (state) => state.filter.filters;
// console.log("getFilters", getFilters);

export const selectors = {
  getFilters,
};

export const { actions, reducer } = slice;
