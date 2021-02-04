/*
 * @Author: your name
 * @Date: 2020-12-23 15:58:06
 * @LastEditTime: 2020-12-23 21:06:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/store/data.d.ts
 */
export interface User {
  email: string;
  id: number;
  lab: {
    id: number;
    name: string;
    is_active: boolean;
  };
  is_active: boolean;
  can_manage_ana_tools: boolean;
  name: string;
  role: string;
}
