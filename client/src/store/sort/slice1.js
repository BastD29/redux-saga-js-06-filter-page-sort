import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortParams: {
    sortKey: "name", // default sort key
    sortOrder: "asc",
  },
};

const slice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortParams: (state, action) => {
      const { sortKey, sortOrder } = action.payload;
      if (sortKey) state.sortParams.sortKey = sortKey;
      if (sortOrder) state.sortParams.sortOrder = sortOrder;
    },
    resetSortParams: (state) => {
      state.sortParams = { sortKey: "name", sortOrder: "asc" };
    },
  },
});

const getSortParams = (state) => state.sort.sortParams;
// console.log("getSortParams", getSortParams);

// * to access individual sort param
// const getSortParam = (sortKey) => (state) => state.sort.sortParams[sortKey];
// console.log("getSortParam", getSortParam);

export const selectors = {
  getSortParams,
};

export const { actions, reducer } = slice;
