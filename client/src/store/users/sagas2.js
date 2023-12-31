import { call, fork, put, select, takeLatest } from "redux-saga/effects";
import { usersActions } from ".";

import { paginationActions, paginationSelectors } from "../pagination";
import { GetUsers } from "../../services/users.service2";
import { filterSelectors } from "../filter";

export const SAGA_FLOW_NAME = {
  GET_USERS: "GET_USERS",
};

function* getUsers(action) {
  console.log("action", action);

  try {
    // * PAGINATION
    const currentPage = yield select(paginationSelectors.getCurrentPage);
    console.log("currentPage", currentPage);

    const pageSize = yield select(paginationSelectors.getPageSize);
    console.log("pageSize", pageSize);

    // * FILTERS

    const nameFilter = yield select(filterSelectors.getNameFilter);
    console.log("nameFilter", nameFilter);
    const ageFilter = yield select(filterSelectors.getAgeFilter);
    console.log("ageFilter", ageFilter);
    const cityFilter = yield select(filterSelectors.getCityFilter);
    console.log("cityFilter", cityFilter);

    yield put(usersActions.setLoading(true));

    const response = yield call(GetUsers, currentPage, pageSize, {
      name: nameFilter,
      age: ageFilter,
      city: cityFilter,
    });
    // const response = yield call(GetUsers, currentPage, pageSize);
    console.log("response", response);

    const { data, totalPages } = response.data;
    console.log("data", data);
    console.log("totalPages", totalPages);

    const users = data;
    console.log("users", users);

    yield put(usersActions.setUsers(users));

    const totalItems = totalPages * pageSize;
    console.log("totalItems", totalItems);

    yield put(paginationActions.setTotalItems(totalItems));
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
