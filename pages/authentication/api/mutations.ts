import { AxiosError } from "axios";
import { useMemo } from "react";
import {
  LoginPayload,
  LoginResponse,
  Profile,
  ResetPasswordPayload,
  VerifyEmailResponse,
} from "../@types";
import { useMutation, useQuery } from "@tanstack/react-query";
import authClient from ".";
import {
  ForgotPasswordSchema,
  OtpSchema,
  ProfileFormData,
} from "@/schema/authSchema";

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
export function useResetPassword() {
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    VerifyEmailResponse,
    AxiosError,
    ResetPasswordPayload
  >({
    mutationFn: (data) => authClient.resetPassword(data),
    onSuccess: () => {},
  });

  return useMemo(
    () => ({
      resetPassword: mutateAsync,
      data,
      isResettingPassword: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
}

export function useGetAdmin() {
  // const accessToken = getSessionItem('accessToken');
  const { data, isLoading, refetch, isError, error } = useQuery<Profile>({
    queryKey: ["GET_ADMIN_PROFILE"],
    // enabled: !!accessToken,
    queryFn: () => authClient.getUser(),
  });

  return useMemo(
    () => ({
      admin: data,
      adminRefetch: refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}

export function useUpadteAdminProfile() {
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    ProfileFormData,
    AxiosError,
    ProfileFormData
  >({
    mutationFn: (data) => authClient.updateProfile(data),
    onSuccess: () => {},
  });

  return useMemo(
    () => ({
      updateProfile: mutateAsync,
      data,
      isUpdatingProfile: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
}
