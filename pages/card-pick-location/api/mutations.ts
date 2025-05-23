import { useQuery } from "@tanstack/react-query";
import pickupLocationClient from ".";
import { useMemo } from "react";
import { LocationResponse } from "../@types";

export function useGetAllPickupLocation() {
  const { data, isLoading, refetch, isError, error } =
    useQuery<LocationResponse>({
      queryKey: ["GET-ALL_PICKUP_LOCATION"],
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
