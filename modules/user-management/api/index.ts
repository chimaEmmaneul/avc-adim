/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiClient } from "@/api";
import { USERMANAGEMENTENDPOINTS } from "./endpoints";

const userManagementClient = {
  getAllActiveUsers: async (request: {
    search: string;
    page: number;
  }): Promise<any> =>
    ApiClient.get(USERMANAGEMENTENDPOINTS.GET_ALL_ACIVE_USERS(request)),
  getAllUsers: async (request: {
    search: string;
    page: number;
  }): Promise<any> =>
    ApiClient.get(USERMANAGEMENTENDPOINTS.GET_ALL_USERS(request)),
  getAllBannedUsers: async (request: {
    search: string;
    page: number;
  }): Promise<any> =>
    ApiClient.get(USERMANAGEMENTENDPOINTS.GET_ALL_BANNED_USERS(request)),
  getAllUnverifiedUsers: async (request: {
    search: string;
    page: number;
  }): Promise<any> =>
    ApiClient.get(
      USERMANAGEMENTENDPOINTS.GET_ALL_EMAILUNVERIFIED_USERS(request)
    ),

  sendEmail: async (data: any): Promise<any> =>
    ApiClient.post(USERMANAGEMENTENDPOINTS.SEND_EMAIL, data),
};

export default userManagementClient;
