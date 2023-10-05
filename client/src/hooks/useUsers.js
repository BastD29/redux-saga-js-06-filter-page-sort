import { useDispatch, useSelector } from "react-redux";
import { usersSagaActions, usersSelectors } from "../store/users";

export const useUsers = () => {
  const dispatch = useDispatch();

  const loading = useSelector(usersSelectors.isLoading);
  const users = useSelector(usersSelectors.getUsers);
  const error = useSelector(usersSelectors.getError);

  useEffect(() => {
    dispatch(usersSagaActions.sagaGetUsers());
  }, []);

  return { loading, users, error };
};
