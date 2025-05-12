export const CARDREQUESTENDPOINTS = {
  VIEW_REQUEST_DETAILS: (id: string) => `admin/card-request/details/${id}`,
  APPROVE_REQUEST: (id: string) => `admin/card-request/approve/${id}`,
  REJECT_REQUEST: (id: string) => `admin/card-request/reject/${id}`,
  GET_ALL_CARD_REQUEST: () => `admin/card-request`,
};
