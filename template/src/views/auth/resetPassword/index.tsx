import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { MailOutlined, RollbackOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import utilStyle from '../assets/util.module.scss';
import logo from '../../../assets/img/logo.svg';
import { emailPattern } from '../../../config';
import { sendEmail } from '../../service';

const { Title } = Typography;

const ResetPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  // 发送验证码
  const onFinish = async () => {
    const res = await form.validateFields();
    setLoading(true);
    try {
      await sendEmail({ ...res });
      message.success('邮件发送成功！');
      setLoading(false);
    } catch (err) {
      message.error('邮件发送失败');
      setLoading(false);
    }
  };
  return (
    <div className={utilStyle.auth}>
      <div className={utilStyle.modalBox}>
        <Link to="login" className={utilStyle.back}>
          <RollbackOutlined />
        </Link>
        <div className={utilStyle.modalHeader}>
          <img className={utilStyle.logo} src={logo} width="160" alt="logo" />
          <Title className={utilStyle.title} level={2}>
            重设密码
          </Title>
          <div className={utilStyle.subTitle}>
            请输入你的邮箱以重新设置你的密码
          </div>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: '请输入你的邮箱！' },
              {
                pattern: emailPattern,
                message: '请输入正确的邮箱！',
              },
            ]}
          >
            <Input
              className={utilStyle.input}
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="邮箱"
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
              发送
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
