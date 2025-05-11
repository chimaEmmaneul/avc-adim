import { ApiClient } from "@/api";

const cardRequestClient = {
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
