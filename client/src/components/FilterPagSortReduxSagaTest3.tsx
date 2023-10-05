import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSagaActions, usersSelectors } from "../store/users";
import Users from "./Users";
import { paginationActions, paginationSelectors } from "../store/pagination";
import Pagination from "./Pagination";
import { filterActions, filterSelectors } from "../store/filter";
import Select from "./Select";
import Search from "./Search";

export default function FilterPagSortReduxSagaTest3() {
  const dispatch = useDispatch();

  // * USERS
  const users = useSelector(usersSelectors.getUsers);
  console.log("users", users);

  const loading = useSelector(usersSelectors.isLoading);
  console.log("loading", loading);

  const error = useSelector(usersSelectors.getError);
  console.log("error", error);

  // * FILTERS

  const filters = useSelector(filterSelectors.getFilters);

  const handleFilterChange = (key, value) => {
    dispatch(filterActions.setFilter({ key: key, value }));
    dispatch(paginationActions.setCurrentPage(1));
  };

  // * PAGINATION

  const currentPage = useSelector(paginationSelectors.getCurrentPage);
  const pageSize = useSelector(paginationSelectors.getPageSize);
  const totalItems = useSelector(paginationSelectors.getTotalItems);

  const totalPages = Math.ceil(totalItems / pageSize);

  // * USEEFFECT

  useEffect(() => {
    dispatch(usersSagaActions.sagaGetUsers());
  }, [currentPage, pageSize, filters]);

  const handlePageChange = (newPage) => {
    dispatch(paginationActions.setCurrentPage(newPage));
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!users) {
    return null;
  }

  return (
    <>
      <Search onFilterChange={handleFilterChange} filters={filters} />
      <Select onFilterChange={handleFilterChange} filters={filters} />
      <Users users={users} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
