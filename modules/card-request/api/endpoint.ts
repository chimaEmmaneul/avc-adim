export const CARDREQUESTENDPOINTS = {
  VIEW_REQUEST_DETAILS: (id: string) => `admin/card-request/details/${id}`,
  APPROVE_REQUEST: (id: string) => `admin/card-request/approve/${id}`,
  REJECT_REQUEST: (id: string) => `admin/card-request/reject/${id}`,
  GET_ALL_CARD_REQUEST: ({
    status,
    start_date,
    end_date,
    country,
  }: {
    status: string;
    start_date: string;
    end_date: string;
    country: string;
  }) =>
    `admin/card-request?status=${status}&start_date=${start_date}&end_date=${end_date}&${
      country ? `country=${country}` : ""
    }`,
};
