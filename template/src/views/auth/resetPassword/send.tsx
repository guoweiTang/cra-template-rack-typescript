import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import utilStyle from '../assets/util.module.scss';

interface Props {
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const Code: React.FC<Props> = ({ setCurrent }) => {
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
  // 确认验证码
  const onFinish = () => {
    setCurrent(2);
  };
  return (
    <Form form={form} onValuesChange={onValuesChange} onFinish={onFinish}>
      <Form.Item
        name="code"
        rules={[
          { required: true, message: '请输入验证码！' },
          { pattern: /^\d{4}$/, message: '请输入4位数字验证码！' },
        ]}
      >
        <Input className={utilStyle.input} placeholder="code" />
      </Form.Item>
      <Form.Item>
        <Button
          disabled={disabled}
          type="primary"
          htmlType="submit"
          className={utilStyle.input}
          block
        >
          验证
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Code;
