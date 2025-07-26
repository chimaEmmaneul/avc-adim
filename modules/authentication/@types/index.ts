/* eslint-disable @typescript-eslint/no-explicit-any */
export type LoginPayload = {
  email: string;
  password: string;
};

interface Message {
  id: number;
  token: string;
  expires_at: string | null;
}

// export type LoginResponse = {
//   success: boolean;
//   message: Message;
//   data: any[];
// };
export type VerifyEmailResponse = {
  token:string;
  expires_at:string;
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

export type Profile = {
  data: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    country_id: string;
    state: string;
    city: string;
    address: string;
    zip_code: string;
    profile_photo: File;
    date: string;
  };
};

export type UserData = {
  id: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone: string;
  status: string;
  country_id: string;
  country?: string;
  state: string;
  address: string;
  zip_code: string;
  kyc_verification: boolean;
  two_factor_enabled: boolean;
  profile_photo?: string;
  email_verification: boolean;
  last_login?: string | null;
  created_at?: string;
};
export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone: string;
  status: string;
  country_id: string;
  country?: string;
  state: string;
  address: string;
  zip_code: string;
  kyc_verification: boolean;
  two_factor_enabled: boolean;
  profile_photo?: string;
  email_verification: boolean;
  last_login?: string | null;
  created_at?: string;
};

export type UserResponse = {
  success: boolean;
  message: string;
  data: UserData;
};

export type Country = {
  id: number;
  code: string;
  name: string;
  currency_code: string;
  flag: string;
};

export type CountryResponse = {
  success: boolean;
  message: string;
  data: Country[];
};

export type LoginResponse = {
  success: true;
  message: {
    id: number;
    token: string;
    "2fa_required": true;
  };
  data: string;
  token: string;
};


export type StateResponse = {
  success: boolean;
  message: string;
  data: State[];
};

export type State = {
  id: number;
  name: string;
  country_id: number;
};

export type CurrencyResponse = {
  success: boolean;
  message: string;
  data: Currency[];
};

export type Currency = {
  code: string;
  name: string;
};