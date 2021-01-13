import React, { useState } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import { Colors } from '../../config';
import { getRandom } from '../../utils';

// 随机选择用户头像颜色并保存到本地
let avatarColor: string;
let tempAvatarColor = sessionStorage.getItem('avatarColor');
if (!tempAvatarColor) {
  avatarColor = Colors[getRandom(0, Colors.length)];
  sessionStorage.setItem('avatarColor', avatarColor);
} else {
  avatarColor = tempAvatarColor;
}

const Header: React.FC = () => {
  const [isFull, setIsFull] = useState(false);

  const handleScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFull(!isFull);
  };
  const loginMenu = (
    <Menu>
      <Menu.Item icon={<PoweroffOutlined />}>
        <Link to="/auth/login">退出登录</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="toobar">
      <div className="full-screen" onClick={handleScreen}>
        {isFull ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
      </div>
      <div className="avatar">
        <Dropdown overlay={loginMenu} trigger={['click']}>
          <div>
            <span>1214475704@qq.com</span>
            <span>
              <Avatar
                style={{
                  backgroundColor: avatarColor,
                  verticalAlign: 'middle',
                }}
              >
                1
              </Avatar>
            </span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};
export default Header;
