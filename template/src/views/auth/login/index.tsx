import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import utilStyle from '../assets/util.module.scss';
import logo from '../../../assets/img/logo.svg';
import { emailPhonePattern, passwordPattern } from '../../../config';

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const onValuesChange = (changedValues: any, allValues: any) => {
    setTimeout(async () => {
      try {
        await form.validateFields();
        setDisabled(false);
      } catch (error) {
        setDisabled(true);
      }
    }, 0);
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
          onFinish={onFinish}
          onValuesChange={onValuesChange}
        >
          <Form.Item
            label="账号"
            name="username"
            rules={[
              { required: true },
              {
                pattern: emailPhonePattern,
                message: '请输入正确的手机或邮箱！',
              },
            ]}
          >
            <Input
              className={utilStyle.input}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="username"
            />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              { required: true },
              {
                pattern: passwordPattern,
                message: '密码至少含字母、数字两种类型的大于6位的字符串！',
              },
            ]}
          >
            <Input.Password
              className={utilStyle.input}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Link className={utilStyle.forgot} to="reset-password">
              忘记密码
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className={utilStyle.input}
              disabled={disabled}
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
