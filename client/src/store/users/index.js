import {
  actions as usersActions,
  selectors as usersSelectors,
  reducer as usersReducer,
  sagaActions as usersSagaActions,
} from "./slice";

import { usersFlows as _usersFlows, usersSagas as _usersSagas } from "./sagas2";

const usersSagas = [..._usersSagas];
const usersFlows = { ..._usersFlows };

export {
  usersFlows,
  usersSagas,
  //
  usersActions,
  usersSelectors,
  usersReducer,
  usersSagaActions,
};
