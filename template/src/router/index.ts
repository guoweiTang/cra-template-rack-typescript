/*
 * @Author: your name
 * @Date: 2020-12-14 18:03:16
 * @LastEditTime: 2020-12-23 19:10:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cra-template-rack/template/src/router/index.js
 */
import App from '../views/home';
import TableList from '../views/tableList';
import { RouteItem } from './data';
const routes: RouteItem[] = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    icons: 'HomeOutlined',
    component: App,
  },
  {
    path: '/tableList',
    title: 'Table List',
    icons: 'ProjectOutlined',
    component: TableList,
  },
];

export default routes;
