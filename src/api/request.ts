import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const request = axios.create({
  baseURL: "/",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

request.interceptors.request.use((config: AxiosRequestConfig):
  | AxiosRequestConfig
  | Promise<AxiosRequestConfig> => {
  console.log("config", config);

  return config;
});

request.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("response", response);

    return response;
  },
  (error: AxiosError) => {
    console.log("error", error);
  }
);
