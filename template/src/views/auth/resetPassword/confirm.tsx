import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import utilStyle from '../assets/util.module.scss';
import logo from '../../../assets/img/logo.svg';
import { useHistory } from 'react-router-dom';
import qs from 'qs';
import { resetPassword, getToken } from '../../service';
import { RegisterInfo } from '../../data';
import { setToken } from '../../../utils/token';

const { Text } = Typography;

const ResetPasswordConfirm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const search = window.location.hash.match(/\?(.+)/);
  const queryParams = search && qs.parse(search[1]);
  if (!queryParams) message.error('网址有误，请检查重试！');

  const history = useHistory();
  const [form] = Form.useForm();
  // 登录成功跳转
  const onFinish = async (values: RegisterInfo) => {
    if (!queryParams) return;
    setLoading(true);
    try {
      await resetPassword({
        ...queryParams,
        ...values,
      });
      setLoading(false);
      message.success('密码重置成功！');
      try {
        const {
          data: { access_token, refresh_token },
        } = await getToken({
          email: queryParams.email?.toString() || '',
          password: values.password,
          is_admin: false,
        });
        setToken(access_token, refresh_token);
        history.push('/auth/reset-password/success');
      } catch (err) {
        history.push('/auth/login');
      }
    } catch (err) {
      setLoading(false);
      message.error('密码重置失败！');
    }
  };
  return (
    <div className={utilStyle.auth}>
      <div className={utilStyle.modalBox}>
        <div className={utilStyle.modalHeader}>
          <img className={utilStyle.logo} src={logo} width="160" alt="logo" />
          <div className={utilStyle.subTitle}>
            欢迎你<Text type="success">{queryParams?.email}</Text>
            <br />
            请重新设置你的登录密码
          </div>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入你的密码！' }]}
          >
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
              htmlType="submit"
              className={utilStyle.input}
              loading={loading}
              block
            >
              重设密码
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
