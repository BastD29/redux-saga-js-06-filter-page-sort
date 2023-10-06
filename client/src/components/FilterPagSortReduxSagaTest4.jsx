import React from "react";

// components
import Users from "./Users";
import Pagination from "./Pagination";
import Select from "./Select";
import Search from "./Search";
import Sort from "./Sort";

// hooks
import { useUsers } from "../hooks/users/useUsers1";
import { useFilters } from "../hooks/filters/useFilters1";
import { useSorting } from "../hooks/sorting/useSorting1";
import { usePagination } from "../hooks/pagination/usePagination1";

export default function FilterPagSortReduxSagaTest4() {
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
