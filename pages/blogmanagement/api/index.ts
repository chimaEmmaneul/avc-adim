/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiClient } from "@/api";
import { BLOGMANAGEMENTENDPOINTS } from "./endpoint";

const blognManagementClient = {
  getAllCategory: async (): Promise<any> =>
    ApiClient.get(BLOGMANAGEMENTENDPOINTS.GET_ALL_CATEGORY),
  getAllBlogs: async (): Promise<any> =>
    ApiClient.get(BLOGMANAGEMENTENDPOINTS.GET_ALL_BLOGS),
  addNewBlogCategory: async (data: { name: string }): Promise<any> =>
    ApiClient.post(BLOGMANAGEMENTENDPOINTS.ADD_NEW_BLOG_CATEGORY, data),
  addNewBlog: async (data: FormData): Promise<any> =>
    ApiClient.post(BLOGMANAGEMENTENDPOINTS.ADD_NEW_BLOG, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

export default blognManagementClient;
