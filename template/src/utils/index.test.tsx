/*
 * @Author: your name
 * @Date: 2020-12-21 15:45:22
 * @LastEditTime: 2020-12-21 16:03:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/utils/index.test.js
 */
import { getRandomName } from './index';
import { Names } from '../config';

describe('Test utils', () => {
  it('getRandomName', () => {
    expect(Names).toContain(getRandomName());
  });
});
