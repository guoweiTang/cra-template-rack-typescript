import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import utilStyle from '../assets/util.module.scss';
import { LockOutlined } from '@ant-design/icons';
import { passwordPattern } from '../../../config';

interface Props {
  count: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Reset: React.FC<Props> = ({ setCurrent, setCount, count }) => {
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
  // 登录成功跳转
  const onFinish = () => {
    setCurrent(3);
    setTimeout(() => {
      const tempCount = count - 1;
      setCount(tempCount);
    }, 1000);
  };
  return (
    <Form form={form} onValuesChange={onValuesChange} onFinish={onFinish}>
      <Form.Item
        name="code"
        rules={[
          { required: true, message: '请输入你的密码！' },
          {
            pattern: passwordPattern,
            message: '密码至少含字母、数字两种类型的大于6位的字符串！',
          },
        ]}
      >
        <Input.Password
          className={utilStyle.input}
          prefix={<LockOutlined className="site-form-item-icon" />}
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
          重置密码
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Reset;
