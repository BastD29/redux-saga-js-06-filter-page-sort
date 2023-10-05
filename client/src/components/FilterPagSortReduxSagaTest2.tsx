import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSagaActions, usersSelectors } from "../store/users";
import Users from "./Users";
import { paginationActions, paginationSelectors } from "../store/pagination";
import Pagination from "./Pagination";

export default function FilterPagSortReduxSagaTest1() {
  const dispatch = useDispatch();

  // * USERS
  const users = useSelector(usersSelectors.getUsers);
  console.log("users", users);

  const loading = useSelector(usersSelectors.isLoading);
  console.log("loading", loading);

  const error = useSelector(usersSelectors.getError);
  console.log("error", error);

  // * PAGINATION

  const currentPage = useSelector(paginationSelectors.getCurrentPage);
  const pageSize = useSelector(paginationSelectors.getPageSize);
  const totalItems = useSelector(paginationSelectors.getTotalItems);

  const totalPages = Math.ceil(totalItems / pageSize);

  useEffect(() => {
    dispatch(usersSagaActions.sagaGetUsers());
  }, [currentPage, totalItems, pageSize]);

  const handlePageChange = (newPage) => {
    dispatch(paginationActions.setCurrentPage(newPage));
  };

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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
