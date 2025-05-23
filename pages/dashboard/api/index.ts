import { ApiClient } from "@/api";
import { DASHBOARDMANAGEMENTENDPOINTS } from "./endpoint";
import { ConfigResponse } from "../@types/dashbaord";

const dashbaordManagementClient = {
  getDashboardAnalytics: async (): Promise<any> =>
    ApiClient.get(DASHBOARDMANAGEMENTENDPOINTS.GET_DASHBOARD_ANALYTICS),
  getMarkupConfig: async (): Promise<ConfigResponse> =>
    ApiClient.get(DASHBOARDMANAGEMENTENDPOINTS.GET_MARKUP_CONFIG),
  updataMarkupConfig: async (data: FormData): Promise<ConfigResponse> =>
    ApiClient.post(DASHBOARDMANAGEMENTENDPOINTS.UPDATE_MARKUP_CONFIG, data),
};

export default dashbaordManagementClient;
