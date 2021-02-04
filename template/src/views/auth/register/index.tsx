import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { LockOutlined } from '@ant-design/icons';
import utilStyle from '../assets/util.module.scss';
import logo from '../../../assets/img/logo.svg';
import { getToken, register } from '../../service';
import qs from 'qs';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const search = window.location.hash.match(/\?(.+)/);
  const queryParams = search && qs.parse(search[1]);
  if (!queryParams) message.error('网址有误，请检查重试！');

  const history = useHistory();
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    if (!queryParams) return;
    setLoading(true);
    try {
      await register({
        ...queryParams,
        ...values,
      });
      setLoading(false);
      try {
        const res: any = await getToken({
          email: queryParams.email,
          ...values,
          is_admin: false,
        });
        localStorage.setItem('ACCESS_TOKEN_USER', res.data?.access_token);
        localStorage.setItem('REFRESH_TOKEN_USER', res.data?.refresh_token);
        window.location.href = '/';
      } catch (err) {
        history.push('login');
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  return (
    <div className={utilStyle.auth}>
      <div className={utilStyle.modalBox}>
        <div className={utilStyle.modalHeader}>
          <img className={utilStyle.logo} src={logo} width="160" alt="logo" />
        </div>
        <Form
          form={form}
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item label="密码" name="password" rules={[{ required: true }]}>
            <Input.Password
              className={utilStyle.input}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className={utilStyle.input}
              htmlType="submit"
              loading={loading}
              block
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
