import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

// stores
import { usersSagaActions, usersSelectors } from "../store/users";
import { paginationActions, paginationSelectors } from "../store/pagination";
import { filterActions, filterSelectors } from "../store/filter";
import { sortActions, sortSelectors } from "../store/sort";

// components
import Users from "./Users";
import Pagination from "./Pagination";
import Select from "./Select";
import Search from "./Search";
import Sort from "./Sort";

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
  console.log("filters", filters);

  const handleFilterChange = (key, value) => {
    dispatch(filterActions.setFilter({ key: key, value }));
    dispatch(paginationActions.setCurrentPage(1));
  };

  // * SORT

  const sortParams = useSelector(sortSelectors.getSortParams);
  console.log("sortParams", sortParams);

  // const handleSortChange = (sortKey, sortOrder) => {
  //   console.log("sortKey", sortKey);
  //   console.log("sortOrder", sortOrder);

  //   dispatch(
  //     sortActions.setSortParams({ sortKey: sortKey, sortOrder: sortOrder })
  //   );
  // };

  const handleSortChange = (key, value) => {
    dispatch(sortActions.setSortParams({ [key]: value }));
  };

  // * PAGINATION

  const currentPage = useSelector(paginationSelectors.getCurrentPage);
  const pageSize = useSelector(paginationSelectors.getPageSize);
  const totalItems = useSelector(paginationSelectors.getTotalItems);

  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage) => {
    dispatch(paginationActions.setCurrentPage(newPage));
  };

  // * USEEFFECT

  useEffect(() => {
    dispatch(usersSagaActions.sagaGetUsers());
  }, [currentPage, pageSize, filters, sortParams]);

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
      <Sort onSortChange={handleSortChange} sortParams={sortParams} />
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
