import { fetcher } from ".";
import { USERS } from "../constants/endpoints";

export const GetUsers = async (currentPage, pageSize, filters) => {
  console.log("filters", filters);
  const filterParams = Object.entries(filters)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  console.log("filterParams", filterParams);

  return fetcher({
    method: "get",
    url: `${USERS}?page=${currentPage}&size=${pageSize}&${filterParams}`,
  });
};
