/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import transactionManagementClient from ".";
import {
  TransactionDetailsResponse,
  TransactionResponse,
} from "../@types/transaction";

export function useGetAllTransactions({ search }: { search: string }) {
  const { data, isLoading, refetch, isError, error } =
    useQuery<TransactionResponse>({
      queryKey: ["GET_ALL_TRANSACIONS", search],
      queryFn: ({ queryKey }) => {
        const [, searchTerm] = queryKey as [string, string];
        return transactionManagementClient.getAllTransactions(searchTerm);
      },
    });

  return useMemo(
    () => ({
      allTransactions: data,
      allTransactionRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}
export function useGetAllConfirmedTransactions({ search }: { search: string }) {
  const { data, isLoading, refetch, isError, error } = useQuery<any>({
    queryKey: ["GET_ALL_CONFIRMED_TRANSACTIONS", search],
    queryFn: ({ queryKey }) => {
      const [, searchTerm] = queryKey as [string, string];
      return transactionManagementClient.getAllConfirmedTransactions(
        searchTerm
      );
    },
  });

  return useMemo(
    () => ({
      confirmedTransactions: data,
      confirmedTransactionsRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}
export function useGetAllPendingTransactions({ search }: { search: string }) {
  const { data, isLoading, refetch, isError, error } = useQuery<any>({
    queryKey: ["GET_ALL_PENDING_TRANSACTIONS", search],
    queryFn: ({ queryKey }) => {
      const [, searchTerm] = queryKey as [string, string];
      return transactionManagementClient.getAllPendingTransactions(searchTerm);
    },
  });

  return useMemo(
    () => ({
      pendingTransaction: data,
      pendingTransactionRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}

export function useGetAllDeclinedTransactions({ search }: { search: string }) {
  const { data, isLoading, refetch, isError, error } = useQuery<any>({
    queryKey: ["GET_ALL_DECLINED_TRANSACTIONS", search],
    queryFn: ({ queryKey }) => {
      const [, searchTerm] = queryKey as [string, string];
      return transactionManagementClient.getAllPendingTransactions(searchTerm);
    },
  });

  return useMemo(
    () => ({
      declinedTransaction: data,
      declinedTransactionRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}
export function useGetTransactionDetails({
  transaction_id,
}: {
  transaction_id: string | undefined;
}) {
  const { data, isLoading, refetch, isError, error } =
    useQuery<TransactionDetailsResponse>({
      queryKey: ["GET_TRANSACTION_DETAILS", transaction_id],
      queryFn: ({ queryKey }) => {
        const [, transaction_id] = queryKey as [string, string];
        return transactionManagementClient.getTransactionDetails(
          transaction_id
        );
      },
      enabled: !!transaction_id,
    });

  return useMemo(
    () => ({
      transactionDetails: data,
      transactionDetailsRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}
