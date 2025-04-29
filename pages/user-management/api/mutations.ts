/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "@tanstack/react-query";
import userManagementClient from ".";
import { useMemo } from "react";
import { AxiosError } from "axios";

export function useGetAllUsers({ search }: { search: string }) {
  const { data, isLoading, refetch, isError, error } = useQuery<any>({
    queryKey: ["GET_ALL_USERS", search],
    queryFn: ({ queryKey }) => {
      const [, searchTerm] = queryKey as [string, string];
      return userManagementClient.getAllUsers(searchTerm);
    },
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
export function useGetAllActiveUsers({ search }: { search: string }) {
  const { data, isLoading, refetch, isError, error } = useQuery<any>({
    queryKey: ["GET_ALL_ACTIVE_USERS", search],
    queryFn: ({ queryKey }) => {
      const [, searchTerm] = queryKey as [string, string];
      return userManagementClient.getAllActiveUsers(searchTerm);
    },
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
export function useGetAllBannedUsers({ search }: { search: string }) {
  const { data, isLoading, refetch, isError, error } = useQuery<any>({
    queryKey: ["GET_ALL_BANNED_USERS", search],
    queryFn: ({ queryKey }) => {
      const [, searchTerm] = queryKey as [string, string];
      return userManagementClient.getAllBannedUsers(searchTerm);
    },
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
export function useGetAllPendingUser({ search }: { search: string }) {
  const { data, isLoading, refetch, isError, error } = useQuery<any>({
    queryKey: ["GET_ALL_PENDING_USERS", search],
    queryFn: ({ queryKey }) => {
      const [, searchTerm] = queryKey as [string, string];
      return userManagementClient.getAllUnverifiedUsers(searchTerm);
    },
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
