import { ApiClient } from "@/api";
import { PICKUPLOCATIONENDPIONTS } from "./endpoints";
import { CreateLocationPayload } from "../@types";

const pickupLocationClient = {
  getAllPickupLocations: async (): Promise<any> =>
    ApiClient.get(PICKUPLOCATIONENDPIONTS.GET_ALL_PICKUP_LOCATIONS),
  addNewPickupLocatoin: async (data: CreateLocationPayload): Promise<any> =>
    ApiClient.post(PICKUPLOCATIONENDPIONTS.ADD_NEW_PICKUP_LOCATION, data),
  updatePickupLocation: async (
    id: string,
    data: CreateLocationPayload
  ): Promise<any> =>
    ApiClient.post(PICKUPLOCATIONENDPIONTS.UPDATE_PICKUP_LOCATION(id), data),
};

export default pickupLocationClient;
