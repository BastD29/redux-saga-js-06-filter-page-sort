import { call, fork, put, takeLatest } from "redux-saga/effects";
import { usersActions } from ".";
import { GetUsers } from "../../services/users.service1";

export const SAGA_FLOW_NAME = {
  GET_USERS: "GET_USERS",
};

function* getUsers(action) {
  console.log("action", action);

  try {
    yield put(usersActions.setLoading(true));

    const response = yield call(GetUsers);
    console.log("response", response);
    console.log("type of response", typeof response);

    const users = response.data.data;
    console.log("users", users);

    yield put(usersActions.setUsers(users));
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
