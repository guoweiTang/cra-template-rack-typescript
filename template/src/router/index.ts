import App from '../views/home';
import Project from '../views/project/index';
import UserInfo from '../views/userInfo';
import { RouteItem } from './data';
const routes: RouteItem[] = [
  {
    path: '/',
    exact: true,
    title: '首页',
    icons: 'HomeOutlined',
    component: App,
  },
  {
    path: '/project',
    exact: true,
    title: '项目',
    icons: 'ProjectOutlined',
    component: Project,
  },
  {
    path: '/userInfo',
    title: '我的账户',
    icons: 'ProjectOutlined',
    component: UserInfo,
    isOuterMenu: true,
  },
];

export default routes;
