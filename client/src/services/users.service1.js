import { fetcher } from ".";
import { USERS } from "../constants/endpoints";

export const GetUsers = async () => fetcher({ method: "get", url: USERS });
