import { ApiClient } from "@/api";
import SETTINGSENDPOINTS from "./endpoint";
import { headers } from "next/headers";

const settingsRequestClient = {
  getAllCountries: (data: { page: number; search: string }): Promise<any> =>
    ApiClient.get(
      SETTINGSENDPOINTS.GET_COUNTRIES({
        page: data.page,
        search: data.search ?? "",
      })
    ),
  getConversion: (data: { page: number; search?: string }): Promise<any> =>
    ApiClient.get(
      SETTINGSENDPOINTS.GET_POINT_CONVERSION({
        page: data.page,
        search: data.search ?? "",
      })
    ),

  getCountryDetails: (id: string): Promise<any> =>
    ApiClient.get(SETTINGSENDPOINTS.GET_COUNTRY_DETAILS(id)),

  updateCountry: ({ id, data }: { id: string; data: FormData }) =>
    ApiClient.post(SETTINGSENDPOINTS.UPDATE_COUNTRY(id), data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  getConversionDetails: (id: string): Promise<any> =>
    ApiClient.get(SETTINGSENDPOINTS.GET_CONVERSION_DETAILS(id)),

  updateConversionDetails: ({ id, data }: { id: string; data: FormData }) =>
    ApiClient.post(SETTINGSENDPOINTS.UPDATE_CONVERSION_DETAILS(id), data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

export default settingsRequestClient;
