import { call, fork, put, select, takeLatest } from "redux-saga/effects";
import { usersActions } from ".";

import { paginationActions, paginationSelectors } from "../pagination";

import { filterSelectors } from "../filter";
import { sortSelectors } from "../sort";
import { GetUsers } from "../../services/users.service3";

export const SAGA_FLOW_NAME = {
  GET_USERS: "GET_USERS",
};

function* getUsers(action) {
  console.log("action", action);

  try {
    // * PAGINATION
    const currentPage = yield select(paginationSelectors.getCurrentPage("key"));
    console.log("currentPage", currentPage);

    const pageSize = yield select(paginationSelectors.getPageSize("key"));
    console.log("pageSize", pageSize);

    // * FILTERS

    const filters = yield select(filterSelectors.getFilters);
    console.log("filters", filters);

    // * SORT PARAMS

    const sortParams = yield select(sortSelectors.getSortParams);
    console.log("sortParams", sortParams);

    yield put(usersActions.setLoading(true));

    const response = yield call(
      GetUsers,
      currentPage,
      pageSize,
      filters,
      sortParams
    );
    console.log("response", response);

    const { data, totalPages } = response.data;
    console.log("data", data);
    console.log("totalPages", totalPages);

    const users = data;
    console.log("users", users);

    yield put(usersActions.setUsers(users));

    const totalItems = totalPages * pageSize;
    console.log("totalItems", totalItems);

    yield put(
      paginationActions.setTotalItems({ key: "users", total: totalItems })
    );
  } catch (error) {
    yield put(usersActions.setError(error));
  } finally {
    yield put(usersActions.setLoading(false));
  }
}

//=====================================
//  WATCHERS
//-------------------------------------

function* watchGetUsers() {
  yield takeLatest(SAGA_FLOW_NAME.GET_USERS, getUsers);
}

//=====================================
//  SAGAS
//-------------------------------------

export const usersSagas = [fork(watchGetUsers)];

//=====================================
//  FLOWS
//-------------------------------------

export const usersFlows = {
  usersSagas,
};
