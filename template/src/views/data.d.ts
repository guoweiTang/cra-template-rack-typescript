import { AxiosPromise, AxiosInterceptorManager, AxiosResponse } from 'axios';
import { AxiosAuthRefreshRequestConfig } from 'axios-auth-refresh';

/**
 * 自定义axios interface request config type
 */
export interface CustomizeAxiosInstance {
  (config: AxiosAuthRefreshRequestConfig): AxiosPromise;
  (url: string, config?: AxiosAuthRefreshRequestConfig): AxiosPromise;
  defaults: AxiosAuthRefreshRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosAuthRefreshRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  getUri(config?: AxiosAuthRefreshRequestConfig): string;
  request<T = any, R = AxiosResponse<T>>(
    config: AxiosAuthRefreshRequestConfig
  ): Promise<R>;
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosAuthRefreshRequestConfig
  ): Promise<R>;
  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosAuthRefreshRequestConfig
  ): Promise<R>;
  head<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosAuthRefreshRequestConfig
  ): Promise<R>;
  options<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosAuthRefreshRequestConfig
  ): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosAuthRefreshRequestConfig
  ): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosAuthRefreshRequestConfig
  ): Promise<R>;
  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosAuthRefreshRequestConfig
  ): Promise<R>;
}
export interface SettingsItem {
  is_production: 'true' | 'false';
  api_origin: string;
  api_pathname: string;
}
export interface LoginInfo {
  email: string;
  password: string;
  is_admin: boolean;
}
export interface RegisterInfo {
  id: number;
  name: string;
  email: string;
  password: string;
  ts: number;
  sign: string;
}

export interface Pagination {
  current: number;
  pageSize: number;
  total: number;
}
