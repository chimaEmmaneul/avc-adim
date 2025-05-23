import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import pickupLocationClient from ".";
import { useMemo } from "react";
import { CreateLocationPayload, LocationResponse } from "../@types";
import { AxiosError } from "axios";

export function useGetAllPickupLocation() {
  const { data, isLoading, refetch, isError, error } =
    useQuery<LocationResponse>({
      queryKey: ["GET_ALL_PICKUP_LOCATION"],
      queryFn: () => pickupLocationClient.getAllPickupLocations(),
    });

  return useMemo(
    () => ({
      pickupLocations: data,
      requestDetailsRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}

export function useAddNewPickupLocation() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    { message: string },
    AxiosError,
    CreateLocationPayload
  >({
    mutationFn: (data) => pickupLocationClient.addNewPickupLocatoin(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["GET_ALL_PICKUP_LOCATION"],
      });
    },
  });
  return useMemo(
    () => ({
      addNewPickupLocation: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
}
export function useUpdatePickupLocation() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    CreateLocationPayload,
    AxiosError,
    { data: CreateLocationPayload; id: string }
  >({
    mutationFn: ({ data, id }) =>
      pickupLocationClient.updatePickupLocation(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["GET_ALL_PICKUP_LOCATION"],
      });
    },
  });
  return useMemo(
    () => ({
      updatePickupLocation: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
}
