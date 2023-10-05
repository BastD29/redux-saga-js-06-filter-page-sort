import { useDispatch, useSelector } from "react-redux";
import { paginationActions, paginationSelectors } from "../store/pagination";

export const usePagination = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector(paginationSelectors.getCurrentPage);
  const pageSize = useSelector(paginationSelectors.getPageSize);
  const totalItems = useSelector(paginationSelectors.getTotalItems);

  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage) => {
    dispatch(paginationActions.setCurrentPage(newPage));
  };

  return { currentPage, totalPages, handlePageChange };
};
