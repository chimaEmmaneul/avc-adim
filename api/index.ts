import { IParams } from "@/@types/client";
import axios from "axios";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-SHPAZY-AUTH": "4sa2e7shpazy1b3f9a",
    // Authorization: `Bearer ${token}`,
  },
});

export class ApiClient {
  static async get<T>(url: string, params?: IParams, headers: any = {}) {
    const response = await client.get<T>(url, {
      params,
      headers: {
        ...client.defaults.headers,
        ...headers,
      },
    });

    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    const config = {
      ...options,
      headers: {
        ...client.defaults.headers,
        ...options?.headers,
      },
    };
    const response = await client.post<T>(url, data, config);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await client.put<T>(url, data);

    return response.data;
  }

  static async patch<T>(url: string, data: unknown) {
    const response = await client.patch<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await client.delete<T>(url);

    return response.data;
  }
}
