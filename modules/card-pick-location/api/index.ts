import { ApiClient } from "@/api";
import { PICKUPLOCATIONENDPIONTS } from "./endpoints";
import { CreateLocationPayload } from "../@types";

const pickupLocationClient = {
  getAllPickupLocations: async ({ page }: { page: number }): Promise<any> =>
    ApiClient.get(PICKUPLOCATIONENDPIONTS.GET_ALL_PICKUP_LOCATIONS({ page })),
  addNewPickupLocatoin: async (data: CreateLocationPayload): Promise<any> =>
    ApiClient.post(PICKUPLOCATIONENDPIONTS.ADD_NEW_PICKUP_LOCATION, data),
  updatePickupLocation: async (
    id: string,
    data: CreateLocationPayload
  ): Promise<any> =>
    ApiClient.post(PICKUPLOCATIONENDPIONTS.UPDATE_PICKUP_LOCATION(id), data),
};

export default pickupLocationClient;
