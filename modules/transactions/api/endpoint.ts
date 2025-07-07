export const TRANSACTIONENDPOINTS = {
  GET_ALL_TRANSACTION: (status: string) =>
    `admin/transactions?search=${status}`,
  GET_ALL_CONFIRMED_TRANSACTION: (status: string) =>
    `admin/transactions?status=successful&search=${status}`,
  GET_ALL_PENDING_TRANSACTION: (status: string) =>
    `admin/transactions?status=pending&search=${status}`,
  GET_ALL_DECLINED_TRANSACTION: (status: string) =>
    `admin/transactions?status=failed&search=${status}`,
  GETD_TRANSACTION_DETAILS: (transaction_id: string) =>
    `admin/transactions/details/${transaction_id}`,
};
