import React, { useState } from 'react';
import { Layout, ConfigProvider } from 'antd';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import CustomizeMenu from '../components/customizeMenu';
import routes from '../router';
import SupremeLayout from '../components/supremeLayout';
import Error404 from './error/404';
import Login from './auth/login';
import ResetPassword from './auth/resetPassword';
import logo from '../assets/img/logo.svg';
import CustomizeHeader from '../components/customizeHeader';
import zhCN from 'antd/lib/locale/zh_CN';

const { Header, Content, Footer, Sider } = Layout;

/**
 *
 * @param {object} route 路由配置对象
 */
function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
const Main = () => {
  const { pathname } = useLocation();
  // 错误界面和认证界面不显示侧边菜单栏
  const hidden: boolean = /^\/(auth|error)\/.*/.test(pathname);
  const [collapsed, setCollapsed] = useState(false);

  const handleSwitch = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Layout style={{ display: hidden ? 'none' : '' }}>
        <Sider
          theme="dark"
          collapsible
          collapsed={collapsed}
          trigger={null}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className={`sider-logo ${!collapsed && 'active'}`}>
            <img className="logo" src={logo} width="32" alt="logo" />
            <span>CRA-RACK-TS</span>
          </div>
          <CustomizeMenu />
        </Sider>
        <Layout
          style={{
            transition: 'all 0.2s',
            marginLeft: collapsed ? 80 : 200,
            minHeight: '100vh',
          }}
        >
          <Header className="page-header">
            <div className="sider-switch" onClick={handleSwitch}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <CustomizeHeader />
          </Header>
          <Content className="page-content">
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              {/* TODO: 部分路由需要脱离页面已有布局，并且不加载侧边栏等冗余内容 */}
              {/* 以下路由不包含侧边栏，独立于布局组件layout之外，可参考组件：SupremeLayout */}
              <Route exact path="/auth/login">
                <SupremeLayout>
                  <Login />
                </SupremeLayout>
              </Route>
              <Route exact path="/auth/reset-password">
                <SupremeLayout>
                  <ResetPassword />
                </SupremeLayout>
              </Route>
              <Route exact path="/error/404">
                <SupremeLayout>
                  <Error404 />
                </SupremeLayout>
              </Route>
              <Redirect from="*" to="/error/404" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            PoetiCloud ©2020 Created by PoetiCloud UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Main;
