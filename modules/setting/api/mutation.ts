import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import settingsRequestClient from ".";
import { useMemo } from "react";
import { AxiosError } from "axios";
import { CountriesResponse, CountryDetailsResponse } from "../@types";

export function useGetCountry(request: { search: string; page: number }) {
  const { data, isLoading, refetch, isError, error } =
    useQuery<CountriesResponse>({
      queryKey: ["GET_COUNTRY", request.page, request.search],
      queryFn: () => settingsRequestClient.getAllCountries(request),
    });
  return useMemo(
    () => ({
      countries: data,
      countriesRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}
export function useGetCountryDetails(id: string) {
  const { data, isLoading, refetch, isError, error } =
    useQuery<CountryDetailsResponse>({
      queryKey: ["GET_COUNTRY_DETAILS"],
      queryFn: () => settingsRequestClient.getCountryDetails(id),
    });
  return useMemo(
    () => ({
      countryDetails: data,
      countryDetailsRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}

export function useUpdatecountry() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation<
    any,
    AxiosError,
    { id: string; data: FormData }
  >({
    mutationFn: ({ id, data }) =>
      settingsRequestClient.updateCountry({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_COUNTRY"] });
    },
  });
  return useMemo(
    () => ({
      updateCountry: mutateAsync,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, isPending, error, isError]
  );
}
