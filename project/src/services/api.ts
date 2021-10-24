import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from './token';

const BASE_URL = 'https://8.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

enum HttpStatusCode {
  Unauthorised = 401,
}

type UnauthorizedCallback = () => void;

export const createApi = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (requestConfig: AxiosRequestConfig) => {
      const token = getToken();
      if (token) {
        requestConfig.headers['X-Token'] = token;
      }

      return requestConfig;
    },
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const { response } = error;
      if (response?.status === HttpStatusCode.Unauthorised) {
        return onUnauthorized();
      }

      return Promise.reject(error);
    })

  return api;
}
