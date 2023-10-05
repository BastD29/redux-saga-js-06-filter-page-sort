import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { paginationReducer } from "./pagination";
import { filterReducer } from "./filter";
import { sortReducer } from "./sort";

export default combineReducers({
  users: usersReducer,
  pagination: paginationReducer,
  filter: filterReducer,
  sort: sortReducer,
});
