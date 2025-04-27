import { ApiClient } from "@/api";
import { DASHBOARDMANAGEMENTENDPOINTS } from "./endpoint";

const dashbaordManagementClient = {
  getDashboardAnalytics: async (): Promise<any> =>
    ApiClient.get(DASHBOARDMANAGEMENTENDPOINTS.GET_DASHBOARD_ANALYTICS),
};

export default dashbaordManagementClient;
