export const AUTHENDPOINTS = {
  LOGIN: "admin/connect/login",
  register: "/auth",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/admin/connect/reset-password",
  RESEND_OTP: "/admin/connect/resend-code",
  VERIFY_CODE: "/admin/connect/verify-code",
  VERIFY_EMAIL: "/admin/connect/verify-email",
  PROFILE: "/admin/profile",
  UPDATE_PROFILE: "/admin/update-profile",
  GET_COUNTRIES: "/countries",
  GET_USER: (id: string) => `/admin/users/details/${id}`,
  UPDATAE_USER: (id: string) => `/admin/users/update/${id}`,
};
