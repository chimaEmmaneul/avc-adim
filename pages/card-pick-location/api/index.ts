import { ApiClient } from "@/api";
import { PICKUPLOCATIONENDPIONTS } from "./endpoints";

const pickupLocationClient = {
  getAllPickupLocations: async (): Promise<any> =>
    ApiClient.get(PICKUPLOCATIONENDPIONTS.GET_ALL_PICKUP_LOCATIONS),
};

export default pickupLocationClient;
