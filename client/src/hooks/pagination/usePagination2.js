import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { paginationSelectors } from "../../store/pagination";

export const usePagination = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  // const currentPage = parseInt(searchParams.get('currentPage')) || 1;
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const pageSize = parseInt(searchParams.get("size")) || 2;
  const totalItems = useSelector(paginationSelectors.getTotalItems);
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage) => {
    setSearchParams({ ...searchParams, currentPage: newPage });
  };

  return { currentPage, totalPages, handlePageChange };
};
