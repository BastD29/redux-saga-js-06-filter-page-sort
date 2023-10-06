import { useDispatch, useSelector } from "react-redux";
import { sortActions, sortSelectors } from "../../store/sort";

export const useSorting = () => {
  const dispatch = useDispatch();

  const sortParams = useSelector(sortSelectors.getSortParams);

  const handleSortChange = (key, value) => {
    dispatch(sortActions.setSortParams({ [key]: value }));
  };

  return { sortParams, handleSortChange };
};
