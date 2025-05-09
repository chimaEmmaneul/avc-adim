/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiClient } from "@/api";
import { BLOGMANAGEMENTENDPOINTS } from "./endpoint";

const blognManagementClient = {
  getAllCategory: async (): Promise<any> =>
    ApiClient.get(BLOGMANAGEMENTENDPOINTS.GET_ALL_CATEGORY),
  getAllBlogs: async (): Promise<any> =>
    ApiClient.get(BLOGMANAGEMENTENDPOINTS.GET_ALL_BLOGS),
};

export default blognManagementClient;
