/*
 * @Author: your name
 * @Date: 2020-12-14 18:45:04
 * @LastEditTime: 2020-12-23 19:08:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cra-template-rack/template/src/views/service.js
 */
import request from '../utils/request';

/**
 * service相关接口
 */
export function getAllServices(params = {}) {
  return request('/svc', {
    params,
  });
}

export function addService(params = {}) {
  return request('/svc', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export function updateService(pathParams: { serviceId: string }, params = {}) {
  const { serviceId } = pathParams;
  return request(`/svc/${serviceId}`, {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}

export function deleteService(pathParams: { serviceId: string }, params = {}) {
  const { serviceId } = pathParams;
  return request(`/svc/${serviceId}`, {
    method: 'DELETE',
    data: {
      ...params,
    },
  });
}
