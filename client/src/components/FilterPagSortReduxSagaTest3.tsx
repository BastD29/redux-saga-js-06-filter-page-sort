import React, { useEffect } from "react";

// components
import Users from "./Users";
import Pagination from "./Pagination";
import Select from "./Select";
import Search from "./Search";
import Sort from "./Sort";

// hooks
import { useUsers } from "../hooks/useUsers";
import { useFilters } from "../hooks/useFilters";
import { useSorting } from "../hooks/useSorting";
import { usePagination } from "../hooks/usePagination";

export default function FilterPagSortReduxSagaTest3() {
  const { loading, users, error } = useUsers();
  const { filters, handleFilterChange } = useFilters();
  const { sortParams, handleSortChange } = useSorting();
  const { currentPage, totalPages, handlePageChange } = usePagination();

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!users) return null;

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
