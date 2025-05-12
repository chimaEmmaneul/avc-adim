export interface UsersResponse {
  success: boolean;
  message: string;
  data: UsersData;
}

export interface UsersData {
  users_count: number;
  active: string;
  banned: string;
  users: User[];
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  country: string;
  state: string;
  address: string;
  zip_code: string;
  kyc_verification: number;
  two_factor_enabled: number;
  profile_photo: string;
  email_verification: string | null;
  last_login: string | null;
  created_at: string;
}
