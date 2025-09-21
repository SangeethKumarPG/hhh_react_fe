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

export const fetchWishAPI = async () => {
  return await commonAPI(
    "GET",
    `${BASE_URL}/wishlist/`,
    "",
    await authHeaders()
  );
};

export const addProductToWishAPI = async (productId) => {
  const token = sessionStorage.getItem("access_token");
  if (!token) {
    throw new Error("Please login to add product to wishlistt");
  }

  const url = `${CART_URL}/wishlist/${productId}/add_to_wishlist/`;
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  return await commonAPI("POST", url, "", headers);
};

export const removeWishAPI = async (id) => {
  return await commonAPI(
    "DELETE",
    `${BASE_URL}/wishlist/${id}/remove_from_wishlist/`,
    "",
    await authHeaders()
  );
};
