export interface CardRequestResponse {
  success: boolean;
  message: string;
  data: RequestItem[];
}

export interface RequestItem {
  id: string;
  user: User;
  country: string;
  location: Location;
  card_type: string;
  card_fee: number;
  rejection_reason: string | null;
  other_reason: string | null;
  status: string
  request_date: string;
  date_approved: string | null;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  country: string;
  account_number: string;
}

export interface Location {
  id: number;
  name: string;
  state: string;
  address: string;
  country_id: number;
  service_days: string;
  service_hour: string;
}
