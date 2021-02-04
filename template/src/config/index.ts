/*
 * @Author: your name
 * @Date: 2020-11-18 21:37:11
 * @LastEditTime: 2020-12-23 12:27:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /apis-webuser/src/config/index.js
 */
const MOCK: boolean = process.env.REACT_APP_MOCK === 'true';

export const BASEURL: string = MOCK ? '/' : 'https://examples.com';
export const Colors: string[] = [
  'green',
  'gold',
  'volcano',
  'orange',
  'red',
  'geekblue',
  'cyan',
  'blue',
];
export const emailPattern = /^\w+@\w+\.\w+(\.\w+)?$/;
export const passwordPattern = /^(?=.*[a-z])(?=.*\d)[^]{6,20}$/;
