import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ManageContentClient } from ".";
import { useMemo } from "react";
import { TestimonialResponse } from "../@types/testimoinals";
import { SiteDetailsResponse } from "../@types/contactus";

export function useAddNewTestimonial() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError, error } = useMutation<
    any,
    AxiosError,
    FormData
  >({
    mutationFn: (data: FormData) => ManageContentClient.addTestimonial(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_TESTIMONIALS"] });
    },
  });
  return useMemo(
    () => ({
      createTestimonial: mutateAsync,
      isPending,
      isError,
      error,
    }),
    [, isError, error, mutateAsync, isPending]
  );
}

export function useAddFooterLink() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError, error } = useMutation<
    any,
    AxiosError,
    FormData
  >({
    mutationFn: (data: FormData) => ManageContentClient.addFooterLink(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_FOOTER_LINKS"] });
    },
  });
  return useMemo(
    () => ({
      addFooterLink: mutateAsync,
      isPending,
      isError,
      error,
    }),
    [, isError, error, mutateAsync, isPending]
  );
}

export function useGetTestimonial() {
  const { data, isLoading, isError, error } = useQuery<
    FormData,
    AxiosError,
    TestimonialResponse
  >({
    queryKey: ["GET_ALL_TESTIMONIALS"],
    queryFn: () => ManageContentClient.getTestimonial(),
  });
  return useMemo(
    () => ({
      testimonials: data,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error]
  );
}

export function useDeleteTestimonial() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError, error } = useMutation<
    any,
    AxiosError,
    string
  >({
    mutationFn: (id: string) => ManageContentClient.deleteTestimonial(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_TESTIMONIALS"] });
    },
  });
  return useMemo(
    () => ({
      deleteTestimonial: mutateAsync,
      isPending,
      isError,
      error,
    }),
    [, isError, error, mutateAsync, isPending]
  );
}

export function useUpdateTestimonial() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError, error } = useMutation<
    any,
    AxiosError,
    { id: string; data: FormData }
  >({
    mutationFn: ({ id, data }: { id: string; data: FormData }) =>
      ManageContentClient.updateTestimonial(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_TESTIMONIALS"] });
    },
  });
  return useMemo(
    () => ({
      updateTestimonial: mutateAsync,
      isPending,
      isError,
      error,
    }),
    [, isError, error, mutateAsync, isPending]
  );
}

export function useUpdateContactUs() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    any,
    AxiosError,
    any
  >({
    mutationFn: (data) => ManageContentClient.updateContactUs(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_CONTACT_US"] });
    },
  });
  return useMemo(
    () => ({
      updateContactUs: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
}

export function useGetContactUsDetails() {
  const { data, isLoading, isError, error } = useQuery<
    any,
    AxiosError,
    SiteDetailsResponse
  >({
    queryKey: ["GET_CONTACT_US"],
    queryFn: () => ManageContentClient.getContactUsDetails(),
  });
  return useMemo(
    () => ({
      contactUs: data,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error]
  );
}
