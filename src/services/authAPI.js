// src/api/authAPI.js
import { BASE_URL } from "./baseURL";
import { commonAPI } from "./commonAPI";

// Signup API
export const signupAPI = async (userDetails) => {
  return await commonAPI(
    "POST",
    `${BASE_URL}/register/`,
    userDetails,
    { "Content-Type": "application/json" }
  );
};
