
import { commonAPI } from "./commonAPI";
import { BASE_URL, CART_URL } from "./baseURL";


const authHeaders = () => {
  const accessToken = sessionStorage.getItem("access_token");
  return {
    "Content-Type": "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
  };
};


export const fetchCartAPI = async () => {
  return await commonAPI(
    "GET",
    `${BASE_URL}/basket-items/view-cart/`,
    "",
    authHeaders()
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

export const addProductToCartAPI = async (productId, quantity = 1) => {
  const token = sessionStorage.getItem("access_token");
  if (!token) {
    throw new Error("Please login to add product to cart");
  }

  const url = `${CART_URL}/cart/${productId}/add-to-cart/`;
  const headers = {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  return await commonAPI("POST", url, "", headers);
};