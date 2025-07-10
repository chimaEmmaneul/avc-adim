import { AxiosError } from "axios";
import { useMemo } from "react";
import {
  CountryResponse,
  LoginPayload,
  LoginResponse,
  Profile,
  ResetPasswordPayload,
  User,
  UserData,
  UserResponse,
  VerifyEmailResponse,
} from "../@types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import authClient from ".";
import {
  ForgotPasswordSchema,
  OtpSchema,
  ProfileFormData,
} from "@/schema/authSchema";
import { updatedPassword } from "@/modules/setting/@types";

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
export function useVerify2fa() {
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    VerifyEmailResponse,
    AxiosError,
    OtpSchema
  >({
    mutationFn: (data) => authClient.verify2fa(data),
    onSuccess: () => {},
  });

  return useMemo(
    () => ({
      verify2fa: mutateAsync,
      data,
      isOtpverifying2fa: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError]
  );
}
export function useVerifyChangePasswordOtp() {
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    VerifyEmailResponse,
    AxiosError,
    OtpSchema
  >({
    mutationFn: (data) => authClient.verifyOtpCode(data),
    onSuccess: () => {},
  });

  return useMemo(
    () => ({
      verifyChangePasswordOtp: mutateAsync,
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
  const queryClient = useQueryClient();
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
  const queryClient = useQueryClient();
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
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    any,
    AxiosError,
    { two_factor_enabled: boolean }
  >({
    mutationFn: ({ two_factor_enabled }: { two_factor_enabled: boolean }) =>
      authClient.enable2fa({ two_factor_enabled }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_USER_PROFILE"] });
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
export function useGetCode() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    any,
    AxiosError,
    void
  >({
    mutationFn: () => authClient.getCode(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_USER_PROFILE"] });
    },
  });

  return useMemo(
    () => ({
      getCode: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, isPending, error, isError]
  );
}

export function useUpdatePassword() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    any,
    AxiosError,
    updatedPassword
  >({
    mutationFn: (values: updatedPassword) => authClient.updataPassword(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_USER_PROFILE"] });
    },
  });

  return useMemo(
    () => ({
      updatePassword: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, isPending, error, isError]
  );
}
