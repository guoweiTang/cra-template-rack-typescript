import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import utilStyle from '../assets/util.module.scss';
import { UserOutlined } from '@ant-design/icons';
import { emailPhonePattern } from '../../../config';

interface Props {
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const Result: React.FC<Props> = ({ setCurrent }) => {
  const [disabled, setDisabled] = useState(true);
  const [form] = Form.useForm();
  const onValuesChange = () => {
    setTimeout(async () => {
      try {
        await form.validateFields();
        setDisabled(false);
      } catch (error) {
        console.log('错误');
        setDisabled(true);
      }
    }, 0);
  };
  // 发送验证码
  const onFinish = () => {
    setCurrent(1);
  };
  return (
    <Form form={form} onValuesChange={onValuesChange} onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: '请输入你的邮箱或手机号！' },
          {
            pattern: emailPhonePattern,
            message: '请输入正确的手机或邮箱！',
          },
        ]}
      >
        <Input
          className={utilStyle.input}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item>
        <Button
          disabled={disabled}
          type="primary"
          htmlType="submit"
          className={utilStyle.input}
          block
        >
          发送验证码
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Result;
