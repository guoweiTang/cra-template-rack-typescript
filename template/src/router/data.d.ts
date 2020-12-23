/*
 * @Author: your name
 * @Date: 2020-12-23 15:43:39
 * @LastEditTime: 2020-12-23 17:27:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/router/data.d.ts
 */
interface SimRoute {
  path: string;
  exact?: boolean;
  title: string;
  icons?: string;
  component: any;
}
export interface RouteItem extends SimRoute {
  routes?: SimRoute;
}
