import { useQuery } from "@tanstack/react-query";
import { DashboardResponse } from "../@types/dashbaord";
import dashbaordManagementClient from ".";
import { useMemo } from "react";

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
