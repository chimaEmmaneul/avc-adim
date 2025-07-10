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

  updateCountry: ({ id, data }: { id: string; data: FormData }) =>
    ApiClient.post(SETTINGSENDPOINTS.UPDATE_COUNTRY(id), data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

export default settingsRequestClient;
