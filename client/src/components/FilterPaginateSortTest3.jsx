import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// hooks
import { useFilter } from "../hooks/useFilter";
import { usePagination } from "../hooks/usePagination";
import { useSort } from "../hooks/useSort";

// components
import Sort from "./Sort";
import Pagination from "./Pagination";
import Search from "./Search";
import Select from "./Select";
import Users from "./Users";

export default function FilterPaginateSortTest3() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { city, age, name } = useFilter({ city: "all", age: "all", name: "" });
  const { page } = usePagination(1, 2);
  const { sortField, sortOrder } = useSort("name", "asc");

  const [paginatedUsers, setPaginatedUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, [searchParams]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`/api/?${searchParams.toString()}`);
      console.log("response:", response);
      const data = await response.json();
      setPaginatedUsers(data.data);
      setTotalPages(data.totalPages);
      console.log("data:", data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleFilterChange = (key, value) => {
    searchParams.set(key, value);
    searchParams.set("page", "1");
    navigate({ search: searchParams.toString() });
  };

  const handlePageChange = (newPage) => {
    searchParams.set("page", newPage.toString());
    navigate({ search: searchParams.toString() });
  };

  const handleSortChange = (field, order) => {
    searchParams.set("sortField", field);
    searchParams.set("sortOrder", order);
    navigate({ search: searchParams.toString() });
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
      <Search filters={{ name }} onFilterChange={handleFilterChange} />
      <Users paginatedUsers={paginatedUsers} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
