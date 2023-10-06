import { useSearchParams } from "react-router-dom";
import { fetcher } from ".";
import { USERS } from "../constants/endpoints";

export const GetUsers =
  async (/* currentPage, pageSize, filters, sortParams */) => {
    const [searchParams] = useSearchParams();

    // const filterQuery = Object.entries(filters)
    //   .filter(([key, value]) => value)
    //   .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    //   .join("&");

    // const sortQuery = Object.entries(sortParams)
    //   .filter(([key, value]) => value)
    //   .map(([key, value]) => `sort_${key}=${encodeURIComponent(value)}`)
    //   .join("&");

    return fetcher({
      method: "get",
      // url: `${USERS}?page=${currentPage}&size=${pageSize}&${filterQuery}&${sortQuery}`,
      url: `${USERS}?${searchParams.toString()}`,
    });
  };
