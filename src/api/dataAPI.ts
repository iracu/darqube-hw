import axiosApi from "./axios";

import { urlStringify } from "../utils/string-utils";
import { QueryParams } from "../types/common";

export const newsApi = {
  getNews: async (queryParams: QueryParams) => {
    const url = urlStringify('/company-news', queryParams)
    const { data } = await axiosApi.get(url);

    return data;
  }
};
