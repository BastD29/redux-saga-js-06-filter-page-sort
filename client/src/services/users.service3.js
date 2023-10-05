import { fetcher } from ".";
import { USERS } from "../constants/endpoints";

export const GetUsers = async (currentPage, pageSize, filters, sortParams) => {
  const filterQuery = Object.entries(filters)
    .filter(([key, value]) => value) // This will remove any entries with falsy values
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  const sortQuery = Object.entries(sortParams)
    .filter(([key, value]) => value) // Similarly, remove any entries with falsy values
    .map(([key, value]) => `sort_${key}=${encodeURIComponent(value)}`)
    .join("&");

  return await fetcher({
    method: "get",
    url: `${USERS}?page=${currentPage}&size=${pageSize}&${filterQuery}&${sortQuery}`,
  });
};
