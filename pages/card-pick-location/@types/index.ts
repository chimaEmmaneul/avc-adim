export interface GetAllRequestsResponse {
  success: boolean;
  message: string;
  data: CardRequestData[];
}

export type CardRequestData = {
  id: string;
  user: {
    name: string;
    email: string;
    phone: string;
    country: string;
    account_number: string;
  };
  country: string;
  location: {
    id: number;
    name: string;
    state: string;
    address: string;
    country_id: number;
    service_days: string;
    service_hour: string;
  };
  card_type: string;
  card_fee: number;
  rejection_reason: string | null;
  other_reason: string | null;
  status: string;
  request_date: string;
  date_approved: string | null;
};

export type CreateLocationPayload = {
  country_id: string;
  state: string;
  name: string;
  address: string;
  service_days: string;
  service_hour: string;
};


export type LocationType = {
  id: number;
  country: string;
  state: string;
  name: string;
  address: string;
  service_days: string;
  service_hour: string;
  created_date: string;
};

export type Meta = {
  current_page: number;
  total: number;
  per_page: number;
  last_page: number;
};

export type LocationResponse = {
  success: boolean;
  message: string;
  data: LocationType[];
  meta: Meta;
};
