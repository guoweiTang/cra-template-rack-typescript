import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import utilStyle from '../assets/util.module.scss';
import logo from '../../../assets/img/logo.svg';
import { emailPattern } from '../../../config';
import { getToken } from '../../service';
// import qs from 'qs';
import { setToken } from '../../../utils/token';

// const search = window.location.hash.match(/\?(.+)/);
// const queryParams = search && qs.parse(search[1]);
export default function Login() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const {
        data: { access_token, refresh_token },
      } = await getToken({
        ...values,
        is_admin: false,
      });
      setLoading(false);
      setToken(access_token, refresh_token);
      window.location.href = '/';
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
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true },
              {
                pattern: emailPattern,
                message: '请输入正确的邮箱！',
              },
            ]}
          >
            <Input
              className={utilStyle.input}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="username"
            />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={[{ required: true }]}>
            <Input.Password
              className={utilStyle.input}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Row justify="end" style={{ marginBottom: 10 }}>
            <Col>
              <Link to="reset-password">忘记密码？</Link>
            </Col>
          </Row>
          <Form.Item>
            <Button
              type="primary"
              className={utilStyle.input}
              htmlType="submit"
              loading={loading}
              block
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
