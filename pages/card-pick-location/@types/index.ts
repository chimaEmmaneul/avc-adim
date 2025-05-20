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
