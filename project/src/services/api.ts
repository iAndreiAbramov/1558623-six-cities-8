import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from './token';
import { HttpStatusCode } from '../const';

const BASE_URL = 'https://9.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

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
        requestConfig.headers['x-token'] = token;
      }

      return requestConfig;
    },
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const { response } = error;
      if (response?.status === HttpStatusCode.Unauthorised) {
        onUnauthorized();
      }

      return Promise.reject(error);
    });

  return api;
};

export const createFreeApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (requestConfig: AxiosRequestConfig) => {
      const token = getToken();
      if (token) {
        requestConfig.headers['x-token'] = token;
      }

      return requestConfig;
    },
  );

  return api;
};
