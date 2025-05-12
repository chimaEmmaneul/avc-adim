import { ApiClient } from "@/api";
import { CARDREQUESTENDPOINTS } from "./endpoint";

const cardRequestClient = {
  getAllCardRequest: async (): Promise<any> =>
    ApiClient.get(CARDREQUESTENDPOINTS.GET_ALL_CARD_REQUEST()),
  viewRequestDetails: async (id: string): Promise<any> =>
    ApiClient.get(`admin/card-request/details/${id}`),
  approveRequest: async (id: string): Promise<any> =>
    ApiClient.get(`admin/card-request/approve/${id}`),
  rejectRequest: async (
    id: string,
    data: { reason: string; other_reason?: string }
  ): Promise<any> => ApiClient.post(`admin/card-request/reject/${id}`, data),
};

export default cardRequestClient;
