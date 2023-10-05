// import fetch from "unfetch";

import { Log } from "./analytics.service";
import { BASE_URL } from "../constants/endpoints";

export const getHeaders = async () => {
  let baseHeaders = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  };

  return baseHeaders;
};

export async function fetcher(params) {
  const headers = await getHeaders();
  const _headers = { ...headers, ...params?.headers };

  Log(`[🚀] fetcher - url: ${params.baseUrl || BASE_URL}${params.url}`);
  Log(
    `[🚀] fetcher - params: ${JSON.stringify({
      method: params.method || "get",
      body: params?.body,
      headers: _headers,
    })}`
  );

  const response = await fetch(`${params.baseUrl || BASE_URL}${params.url}`, {
    method: params.method || "get",
    body:
      params?.body &&
      Object.entries(params.body)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&"),
    headers: _headers,
  });

  if (response.ok) {
    console.log("response OK!");
    if (response.status !== 204) {
      const jsonResponse = await response.json();
      return { data: jsonResponse };
    }
    return { data: { status: response.status } };
  }
  if (!response.ok) {
    const jsonResponse = await response.json();
    throw jsonResponse;
  }

  return { data: undefined };
}
