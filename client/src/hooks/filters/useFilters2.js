import { useSearchParams } from "react-router-dom";

export const useFilters = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (key, value) => {
    setSearchParams({ ...searchParams, [key]: value });
  };

  // Getting filters from URL
  const filters = {};
  for (const key of searchParams.keys()) {
    filters[key] = searchParams.get(key);
  }

  return { filters, handleFilterChange };
};
