import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  configs: {},
};

const slice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    initPagination: (state, action) => {
      const { key, pageSize, totalItems } = action.payload;
      state.configs[key] = {
        currentPage: 1,
        pageSize,
        totalItems,
      };
    },
    setCurrentPage: (state, action) => {
      const { key, page } = action.payload;
      if (state.configs[key]) {
        state.configs[key].currentPage = page;
      }
    },
    setPageSize: (state, action) => {
      const { key, size } = action.payload;
      if (state.configs[key]) {
        state.configs[key].pageSize = size;
      }
    },
    setTotalItems: (state, action) => {
      const { key, total } = action.payload;
      if (state.configs[key]) {
        state.configs[key].totalItems = total;
      }
    },
  },
});

// prettier-ignore
const getCurrentPage = (key) => (state) => state.pagination.configs[key]?.currentPage;
// console.log("getCurrentPage", getCurrentPage);
const getPageSize = (key) => (state) => state.pagination.configs[key]?.pageSize;
// console.log("getPageSize", getPageSize);
// prettier-ignore
const getTotalItems = (key) => (state) => state.pagination.configs[key]?.totalItems;
// console.log("getTotalItems", getTotalItems);

export const selectors = {
  getCurrentPage,
  getPageSize,
  getTotalItems,
};

export const { actions, reducer } = slice;
