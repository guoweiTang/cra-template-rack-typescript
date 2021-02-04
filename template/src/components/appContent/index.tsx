import React from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../../router';
import SupremeLayout from '../supremeLayout';
import Error404 from '../../views/error/404';
import Login from '../../views/auth/login';
import ResetPassword from '../../views/auth/resetPassword';
import ResetPasswordConfirm from '../../views/auth/resetPassword/confirm';
import ResetPasswordSuccess from '../../views/auth/resetPassword/success';
import WrapperContent from '../wrapperContent';
import Register from '../../views/auth/register';
const { Content } = Layout;

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
        <WrapperContent>
          <route.component {...props} routes={route.routes} />
        </WrapperContent>
      )}
    />
  );
}
const AppContent: React.FC = () => {
  return (
    <Content className="app-content">
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
        <Route exact path="/auth/register">
          <SupremeLayout>
            <Register />
          </SupremeLayout>
        </Route>
        <Route exact path="/auth/reset-password">
          <SupremeLayout>
            <ResetPassword />
          </SupremeLayout>
        </Route>
        <Route exact path="/auth/reset-password/confirm">
          <SupremeLayout>
            <ResetPasswordConfirm />
          </SupremeLayout>
        </Route>
        <Route exact path="/auth/reset-password/success">
          <SupremeLayout>
            <ResetPasswordSuccess />
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
  );
};
export default AppContent;
