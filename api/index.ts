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
    return Promise.reject(error.response.data);
  }
);

export class ApiClient {
  static async get<T>(url: string, params?: IParams, headers: any = {}) {
    try {
      const response = await client.get<T>(url, {
        params,
        headers: {
          ...client.defaults.headers,
          ...headers,
        },
      });

      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    try {
      const config = {
        ...options,
        headers: {
          ...client.defaults.headers,
          ...options?.headers,
        },
      };
      const response = await client.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async put<T>(url: string, data: unknown, options?: any) {
    try {
      const config = {
        ...options,
        headers: {
          ...client.defaults.headers,
          ...options?.headers,
        },
      };
      const response = await client.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async patch<T>(url: string, data: unknown, options?: any) {
    try {
      const config = {
        ...options,
        headers: {
          ...client.defaults.headers,
          ...options?.headers,
        },
      };
      const response = await client.patch<T>(url, data, config);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async delete<T>(url: string, options?: any) {
    try {
      const config = {
        ...options,
        headers: {
          ...client.defaults.headers,
          ...options?.headers,
        },
      };
      const response = await client.delete<T>(url, config);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  private static handleError(error: any): never {
    if (error.response) {
      throw {
        status: error.response.status,
        data: error.response.data,
        message: error.response.data?.message || "Server error occurred",
        originalError: error,
      };
    } else if (error.request) {
      throw {
        status: 0,
        message: "No response received from server",
        originalError: error,
      };
    } else {
      throw {
        ...error,
      };
    }
  }
}