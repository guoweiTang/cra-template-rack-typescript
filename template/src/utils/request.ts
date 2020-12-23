import axios from 'axios';
import qs from 'qs';
import { message as Message } from 'antd';

import { BASEURL } from '../config';
import { MessageType } from 'antd/lib/message';

const MOCK: boolean = process.env.REACT_APP_MOCK === 'true';
const http = axios.create({
  baseURL: MOCK ? '/' : BASEURL,
  timeout: 10 * 1000,
  withCredentials: false,
});
let hide: MessageType;

function getTipsText(method: string = ''): string {
  let tipsText: string = '';
  switch (method) {
    case 'post':
    case 'put':
    case 'patch':
      tipsText = '保存';
      break;
    case 'delete':
      tipsText = '删除';
      break;
    default:
  }
  return tipsText;
}

/**
 * 请求拦截
 */
http.interceptors.request.use(
  (config) => {
    // 非get请求错误处理
    let tipsText = getTipsText(config.method);
    if (tipsText) {
      hide = Message.loading(`正在${tipsText}`);
    }

    config.headers['Accept-Language'] = 'zh-CN';
    config.headers['content-type'] = 'application/json' || '';
    // 防止缓存，GET请求默认带_t参数
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        ...{ _t: new Date().getTime() },
      };
    }
    if (
      /^application\/x-www-form-urlencoded/.test(config.headers['content-type'])
    ) {
      config.data = qs.stringify(config.data);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 */
http.interceptors.response.use(
  (response) => {
    // 非get请求错误处理
    let tipsText: string = getTipsText(response.config.method);
    if (tipsText) {
      hide();
      if (response.status === 200) {
        Message.success(`${tipsText}成功`);
      } else {
        Message.success(`${tipsText}失败请重试！`);
      }
    }

    return response;
  },
  (error) => {
    const { response, request, message, config } = error;
    // 非get请求错误处理
    let tipsText = getTipsText(config.method);
    if (tipsText) {
      hide();
      Message.success(`${tipsText}失败请重试！`);
    }

    if (response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { status, headers } = response;
      // token过期重新登录
      if (status === 401) {
        console.error('登录信息过期');
      } else if (status >= 400 && status < 500) {
        console.error('请求错误');
      } else if (status >= 500) {
        console.error('服务器错误');
      }
      console.log(headers);
    } else if (request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error('请求错误');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error', message);
    }
    return Promise.reject(error);
  }
);

export default http;
