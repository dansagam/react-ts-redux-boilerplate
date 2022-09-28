import axios, { AxiosRequestConfig } from "axios";
import Auth from "./Auth";

export const baseURL = process.env.REACT_APP_API_BASE_URL || "";

const Api = axios.create({
  baseURL,
});

Api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (Auth.isAuthenticated()) {
      config.headers = {
        Authorization: `Bearer ${Auth.isAuthenticated()}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default Api;
