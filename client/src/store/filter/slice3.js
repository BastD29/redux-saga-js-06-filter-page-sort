import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {},
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    resetFilters: (state) => {
      state.filters = {};
    },
  },
});

const getFilters = (state) => state.filter.filters;
// console.log("getFilters", getFilters);

// * to access individual filter
// const getFilter = (key) => (state) => state.filter.filters[key];
// console.log("getFilter", getFilter);

export const selectors = {
  getFilters,
};

export const { actions, reducer } = slice;
