/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiClient } from "@/api";
import {
  LoginPayload,
  ResetPasswordPayload,
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
  getAdminProfile: (): Promise<any> => ApiClient.get(AUTHENDPOINTS.PROFILE),
  updateProfile: (data: ProfileFormData): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.UPDATE_PROFILE, data),
  getUser: (id: string): Promise<any> =>
    ApiClient.get(AUTHENDPOINTS.GET_USER(id)),
};

export default authClient;
