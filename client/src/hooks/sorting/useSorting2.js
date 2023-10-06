import { useSearchParams } from "react-router-dom";

export const useSorting = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const sortParams = {};
  sortParams.key = searchParams.get("sortKey");
  sortParams.value = searchParams.get("sortValue");

  const handleSortChange = (key, value) => {
    setSearchParams({ ...searchParams, sortKey: key, sortValue: value });
  };

  return { sortParams, handleSortChange };
};
