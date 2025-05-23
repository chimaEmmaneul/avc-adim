/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiClient } from "@/api";
import {
  LoginPayload,
  ResetPasswordPayload,
  User,
  UserResponse,
  VerifyEmailPayload,
} from "../@types";
import { AUTHENDPOINTS } from "./endpoints";
import { ProfileFormData } from "@/schema/authSchema";

const authClient = {
  login: (data: LoginPayload): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.LOGIN, data),
  verifyEmail: (data: VerifyEmailPayload): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.VERIFY_EMAIL, data),
  resetPassword: (data: ResetPasswordPayload): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.RESET_PASSWORD, data),
  forgotPassword: (data: { email: string }): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.FORGOT_PASSWORD, data),
  resendCode: (data: { email: string }): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.RESEND_OTP, data),
  verifyCode: (data: { verification_code: string }): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.VERIFY_CODE, data),
  verifyOtpCode: (data: { verification_code: string }): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.VERIFY_OTP_CODE, data),
  getAdminProfile: (): Promise<any> => ApiClient.get(AUTHENDPOINTS.PROFILE),
  updateProfile: (data: ProfileFormData): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.UPDATE_PROFILE, data),
  getUser: (id: string): Promise<UserResponse> =>
    ApiClient.get(AUTHENDPOINTS.GET_USER(id)),
  updateUser: (id: string, data: User): Promise<UserResponse> =>
    ApiClient.post(AUTHENDPOINTS.UPDATAE_USER(id), data),
  getCountries: (): Promise<any> => ApiClient.get(AUTHENDPOINTS.GET_COUNTRIES),
  enable2fa: (data: { two_factor_enabled: boolean }): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.ENABLE_2_FA, data),
  getCode: (): Promise<any> => ApiClient.get(AUTHENDPOINTS.GET_CODE),
  updataPassword: (data: { password: string }): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.UPDATE_PASSWORD, data),
};

export default authClient;
