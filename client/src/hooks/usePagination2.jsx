import { useDispatch, useSelector } from "react-redux";
import { paginationActions, paginationSelectors } from "../store/pagination";
import { usersSagaActions } from "../store/users";

export const usePagination = ({ url, entity, total }) => {
  const dispatch = useDispatch();
  const paginationInfo = useSelector(paginationSelectors.getPagination(entity));
  console.log("paginationInfo", paginationInfo);

  const onChangePage = (page, limit) => {
    dispatch(
      paginationActions.setPagination({
        key: entity,
        value: { ...paginationInfo, page, limit },
      })
    );
    dispatch(usersSagaActions.sagaGetUsers({ entity, url }));
  };

  const configuration = {
    total,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    defaultPageSize: paginationInfo?.limit,
    current: paginationInfo?.page,
    onChange: onChangePage,
  };

  return { configuration };
};
