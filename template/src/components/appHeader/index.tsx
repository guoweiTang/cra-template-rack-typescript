import React from 'react';
import { Layout, Avatar, Dropdown, Menu } from 'antd';
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import { Colors } from '../../config';
import { getRandom } from '../../utils';
import { clearToken } from '../../utils/token';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/userSlice';

const { Header } = Layout;

// 随机选择用户头像颜色并保存到本地
let avatarColor: string;
let tempAvatarColor = sessionStorage.getItem('avatarColor');
if (!tempAvatarColor) {
  avatarColor = Colors[getRandom(0, Colors.length)];
  sessionStorage.setItem('avatarColor', avatarColor);
} else {
  avatarColor = tempAvatarColor;
}

const AppHeader: React.FC = () => {
  const stateUser = useSelector(selectUser);
  const loginMenu = (
    <Menu className="menu-avator">
      <Menu.Item icon={<UserOutlined />}>
        <Link to="/userInfo">我的账户</Link>
      </Menu.Item>
      <Menu.Item key="logout" icon={<PoweroffOutlined />} onClick={clearToken}>
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="app-header">
      <div className="toobar">
        <div className="avatar">
          <Dropdown overlay={loginMenu}>
            <div>
              <span>{stateUser.name}</span>
              <span>
                <Avatar
                  style={{
                    backgroundColor: avatarColor,
                    verticalAlign: 'middle',
                  }}
                >
                  {stateUser.name.substr(0, 1).toUpperCase()}
                </Avatar>
              </span>
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};
export default AppHeader;
