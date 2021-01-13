import React, { useState } from 'react';
import { Typography, Steps } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import utilStyle from '../assets/util.module.scss';
import logo from '../../../assets/img/logo.svg';
import PreSend from './preSend';
import Send from './send';
import Reset from './reset';
import Result from './result';

const { Title } = Typography;
const { Step } = Steps;

export default function ResetPassword() {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(3);

  return (
    <div className={utilStyle.auth}>
      <div className={utilStyle.modalBox}>
        {current === 3 ? (
          <Result count={count} setCount={setCount} />
        ) : (
          <>
            <Link to="login" className={utilStyle.back}>
              <RollbackOutlined />
            </Link>
            <div className={utilStyle.modalHeader}>
              <img
                className={utilStyle.logo}
                src={logo}
                width="160"
                alt="logo"
              />
              <Title className={utilStyle.title} level={2}>
                重设密码
              </Title>
              <Steps current={current} percent={60}>
                <Step />
                <Step />
                <Step />
              </Steps>
              <div className={utilStyle.subTitle}>
                请输入你的邮箱或手机号以重新设置你的密码
              </div>
            </div>
            {current === 0 ? (
              <PreSend setCurrent={setCurrent} />
            ) : current === 1 ? (
              <Send setCurrent={setCurrent} />
            ) : (
              <Reset
                count={count}
                setCount={setCount}
                setCurrent={setCurrent}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
