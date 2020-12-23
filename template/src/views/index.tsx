import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RouteItem } from '../router/data';
import CustomizeMenu from '../components/customizeMenu';
import routes from '../router';
import Error404 from './error/404';

const { Content, Footer, Sider } = Layout;

/**
 *
 * @param {object} route 路由配置对象
 */
function RouteWithSubRoutes(route: RouteItem) {
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
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Router>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(val) => setCollapsed(val)}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <CustomizeMenu />
        </Sider>
        <Layout
          style={{
            transition: 'all 0.2s',
            marginLeft: collapsed ? 80 : 200,
            minHeight: '100vh',
          }}
        >
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <Route component={Error404} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            PoetiCloud ©2020 Created by PoetiCloud UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default Main;
