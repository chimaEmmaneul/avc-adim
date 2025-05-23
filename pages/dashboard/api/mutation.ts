import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ConfigResponse, DashboardResponse } from "../@types/dashbaord";
import dashbaordManagementClient from ".";
import { useMemo } from "react";
import { AxiosError } from "axios";

export function useGetDashboardAnalytics() {
  const { data, isLoading, refetch, isError, error } =
    useQuery<DashboardResponse>({
      queryKey: ["GET_DASHBOARD_ANALYTICS"],
      queryFn: () => dashbaordManagementClient.getDashboardAnalytics(),
    });

  return useMemo(
    () => ({
      dashboardData: data,
      // allUsersRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}

export function useGetMarkupConfig() {
  const { data, isLoading, refetch, isError, error } = useQuery<ConfigResponse>(
    {
      queryKey: ["GET_MARKUP_CONFIG"],
      queryFn: () => dashbaordManagementClient.getMarkupConfig(),
    }
  );

  return useMemo(
    () => ({
      markupConfig: data,
      // allUsersRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}

export function useUpdateMarkupConfigMutation() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    ConfigResponse,
    AxiosError,
    FormData
  >({
    mutationFn: (data) => dashbaordManagementClient.updataMarkupConfig(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_MARKUP_CONFIG"] });
    },
  });

  return useMemo(
    () => ({
      updateMarkupConfig: mutateAsync,
      data,
      isUpdatingMarkupConfig: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
}
