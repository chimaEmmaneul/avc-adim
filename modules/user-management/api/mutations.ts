/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "@tanstack/react-query";
import userManagementClient from ".";
import { useMemo } from "react";
import { AxiosError } from "axios";
import { UsersResponse } from "../@types";

export function useGetAllUsers(request: { search: string; page: number }) {
  const { data, isLoading, refetch, isError, error } = useQuery<UsersResponse>({
    queryKey: ["GET_ALL_USERS", request.search, request.page],
    queryFn: () => userManagementClient.getAllUsers(request),
  });

  return useMemo(
    () => ({
      allUsers: data,
      allUsersRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}
export function useGetAllActiveUsers(request: {
  search: string;
  page: number;
}) {
  const { data, isLoading, refetch, isError, error } = useQuery<UsersResponse>({
    queryKey: ["GET_ALL_ACTIVE_USERS", request.page, request.search],
    queryFn: () => userManagementClient.getAllActiveUsers(request),
  });

  return useMemo(
    () => ({
      activeUsers: data,
      activeUserRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}
export function useGetAllBannedUsers(request: {
  search: string;
  page: number;
}) {
  const { data, isLoading, refetch, isError, error } = useQuery<UsersResponse>({
    queryKey: ["GET_ALL_BANNED_USERS", request.page, request.search],
    queryFn: () => userManagementClient.getAllBannedUsers(request),
  });

  return useMemo(
    () => ({
      bannedUsers: data,
      bannedUsersRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}
export function useGetAllPendingUser(request: {
  search: string;
  page: number;
}) {
  const { data, isLoading, refetch, isError, error } = useQuery<UsersResponse>({
    queryKey: ["GET_ALL_PENDING_USERS", request.page, request.search],
    queryFn: () => userManagementClient.getAllUnverifiedUsers(request),
  });

  return useMemo(
    () => ({
      pendingUsers: data,
      pendingRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}

export function useSendEmail() {
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    any,
    AxiosError,
    any
  >({
    mutationFn: (data) => userManagementClient.sendEmail(data),
    onSuccess: () => {},
  });

  return useMemo(
    () => ({
      sendEmail: mutateAsync,
      data,
      isSendingEmail: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
}
