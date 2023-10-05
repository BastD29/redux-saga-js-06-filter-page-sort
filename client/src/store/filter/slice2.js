import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "all",
  city: "all",
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setNameFilter: (state, action) => {
      state.name = action.payload;
    },
    setAgeFilter: (state, action) => {
      state.age = action.payload;
    },
    setCityFilter: (state, action) => {
      state.city = action.payload;
    },
    resetFilters: (state) => {
      state.name = "";
      state.age = "all";
      state.city = "all";
    },
  },
});

const getNameFilter = (state) => state.filter.name;

const getAgeFilter = (state) => state.filter.age;
const getCityFilter = (state) => state.filter.city;

export const selectors = {
  getNameFilter,
  getAgeFilter,
  getCityFilter,
};

export const { actions, reducer } = slice;
