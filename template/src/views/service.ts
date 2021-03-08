/*
 * @Author: your name
 * @Date: 2020-12-14 18:45:04
 * @LastEditTime: 2020-12-23 19:08:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cra-template-rack/template/src/views/service.js
 */
import request from '../utils/request';
import { LoginInfo, RegisterInfo } from './data';

/**
 * auth相关接口
 */
export function getToken(data: LoginInfo) {
  return request()('/auth/obtain-token', {
    method: 'POST',
    data: {
      ...data,
    },
  });
}
export function register(data: RegisterInfo) {
  return request()('/user/register', {
    method: 'POST',
    data: {
      ...data,
    },
  });
}
export function resetPassword(data: RegisterInfo) {
  return request()('/reset-password', {
    method: 'POST',
    data: {
      ...data,
    },
  });
}

/**
 * service相关接口
 */
export function getAllServices(params = {}) {
  return request()('/svc', {
    params,
  });
}

export function addService(params = {}) {
  return request()('/svc', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export function updateService(pathParams: { serviceId: string }, params = {}) {
  const { serviceId } = pathParams;
  return request()(`/svc/${serviceId}`, {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}

export function deleteService(pathParams: { serviceId: string }, params = {}) {
  const { serviceId } = pathParams;
  return request()(`/svc/${serviceId}`, {
    method: 'DELETE',
    data: {
      ...params,
    },
  });
}

export function getMyInfo(params = {}) {
  return request()(`/me`, {
    data: {
      ...params,
    },
  });
}

export function updateMyInfo(params = {}) {
  return request()(`/me`, {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}

export function sendEmail(data: { email: string }) {
  return request()('/resend-email/find-password', {
    method: 'POST',
    data: {
      ...data,
    },
  });
}
export function sendRegisterEmail(data: { email: string }) {
  return request()('/resend-email/register', {
    method: 'POST',
    data: {
      ...data,
    },
  });
}
