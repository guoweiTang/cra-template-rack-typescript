import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

function Error404() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="页面未找到！"
      extra={
        <Link to="/">
          <Button type="primary">返回首页</Button>
        </Link>
      }
    />
  );
}

export default Error404;
