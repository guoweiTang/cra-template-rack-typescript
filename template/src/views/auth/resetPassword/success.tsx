import React from 'react';
import { Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import utilStyle from '../assets/util.module.scss';

export default function resetPassword() {
  return (
    <div className={utilStyle.auth}>
      <div className={utilStyle.modalBox}>
        <div className={utilStyle.success}>
          <CheckCircleOutlined />
        </div>
        <div className={utilStyle.tips}>你的密码已重设成功！</div>
        <Link to="/">
          <Button
            type="primary"
            htmlType="submit"
            className={utilStyle.input}
            block
          >
            进入实验室
          </Button>
        </Link>
      </div>
    </div>
  );
}
