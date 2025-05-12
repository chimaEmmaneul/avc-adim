"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import cardRequestClient from ".";
import { AxiosError } from "axios";
import { CardRequestResponse } from "../@types";

export function useGetAllCardRequest() {
  const { data, isLoading, refetch, isError, error } =
    useQuery<CardRequestResponse>({
      queryKey: ["GET_ALL_CARD_REQUEST"],
      queryFn: () => cardRequestClient.getAllCardRequest(),
    });

  return useMemo(
    () => ({
      allRequest: data,
      allRequestRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}
export function useGetRequestDetails({ id }: { id: string }) {
  const { data, isLoading, refetch, isError, error } = useQuery<any>({
    queryKey: ["GET_REQUEST_DETAILS", id],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey as [string, string];
      return cardRequestClient.viewRequestDetails(id);
    },
  });

  return useMemo(
    () => ({
      requestDetails: data,
      requestDetailsRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}

// export function useApproveRequest({ id }: { id: string }) {
//   const { data, isLoading, refetch, isError, error } = useQuery<any>({
//     queryKey: ["APPROVE_REQUEST", id],
//     queryFn: ({ queryKey }) => {
//       const [, id] = queryKey as [string, string];
//       return cardRequestClient.approveRequest(id);
//     },
//   });

//   return useMemo(
//     () => ({
//       approveRequest: data,
//       approveRequestRefetch: refetch,
//       isLoading,
//       isError,
//       error,
//     }),
//     [data, isLoading, isError, error, refetch]
//   );
// }

export const useApproveRequest = () => {
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    any,
    AxiosError,
    { id: string }
  >({
    mutationFn: ({ id }: { id: string }) =>
      cardRequestClient.approveRequest(id),
    onSuccess: () => {},
  });

  return useMemo(
    () => ({
      approveRequest: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
};

export const useRejectRequest = () => {
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    any,
    AxiosError,
    { id: string; data: { reason: string; other_reason?: string } }
  >({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: { reason: string; other_reason?: string };
    }) => cardRequestClient.rejectRequest(id, data),
    onSuccess: () => {},
  });

  return useMemo(
    () => ({
      rejectRequest: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
};
