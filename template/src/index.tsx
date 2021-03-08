import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import store from './store';
import './assets/styles/global.scss';
import Views from './views';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { setSettings } from './config';

axios((window as any).PAGE_ORIGIN + '/settings.json')
  .then(({ data }) => {
    setSettings(data);
    if (process.env.REACT_APP_MOCK === 'true') {
      import('./mock/db').then(() => {
        ReactDOM.render(
          <Provider store={store}>
            <Router>
              <Views />
            </Router>
          </Provider>,
          document.getElementById('root')
        );
      });
    } else {
      ReactDOM.render(
        <Provider store={store}>
          <Router>
            <Views />
          </Router>
        </Provider>,
        document.getElementById('root')
      );
    }
  })
  .catch((e: Error) => {
    console.log(e);
    alert('运行环境参数获取失败！');
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
