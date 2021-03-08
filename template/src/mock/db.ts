import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

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
  .reply(200)
  .onPost('/auth/obtain-token')
  .reply(200, {
    access_token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBwb2V0aWNsb3VkLmNvbSIsImV4cCI6MTYxMjQzNjczMCwidHlwIjoiYWNjZXNzIn0.GV8pCIRk6sOB0VZzhZjqzT_w1x5zHzah1RHzdA75WR8',
    refresh_token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBwb2V0aWNsb3VkLmNvbSIsImV4cCI6MTYxNzUxMDE0MCwidHlwIjoicmVmcmVzaCJ9.hic0ezaq6lwhk5f-LzEgI9PpKBUgMMBDhWvO8y3lDKI',
  })
  .onPost('/token/refresh')
  .reply(200, {
    access_token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZnVnbGo3ODk2MEBjaGFjdW8ubmV0IiwiZXhwIjoxNjEyNDMyMjQxLCJ0eXAiOiJhY2Nlc3MifQ.kRbL403yS_VOrizRTtQF5QrsXGbRGoxcYvlmNEBjsuU',
  })
  .onGet('/me')
  .reply(200, {
    created_at: '2021-02-01T11:03:26.408511+00:00',
    updated_at: '2021-02-02T03:57:13.713115+00:00',
    id: 47,
    email: '1214475704@qq.com',
    name: '唐助手',
    role: '学生',
    is_active: true,
    can_manage_ana_tools: true,
    lab: {
      created_at: '2021-02-01T10:51:13.041350+00:00',
      updated_at: '2021-02-01T10:52:03.360143+00:00',
      id: 59,
      name: '唐氏洗脚城',
      is_active: true,
      shared_projects: [],
    },
    created_projects: [],
  })
  .onPut('/me')
  .reply(200, {
    message: 'OK',
  })
  .onPost('/resend-email/find-password')
  .reply(200, {
    message: 'OK',
  })
  .onPost('/reset-password')
  .reply(200, {
    message: 'OK',
  })
  .onPost('/resend-email/register')
  .reply(200, {
    message: 'OK',
  });
