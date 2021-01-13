import React, { useEffect } from 'react';
import { Button } from 'antd';
import utilStyle from '../assets/util.module.scss';
import { CheckCircleOutlined } from '@ant-design/icons';
import logo from '../../../assets/img/logo.svg';
import { Link, useHistory } from 'react-router-dom';

interface Props {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Result: React.FC<Props> = ({ count, setCount }) => {
  const history = useHistory();
  // 页面跳转倒计时
  useEffect(() => {
    if (count < 0) {
      history.push('/');
      return;
    } else if (count === 3) {
      return;
    }
    setTimeout(() => {
      const tempCount = count - 1;
      setCount(tempCount);
    }, 1000);
  }, [count, history, setCount]);
  return (
    <>
      <div className={utilStyle.modalHeader}>
        <img className={utilStyle.logo} src={logo} width="160" alt="logo" />
      </div>
      <div className={utilStyle.success}>
        <CheckCircleOutlined />
      </div>
      <div className={utilStyle.tips}>
        您的密码已重设成功！{count}s后自动跳转
      </div>
      <Link to="/">
        <Button
          type="primary"
          htmlType="submit"
          className={utilStyle.input}
          block
        >
          立即进入
        </Button>
      </Link>
    </>
  );
};

export default Result;
