import { commonAPI, refreshAccessToken } from "./commonAPI";
import { BASE_URL, CART_URL } from "./baseURL";

export const authHeaders = async () => {
  let accessToken = sessionStorage.getItem("access_token");

  if (!accessToken) {
    console.log("No access token, calling refresh...");
    await refreshAccessToken();
    accessToken = sessionStorage.getItem("access_token");
    console.log(accessToken);
    if (!accessToken) {
      throw new Error("Unable to refresh access token");
    }
  }

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
};

export const fetchOrderAPI = async () => {
  return await commonAPI(
    "GET",
    `${BASE_URL}/my-orders/`,
    "",
    await authHeaders()
  );
};
