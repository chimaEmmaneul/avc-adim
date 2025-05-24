import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ManageContentClient } from ".";
import { useMemo } from "react";

export function useAddNewTestimonial() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError, error } = useMutation<
    any,
    AxiosError,
    FormData
  >({
    mutationFn: (data: FormData) => ManageContentClient.addTestimonial(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_CATEGORY"] });
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
