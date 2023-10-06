import { useDispatch, useSelector } from "react-redux";
import { usersSagaActions, usersSelectors } from "../../store/users";
import { useEffect } from "react";
import { sortSelectors } from "../../store/sort";
import { filterSelectors } from "../../store/filter";
import { paginationSelectors } from "../../store/pagination";
import { useSearchParams } from "react-router-dom";

export const useUsers = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const loading = useSelector(usersSelectors.isLoading);
  const users = useSelector(usersSelectors.getUsers);
  const error = useSelector(usersSelectors.getError);

  // const currentPage = useSelector(paginationSelectors.getCurrentPage);
  // const pageSize = useSelector(paginationSelectors.getPageSize);
  // const filters = useSelector(filterSelectors.getFilters);
  // const sortParams = useSelector(sortSelectors.getSortParams);

  // useEffect(() => {
  //   dispatch(
  //     usersSagaActions.sagaGetUsers({
  //       currentPage,
  //       pageSize,
  //       filters,
  //       sortParams,
  //     })
  //   );
  // }, [currentPage, pageSize, filters, sortParams]);

  useEffect(() => {
    const currentPage = Number(searchParams.get("currentPage")) || 1;
    const pageSize = Number(searchParams.get("pageSize")) || 10;
    const filters = JSON.parse(searchParams.get("filters")) || {};
    const sortParams = JSON.parse(searchParams.get("sortParams")) || {};

    dispatch(
      usersSagaActions.sagaGetUsers({
        currentPage,
        pageSize,
        filters,
        sortParams,
      })
    );
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      currentPage: String(useSelector(paginationSelectors.getCurrentPage)),
      pageSize: String(useSelector(paginationSelectors.getPageSize)),
      filters: JSON.stringify(useSelector(filterSelectors.getFilters)),
      sortParams: JSON.stringify(useSelector(sortSelectors.getSortParams)),
    });
  }, [
    useSelector(paginationSelectors.getCurrentPage),
    useSelector(paginationSelectors.getPageSize),
    useSelector(filterSelectors.getFilters),
    useSelector(sortSelectors.getSortParams),
  ]);

  return { loading, users, error };
};
