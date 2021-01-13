import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, ProjectOutlined } from '@ant-design/icons';
import routes from '../../router';

const CustomizeMenu = () => {
  const location = useLocation();
  const [activeName, setActiveName] = useState<string>(location.pathname);
  const handleChangeMenu = (key: string | number) => {
    setActiveName(key.toString());
  };

  return (
    <>
      <Menu
        theme="dark"
        onClick={({ key }) => handleChangeMenu(key)}
        selectedKeys={[activeName]}
        mode="inline"
      >
        {routes.map((item) => (
          <Menu.Item
            key={item.path}
            icon={
              item.icons === 'HomeOutlined' ? (
                <HomeOutlined />
              ) : (
                item.icons === 'ProjectOutlined' && <ProjectOutlined />
              )
            }
          >
            <Link to={item.path}>{item.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};
export default CustomizeMenu;
