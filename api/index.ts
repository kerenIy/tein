import { AxiosRequestConfig, AxiosResponse } from "axios";
import apiBase from "@/lib/axios";

type ApiResponse<T> = Promise<T>;

export const apiRequest = async <T>(
  method: "get" | "post" | "patch" | "delete",
  endpoint: string,
  data?: unknown,
  params?: Record<string, unknown>
): ApiResponse<T> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: endpoint,
      data,
      params,
    };

    const response: AxiosResponse<T> = await apiBase(config);
    return response.data;
  } catch (error: any) {
    console.error("API Error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};
