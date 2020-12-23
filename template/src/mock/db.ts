/*
 * @Author: your name
 * @Date: 2020-12-15 17:36:19
 * @LastEditTime: 2020-12-16 15:58:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/mock/db.js
 */
import request from '../utils/request';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
var mock = new MockAdapter(request);

// Mock GET request to /users when param `searchText` is 'John'
// arguments for reply are (status, data, headers)
mock
  .onGet('/svc')
  .reply(200, {
    count: 561,
    results: [
      { id: 'aPE6DlkD', title: 'wlytest1', version: '0.0.1' },
      {
        id: 'b9RpYEPa',
        title: 'Apis Editor Backend API Document',
        version: '0.1.0',
      },
      { id: 'OZE8QKMA', title: '用友累死了', version: '0.0.1' },
      { id: 'ZzEGBR8J', title: '自定义服务3', version: '0.0.1' },
      { id: 'ZdEb3Kj8', title: '用友累死了', version: '0.0.1' },
      { id: 'a0RL3l8p', title: '自定义服务4', version: '0.0.1' },
      { id: 'YqlaNRV3', title: '自定义服务2', version: '0.0.1' },
      { id: 'ZxRyGKAD', title: '自定义服务5', version: '0.0.1' },
      { id: 'VWlkpR1a', title: '自定义服务6', version: '0.0.1' },
      { id: '3bEmOlZk', title: 'Swagger Petstore', version: '1.0.0' },
      { id: 'D2l4GK3y', title: '鹏飞服务', version: '0.0.2' },
    ],
  })
  .onPost('/svc')
  .reply(200)
  .onPut(/\/svc\/[^/\\\s]+/)
  .reply(200)
  .onDelete(/\/svc\/[^/\\\s]+/)
  .reply(200);
