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

export const fetchCartAPI = async () => {
  return await commonAPI(
    "GET",
    `${BASE_URL}/basket-items/view-cart/`,
    "",
    await authHeaders()
  );
};

export const updateQuantityAPI = async (id, quantity) => {
  return await commonAPI(
    "PATCH",
    `${BASE_URL}/basket-items/${id}/update-quantity/`,
    { quantity },
    authHeaders()
  );
};

export const removeFromCartAPI = async (id) => {
  return await commonAPI(
    "DELETE",
    `${BASE_URL}/basket-items/${id}/remove-from-cart/`,
    "",
    authHeaders()
  );
};

export const addProductToCartAPI = async (productId, quantity) => {
  const token = sessionStorage.getItem("access_token");
  if (!token) {
    throw new Error("Please login to add product to cart");
  }

  const url = `${CART_URL}/cart/${productId}/add-to-cart/`;
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  return await commonAPI("POST", url, { quantity }, headers);
};
