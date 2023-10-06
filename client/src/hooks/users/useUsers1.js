import { useDispatch, useSelector } from "react-redux";
import { usersSagaActions, usersSelectors } from "../../store/users";
import { useEffect } from "react";
import { sortSelectors } from "../../store/sort";
import { filterSelectors } from "../../store/filter";
import { paginationSelectors } from "../../store/pagination";

export const useUsers = () => {
  const dispatch = useDispatch();

  const loading = useSelector(usersSelectors.isLoading);
  const users = useSelector(usersSelectors.getUsers);
  const error = useSelector(usersSelectors.getError);

  const currentPage = useSelector(paginationSelectors.getCurrentPage);
  const pageSize = useSelector(paginationSelectors.getPageSize);
  const filters = useSelector(filterSelectors.getFilters);
  const sortParams = useSelector(sortSelectors.getSortParams);

  useEffect(() => {
    dispatch(
      usersSagaActions.sagaGetUsers({
        currentPage,
        pageSize,
        filters,
        sortParams,
      })
    );
  }, [currentPage, pageSize, filters, sortParams]);

  return { loading, users, error };
};
