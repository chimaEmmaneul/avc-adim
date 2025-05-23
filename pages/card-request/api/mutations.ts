"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import cardRequestClient from ".";
import { AxiosError } from "axios";
import { CardRequestResponse } from "../@types";

export function useGetAllCardRequest(values: {
  country: string;
  status: string;
  start_date: string;
  end_date: string;
}) {
  const { data, isLoading, refetch, isError, error } =
    useQuery<CardRequestResponse>({
      queryKey: ["GET_ALL_CARD_REQUEST", values],
      queryFn: () => cardRequestClient.getAllCardRequest(values),
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

export const useApproveRequest = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    { message: string },
    AxiosError,
    { id: string }
  >({
    mutationFn: ({ id }: { id: string }) =>
      cardRequestClient.approveRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_CARD_REQUEST"] });
    },
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
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    { message: string },
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_CARD_REQUEST"] });
    },
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
