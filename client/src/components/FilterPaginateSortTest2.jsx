import { useNavigate, useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { useFilter } from "../hooks/useFilter.jsx";
import { usePagination } from "../hooks/usePagination.jsx";
import { useSort } from "../hooks/useSort.jsx";

import Sort from "./Sort.jsx";
import Pagination from "./Pagination.jsx";
import Search from "./Search.jsx";
import Select from "./Select.jsx";
import Users from "./Users.jsx";

export default function FilterPaginateSortTest2() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { city, age, name } = useFilter({ city: "all", age: "all", name: "" });
  const { page, size } = usePagination(1, 2);
  const { sortField, sortOrder } = useSort("name", "asc");

  const [filters, setFilters] = useState({ city, name, age });
  const [currentPage, setCurrentPage] = useState(page);
  const [currentSort, setCurrentSort] = useState({
    sortField: "name",
    sortOrder: "asc",
  });

  const [paginatedUsers, setPaginatedUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, [city, age, name, page, size, sortField, sortOrder]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `/api/?city=${filters.city}&age=${filters.age}&name=${filters.name}&page=${currentPage}&size=${size}&sortField=${currentSort.sortField}&sortOrder=${currentSort.sortOrder}`
      );
      console.log("response:", response);
      const data = await response.json();
      console.log("data:", data);
      setPaginatedUsers(data.users);
      setTotalPages(Math.ceil(data.total / size));
    } catch (error) {
      console.error("There was an error fetching the data!", error);
    }
  };

  const handleFilterChange = (key, value) => {
    setSearchParams({ ...searchParams, [key]: value }, { replace: true });
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ ...searchParams, page: newPage }, { replace: true });
  };

  const handleSortChange = (field, order) => {
    setSearchParams(
      { ...searchParams, sortField: field, sortOrder: order },
      { replace: true }
    );
  };

  return (
    <>
      <Sort
        sortField={sortField}
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
      />
      <Select
        filters={{ city, age, name }}
        onFilterChange={handleFilterChange}
      />
      <Search
        filters={{ city, age, name }}
        onFilterChange={handleFilterChange}
      />
      <Users paginatedUsers={paginatedUsers} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
