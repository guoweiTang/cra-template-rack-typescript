/*
 * @Author: your name
 * @Date: 2020-12-16 19:43:13
 * @LastEditTime: 2020-12-21 17:49:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/views/index.test.js
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../store';
import App from './index';

/**
 * 冒烟测试
 */
it('renders page home', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn\sreact/i)).toBeInTheDocument();
});
