import { Request } from "../@types/transaction";

export const TRANSACTIONENDPOINTS = {
  GET_ALL_TRANSACTION: (request: Request) =>
    `admin/transactions?search=${request.search}&page=${request.page}`,
  GET_ALL_CONFIRMED_TRANSACTION: (request: Request) =>
    `admin/transactions?status=successful&search=${request.search}&page=${request.page}`,
  GET_ALL_PENDING_TRANSACTION: (request: Request) =>
    `admin/transactions?status=pending&search=${request.search}&page=${request.page}`,
  GET_ALL_DECLINED_TRANSACTION: (request: Request) =>
    `admin/transactions?status=failed&search=${request.search}&page=${request.page}`,
  GETD_TRANSACTION_DETAILS: (transaction_id: string) =>
    `admin/transactions/details/${transaction_id}`,
};
