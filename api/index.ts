import { IParams } from "@/@types/client";
import axios from "axios";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-SHPAZY-AUTH": "4sa2e7shpazy1b3f9a",
  },
});

client.interceptors.request.use((config) => {
  const token = Cookies.get("token");

  const expiry = new Date("2025-04-19T18:11:32.000Z");
  console.log(expiry);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      redirect("/auth/login");
    }
    return Promise.reject(error.response.data);
  }
);

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
