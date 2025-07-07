/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiClient } from "@/api";
import { USERMANAGEMENTENDPOINTS } from "./endpoints";

const userManagementClient = {
  getAllActiveUsers: async (search: string): Promise<any> =>
    ApiClient.get(USERMANAGEMENTENDPOINTS.GET_ALL_ACIVE_USERS(search)),
  getAllUsers: async (search: string): Promise<any> =>
    ApiClient.get(USERMANAGEMENTENDPOINTS.GET_ALL_USERS(search)),
  getAllBannedUsers: async (search: string): Promise<any> =>
    ApiClient.get(USERMANAGEMENTENDPOINTS.GET_ALL_BANNED_USERS(search)),
  getAllUnverifiedUsers: async (search: string): Promise<any> =>
    ApiClient.get(
      USERMANAGEMENTENDPOINTS.GET_ALL_EMAILUNVERIFIED_USERS(search)
    ),

  sendEmail: async (data: any): Promise<any> =>
    ApiClient.post(USERMANAGEMENTENDPOINTS.SEND_EMAIL, data),
};

export default userManagementClient;
