/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiClient } from "@/api";
import { TRANSACTIONENDPOINTS } from "./endpoint";

const transactionManagementClient = {
  getAllTransactions: async (search: string): Promise<any> =>
    ApiClient.get(TRANSACTIONENDPOINTS.GET_ALL_TRANSACTION(search)),
  getAllConfirmedTransactions: async (search: string): Promise<any> =>
    ApiClient.get(TRANSACTIONENDPOINTS.GET_ALL_CONFIRMED_TRANSACTION(search)),
  getAllPendingTransactions: async (search: string): Promise<any> =>
    ApiClient.get(TRANSACTIONENDPOINTS.GET_ALL_PENDING_TRANSACTION(search)),
  getAllDeclinedTrasactions: async (search: string): Promise<any> =>
    ApiClient.get(TRANSACTIONENDPOINTS.GET_ALL_DECLINED_TRANSACTION(search)),
};

export default transactionManagementClient;
