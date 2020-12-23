/*
 * @Author: your name
 * @Date: 2020-12-07 11:54:50
 * @LastEditTime: 2020-12-23 14:30:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /apis-webuser/src/utils/index.js
 */
import { Names } from '../config';
export function getRandomName(): string {
  return Names[Math.floor(Math.random() * 6)];
}
