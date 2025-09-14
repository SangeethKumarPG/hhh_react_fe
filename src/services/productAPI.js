import { commonAPI } from "./commonAPI";
import { BASE_URL } from "./baseURL";


export const getProductDetailsAPI = (id) => {
  return commonAPI("GET", `${BASE_URL}/products/${id}/`);
};


export const getProductMediaAPI = (id) => {
  return commonAPI("GET", `${BASE_URL}/get-product-media/${id}`);
};
