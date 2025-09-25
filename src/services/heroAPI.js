import { commonAPI } from "./commonAPI";
import { BASE_URL } from "./baseURL";

export const fetchHeroAPI = async () => {
  return await commonAPI("GET", `${BASE_URL}/herosection/`);
};
