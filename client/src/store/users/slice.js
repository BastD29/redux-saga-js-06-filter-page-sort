import { createSlice } from "@reduxjs/toolkit";
import { SAGA_FLOW_NAME } from "./sagas1";

const initialState = {
  loading: undefined,
  users: undefined,
  error: undefined,
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// const isLoading = ({ users }) => users.loading;
// console.log("isLoading", isLoading);
// const getUsers = ({ users }) => users.users;
// console.log("getUsers", getUsers);
// const getError = ({ users }) => users.error;
// console.log("getError", getError);

const isLoading = (state) => state.users.loading;
// console.log("isLoading", isLoading);
const getUsers = (state) => state.users.users;
// console.log("getUsers", getUsers);
const getError = (state) => state.users.error;
// console.log("getError", getError);

export const selectors = {
  isLoading,
  getUsers,
  getError,
};

export const { actions, reducer } = slice;

export const sagaActions = {
  sagaGetUsers: (payload) => ({
    type: SAGA_FLOW_NAME.GET_USERS,
    payload,
  }),
};
