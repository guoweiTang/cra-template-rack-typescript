import { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { BASEURL } from '../config';
import { message } from 'antd';

let tokenLock: boolean = false;
let expiredMethod: string = '';

/**
 * 发送请求前判断token是否存在，是否需要重新登录
 *
 * @param {Object} config axios配置信息
 * @returns {Object} axios配置信息
 */
export async function initToken(config: AxiosRequestConfig) {
  const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN_USER');
  if (ACCESS_TOKEN) {
    config.headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
  } else {
    refreshToken(0, config);
  }
}

/**
 * 刷新token，更新localstorage数据
 *
 * @param {Number} count 刷新token重试次数
 * @returns 返回一个Promise对象
 */
export async function refreshToken(
  count: number = 0,
  config?: AxiosRequestConfig
) {
  if (count === 0) {
    if (tokenLock) return false;
    tokenLock = true;
  }
  const REFRESH_TOKEN = localStorage.getItem('REFRESH_TOKEN_USER');
  if (!REFRESH_TOKEN) {
    clearToken();
    return false;
  }
  if (config) {
    expiredMethod = config.method || 'get';
  }
  return new Promise(function (resolve, reject) {
    axios(`${BASEURL}/auth/refresh-token`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${REFRESH_TOKEN}`,
      },
    })
      .then(({ data }) => {
        const { access_token: accessTokenStr } = data;
        accessTokenStr &&
          localStorage.setItem('ACCESS_TOKEN_USER', accessTokenStr);
        if (expiredMethod.toLowerCase() === 'get') {
          window.location.reload();
        } else {
          message.destroy();
          message.info('登录信息重新认证成功，请重新执行之前的操作！');
        }
        // console.log('token刷新成功');
        tokenLock = false;
        resolve(data);
      })
      .catch((err: any) => {
        // 刷新失败继续重试最多两次
        if (count < 2) {
          refreshToken(++count);
          return;
        }
        tokenLock = false;
        reject(err);
        clearToken();
      });
  });
}
/**
 * 登录设置token
 * @param accessToken
 * @param refreshToken
 */
export function setToken(accessToken: string, refreshToken: string) {
  localStorage.setItem('ACCESS_TOKEN_USER', accessToken);
  localStorage.setItem('REFRESH_TOKEN_USER', refreshToken);
}
/**
 * 清除token，并重新登陆
 */
export function clearToken() {
  localStorage.removeItem('ACCESS_TOKEN_USER');
  localStorage.removeItem('REFRESH_TOKEN_USER');
  // 重新登录
  window.location.href = '/#/auth/login';
}
