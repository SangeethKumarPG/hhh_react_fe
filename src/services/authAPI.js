// src/api/authAPI.js
import { BASE_URL } from "./baseURL";
import { commonAPI } from "./commonAPI";


export const signupAPI = async (userDetails) => {
  return await commonAPI(
    "POST",
    `${BASE_URL}/register/`,
    userDetails,
    { "Content-Type": "application/json" }
  );
};

export const loginAPI = async (userDetails) => {
  return await commonAPI("POST", `${BASE_URL}/login/`, userDetails, "");
};
