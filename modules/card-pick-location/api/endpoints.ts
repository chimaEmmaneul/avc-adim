export const PICKUPLOCATIONENDPIONTS = {
  ADD_NEW_PICKUP_LOCATION: `admin/pickup-location/add`,
  UPDATE_PICKUP_LOCATION: (id: string) => `admin/pickup-location/update/${id}`,
  REJECT_REQUEST: (id: string) => `admin/card-request/reject/${id}`,
  GET_ALL_PICKUP_LOCATIONS: `admin/pickup-location`,
};
