/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiClient } from "@/api";
import { TRANSACTIONENDPOINTS } from "./endpoint";
import { Request } from "../@types/transaction";

const transactionManagementClient = {
  getAllTransactions: async (request: Request): Promise<any> =>
    ApiClient.get(TRANSACTIONENDPOINTS.GET_ALL_TRANSACTION(request)),
  getAllConfirmedTransactions: async (request: Request): Promise<any> =>
    ApiClient.get(TRANSACTIONENDPOINTS.GET_ALL_CONFIRMED_TRANSACTION(request)),
  getAllPendingTransactions: async (request: Request): Promise<any> =>
    ApiClient.get(TRANSACTIONENDPOINTS.GET_ALL_PENDING_TRANSACTION(request)),
  getAllDeclinedTrasactions: async (request: Request): Promise<any> =>
    ApiClient.get(TRANSACTIONENDPOINTS.GET_ALL_DECLINED_TRANSACTION(request)),
  getTransactionDetails: async (transaction_d: string): Promise<any> =>
    ApiClient.get(TRANSACTIONENDPOINTS.GETD_TRANSACTION_DETAILS(transaction_d)),
};

export default transactionManagementClient;
