import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSagaActions, usersSelectors } from "../store/users";
import Users from "./Users";

export default function FilterPagSortReduxSagaTest1() {
  const dispatch = useDispatch();

  const users = useSelector(usersSelectors.getUsers);
  console.log("users", users);

  const loading = useSelector(usersSelectors.isLoading);
  console.log("loading", loading);

  const error = useSelector(usersSelectors.getError);
  console.log("error", error);

  useEffect(() => {
    dispatch(usersSagaActions.sagaGetUsers());
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!users) {
    return null;
  }

  return (
    <>
      <Users users={users} />
    </>
  );
}
