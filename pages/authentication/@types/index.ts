export type LoginPayload = {
  email: string;
  password: string;
};

interface Message {
  id: number;
  token: string;
  expires_at: string | null;
}

export type LoginResponse = {
  success: boolean;
  message: Message;
  data: any[];
};
export type VerifyEmailResponse = {
  success: boolean;
  message: string;
  data: any[];
};
export type VerifyEmailPayload = {
  email: string;
};

export type ResetPasswordPayload = {
  email: string;
  password: string;
  password_confirmation: string;
};
