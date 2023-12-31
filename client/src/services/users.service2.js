import { fetcher } from ".";
import { USERS } from "../constants/endpoints";

export const GetUsers = async (currentPage, pageSize, filters, sortParams) => {
  console.log("filters", filters);
  console.log("sortParams", sortParams);

  const filterQuery = Object.entries(filters)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  console.log("filterQuery", filterQuery);

  const sortQuery = Object.entries(sortParams)
    .map(([key, value]) => `sort_${key}=${encodeURIComponent(value)}`)
    .join("&");

  console.log("sortQuery", sortQuery);

  return fetcher({
    method: "get",
    url: `${USERS}?page=${currentPage}&size=${pageSize}&${filterQuery}&${sortQuery}`,
  });
};
