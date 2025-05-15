import { AxiosError } from "axios";
import { useMemo } from "react";
import {
  CountryResponse,
  LoginPayload,
  LoginResponse,
  Profile,
  ResetPasswordPayload,
  User,
  UserResponse,
  VerifyEmailResponse,
} from "../@types";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
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
    queryFn: () => authClient.getAdminProfile(),
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

export function useGetUser(id: string) {
  const { data, isLoading, refetch, isError, error } = useQuery<
    UserResponse,
    { id: string }
  >({
    queryKey: ["GET_USER_PROFILE", id],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey as [string, string];
      return authClient.getUser(id);
    },
  });

  return useMemo(
    () => ({
      userProfile: data,
      refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}
export function useGetAllCountries() {
  const { data, isLoading, refetch, isError, error } =
    useQuery<CountryResponse>({
      queryKey: ["GET_ALL_COUNTRIES"],
      queryFn: () => authClient.getCountries(),
    });

  return useMemo(
    () => ({
      countries: data,
      refetch,
      isLoading,
      isError,
      error,
    }),
    [data, isLoading, isError, error, refetch]
  );
}

export function useUpadteAdminProfile() {
  const queryClient = new QueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    ProfileFormData,
    AxiosError,
    ProfileFormData
  >({
    mutationFn: (data) => authClient.updateProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ADMIN_PROFILE"] });
    },
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

export function useUpdateUsers() {
  const queryClient = new QueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    UserResponse,
    AxiosError,
    { id: string; values: User }
  >({
    mutationFn: ({ id, values }: { id: string; values: User }) =>
      authClient.updateUser(id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_USER_PROFILE"] });
    },
  });

  return useMemo(
    () => ({
      updateUser: mutateAsync,
      data,
      isUpdatingUser: isPending,
      error,
      isError,
    }),
    [mutateAsync, isPending, error, isError]
  );
}
export function useEnable2FA() {
  const queryClient = new QueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    UserResponse,
    AxiosError,
    { two_factor_enabled: boolean }
  >({
    mutationFn: ({ two_factor_enabled }: { two_factor_enabled: boolean }) =>
      authClient.enable2fa({ two_factor_enabled }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["GET_USER_PROFILE"] });
    },
  });

  return useMemo(
    () => ({
      enable2FA: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, isPending, error, isError]
  );
}
