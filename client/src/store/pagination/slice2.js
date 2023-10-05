import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  pageSize: 2,
  totalItems: 0,
};

const slice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
  },
});

const getCurrentPage = (state) => state.pagination.currentPage;
// console.log("getCurrentPage", getCurrentPage);
const getPageSize = (state) => state.pagination.pageSize;
// console.log("getPageSize", getPageSize);
const getTotalItems = (state) => state.pagination.totalItems;
// console.log("getTotalItems", getTotalItems);

export const selectors = {
  getCurrentPage,
  getPageSize,
  getTotalItems,
};

export const { actions, reducer } = slice;
