import { fetcher } from ".";
import { USERS } from "../constants/endpoints";

export const GetUsers = async (currentPage, pageSize) =>
  fetcher({
    method: "get",
    url: `${USERS}?page=${currentPage}&size=${pageSize}`,
  });
