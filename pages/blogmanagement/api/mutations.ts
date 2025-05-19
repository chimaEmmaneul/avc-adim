import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import blognManagementClient from ".";

export function useGetAllCategory() {
  const { data, isLoading, refetch, isError, error } = useQuery<any>({
    queryKey: ["GET_ALL_CATEGORY"],
    queryFn: () => blognManagementClient.getAllCategory(),
  });

  return useMemo(
    () => ({
      allCategory: data,
      allCategoryRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}

export function useGetAllBlogs() {
  const { data, isLoading, refetch, isError, error } = useQuery<any>({
    queryKey: ["GET_ALL_BLOGS"],
    queryFn: () => blognManagementClient.getAllBlogs(),
  });

  return useMemo(
    () => ({
      allBlogs: data,
      allBlogsRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}
