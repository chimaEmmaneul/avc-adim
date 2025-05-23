import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import blognManagementClient from ".";
import { AxiosError } from "axios";
import { CategoriesResponse } from "../@types";

export function useGetAllCategory() {
  const { data, isLoading, refetch, isError, error } =
    useQuery<CategoriesResponse>({
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

export function useAddNewBlog() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError, error } = useMutation<
    any,
    AxiosError,
    FormData
  >({
    mutationFn: (data: FormData) => blognManagementClient.addNewBlog(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_BLOGS"] });
    },
  });
  return useMemo(
    () => ({
      createNewBlog: mutateAsync,
      isPending,
      isError,
      error,
    }),
    [, isError, error, mutateAsync, isPending]
  );
}
export function useAddNewBlogCategory() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError, error } = useMutation<
    any,
    AxiosError,
    { name: string }
  >({
    mutationFn: (data: { name: string }) =>
      blognManagementClient.addNewBlogCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_CATEGORY"] });
    },
  });
  return useMemo(
    () => ({
      createBlogCategory: mutateAsync,
      isPending,
      isError,
      error,
    }),
    [, isError, error, mutateAsync, isPending]
  );
}
