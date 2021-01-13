/*
 * @Author: your name
 * @Date: 2020-11-18 21:37:11
 * @LastEditTime: 2020-12-23 12:27:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /apis-webuser/src/config/index.js
 */

export const BASEURL: string = 'http://192.168.11.13:10010';
export const Names: string[] = [
  'Jone',
  'Jobs',
  'Tom',
  'Jack',
  'Philips',
  'tang',
];
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
export const emailPhonePattern = /^((\w+@\w+\.\w+(\.\w+)?)|(1[3-9]\d{9}))$/;
export const passwordPattern = /^(?=.*[a-z])(?=.*\d)[^]{6,20}$/;
