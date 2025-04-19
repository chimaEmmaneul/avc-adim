import { ApiClient } from "@/api";
import {
  LoginPayload,
  ResetPasswordPayload,
  VerifyEmailPayload,
} from "../@types";
import { AUTHENDPOINTS } from "./endpoints";

const authClient = {
  login: async (data: LoginPayload): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.LOGIN, data),
  verifyEmail: async (data: VerifyEmailPayload): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.VERIFY_EMAIL, data),
  resetPassword: async (data: ResetPasswordPayload): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.RESET_PASSWORD, data),
  forgotPassword: async (data: { email: string }): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.FORGOT_PASSWORD, data),
  resendCode: async (data: { email: string }): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.RESEND_OTP, data),
  verifyCode: async (data: { verification_code: string }): Promise<any> =>
    ApiClient.post(AUTHENDPOINTS.VERIFY_CODE, data),
  getUser: async (): Promise<any> => ApiClient.get(AUTHENDPOINTS.PROFILE),
  // logout: async (data: any): Promise<any> =>
  //   ApiClient.post(AUTHENDPOINTS.LOGOUT, data),
};

export default authClient;
