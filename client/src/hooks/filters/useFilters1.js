import { useDispatch, useSelector } from "react-redux";
import { filterActions, filterSelectors } from "../../store/filter";
import { paginationActions } from "../../store/pagination";

export const useFilters = () => {
  const dispatch = useDispatch();

  const filters = useSelector(filterSelectors.getFilters);

  const handleFilterChange = (key, value) => {
    dispatch(filterActions.setFilter({ key, value }));
    dispatch(paginationActions.setCurrentPage(1));
  };

  return { filters, handleFilterChange };
};
