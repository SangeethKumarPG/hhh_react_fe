import { commonAPI } from "./commonAPI";
import { BASE_URL } from "./baseURL";


export const getCategoriesAPI = async () => {
  return await commonAPI("GET", `${BASE_URL}/categories/`);
};


export const getProductsAPI = async () => {
  return await commonAPI("GET", `${BASE_URL}/products/`);
};

export const getProductsByCategoryAPI = async (categoryId) => {
  return await commonAPI("GET", `${BASE_URL}/categories/${categoryId}/products/`);
};
