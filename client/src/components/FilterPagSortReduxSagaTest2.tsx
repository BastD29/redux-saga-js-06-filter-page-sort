import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSagaActions, usersSelectors } from "../store/users";
import Users from "./Users";
import { paginationActions, paginationSelectors } from "../store/pagination";
import Pagination from "./Pagination";
import { filterActions, filterSelectors } from "../store/filter";
import Select from "./Select";
import Search from "./Search";

export default function FilterPagSortReduxSagaTest2() {
  const dispatch = useDispatch();

  // * USERS
  const users = useSelector(usersSelectors.getUsers);
  console.log("users", users);

  const loading = useSelector(usersSelectors.isLoading);
  console.log("loading", loading);

  const error = useSelector(usersSelectors.getError);
  console.log("error", error);

  // * FILTERS

  const nameFilter = useSelector(filterSelectors.getNameFilter);
  console.log("nameFilter", nameFilter);

  const ageFilter = useSelector(filterSelectors.getAgeFilter);
  console.log("ageFilter", ageFilter);

  const cityFilter = useSelector(filterSelectors.getCityFilter);
  console.log("cityFilter", cityFilter);

  const handleNameFilterChange = (newName) => {
    console.log("newName", newName);
    dispatch(filterActions.setNameFilter(newName));
    dispatch(paginationActions.setCurrentPage(1));
  };

  const handleAgeFilterChange = (newAge) => {
    console.log("newAge", newAge);
    dispatch(filterActions.setAgeFilter(newAge));
    dispatch(paginationActions.setCurrentPage(1));
  };

  const handleCityFilterChange = (newCity) => {
    console.log("newCity", newCity);
    dispatch(filterActions.setCityFilter(newCity));
    dispatch(paginationActions.setCurrentPage(1));
  };

  // * PAGINATION

  const currentPage = useSelector(paginationSelectors.getCurrentPage);
  const pageSize = useSelector(paginationSelectors.getPageSize);
  const totalItems = useSelector(paginationSelectors.getTotalItems);

  const totalPages = Math.ceil(totalItems / pageSize);

  useEffect(() => {
    dispatch(usersSagaActions.sagaGetUsers());
  }, [currentPage, totalItems, pageSize, nameFilter, ageFilter, cityFilter]);

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
      <Search
        onNameFilterChange={handleNameFilterChange}
        nameFilter={nameFilter}
      />
      <Select
        onCityFilterChange={handleCityFilterChange}
        onAgeFilterChange={handleAgeFilterChange}
        ageFilter={ageFilter}
        cityFilter={cityFilter}
      />
      <Users users={users} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
