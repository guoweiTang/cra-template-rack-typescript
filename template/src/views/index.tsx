import React, { useEffect, useState } from 'react';
import { Layout, ConfigProvider } from 'antd';
import { useLocation } from 'react-router-dom';
import AppHeader from '../components/appHeader';
import AppSider from '../components/appSider';
import AppContent from '../components/appContent';
import zhCN from 'antd/lib/locale/zh_CN';

const { Footer } = Layout;

const minScreenWidth = 800;

const Main = () => {
  const { pathname } = useLocation();
  // 错误界面和认证界面不显示侧边菜单栏
  const hidden: boolean = /^\/(auth|error)\/.*/.test(pathname);
  const [collapsed, setCollapsed] = useState(
    window.innerWidth < minScreenWidth
  );

  // 屏幕过小则隐藏侧边栏
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setCollapsed(window.innerWidth < minScreenWidth);
      },
      false
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCollapsed]);

  return (
    <ConfigProvider locale={zhCN}>
      <Layout style={{ display: hidden ? 'none' : '' }}>
        <AppSider collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout
          style={{
            transition: 'all 0.2s',
            marginLeft: collapsed ? 48 : 200,
            minHeight: '100vh',
          }}
        >
          <AppHeader />
          <AppContent />
          <Footer style={{ textAlign: 'center' }}>
            PoetiCloud ©2020 Created by PoetiCloud UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Main;
