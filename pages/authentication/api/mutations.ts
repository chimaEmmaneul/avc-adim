import { AxiosError } from "axios";
import { useMemo } from "react";
import { LoginPayload, LoginResponse, VerifyEmailResponse } from "../@types";
import { useMutation } from "@tanstack/react-query";
import authClient from ".";
import { ForgotPasswordSchema, OtpSchema } from "@/schema/authSchema";

export function useLogin() {
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    LoginResponse,
    AxiosError,
    LoginPayload
  >({
    mutationFn: (data) => authClient.login(data),
    onSuccess: () => {},
  });

  return useMemo(
    () => ({
      login: mutateAsync,
      data,
      isLoggingIn: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
}

export function useForgotPassword() {
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    VerifyEmailResponse,
    AxiosError,
    ForgotPasswordSchema
  >({
    mutationFn: (data) => authClient.verifyEmail(data),
    onSuccess: () => {},
  });

  return useMemo(
    () => ({
      forgotPassword: mutateAsync,
      data,
      isForgotPasswordLoading: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
}
export function useVerifyOtp() {
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    VerifyEmailResponse,
    AxiosError,
    OtpSchema
  >({
    mutationFn: (data) => authClient.verifyCode(data),
    onSuccess: () => {},
  });

  return useMemo(
    () => ({
      verifyOtp: mutateAsync,
      data,
      isOtpverifying: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
}
