
import axios from "axios";
import { BASE_URL } from "./baseURL";

export const refreshAccessToken = async () => {
  const refreshToken = sessionStorage.getItem("refresh_token");
  console.log(refreshToken)
   if (!refreshToken)  console.log("no refreshtoken ")
  if (!refreshToken)   throw new Error("No refresh token found");

  const response = await axios.post(`${BASE_URL}/token/refresh/`, {
    "refresh": refreshToken,
  });

  const newAccessToken = response.data.access;
  sessionStorage.setItem("access_token", newAccessToken);
  return newAccessToken;
};

export const commonAPI = async (
  httpRequest,
  url,
  requestBody,
  requestHeader
) => {
  let token = sessionStorage.getItem("access_token");

  const requestConfig = {
    method: httpRequest,
    url: url,
    data: requestBody,
    headers: requestHeader
      ? requestHeader
      : {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
  };

  try {
    const result = await axios(requestConfig);
    return result;
  } catch (err) {
    
    if (err.response && err.response.status === 401) {
      try {
        const newToken = await refreshAccessToken();

       
        requestConfig.headers = {
          ...requestConfig.headers,
          Authorization: `Bearer ${newToken}`,
        };

        const retryResult = await axios(requestConfig);
        return retryResult;
      } catch (refreshError) {
        sessionStorage.clear(); 
        return Promise.reject(refreshError);
      }
    }
    return err;
  }
};
