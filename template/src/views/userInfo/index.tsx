import React, { useState } from 'react';
import {
  Card,
  Col,
  Form,
  PageHeader,
  Row,
  Input,
  Typography,
  Divider,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, updateName } from '../../store/userSlice';
import { updateMyInfo } from '../service';
import utilStyle from './index.module.scss';

const { Text } = Typography;
const UserInfoModal = () => {
  const user = useSelector(selectUser);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [tempName, setTempName] = useState<string>('');

  const dispatch = useDispatch();

  const handleShowNameInput = () => {
    setIsEdit(true);
    setTempName(user.name);
  };
  const handleChangeNameInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTempName(e.target.value);
  };
  const handleConfirmName = async () => {
    // 如果不为空设置新的实验室名称
    const result = tempName.trim();
    if (result) {
      try {
        await updateMyInfo({
          name: result,
        });
        dispatch(updateName(result));
        // console.log('确认修改名字');
      } catch (err) {
        console.log('修改名字失败！');
      }
    } else {
    }
    setIsEdit(false);
  };

  return (
    <Card>
      <PageHeader title={`我的账户`} />
      <Form
        colon={false}
        labelCol={{
          span: 3,
        }}
        labelAlign="left"
      >
        <Row justify="center">
          <Col span={11}>
            <Form.Item label="邮箱">
              <Text strong>{user.email}</Text>
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item label="姓名">
              {isEdit ? (
                <Input
                  defaultValue={tempName}
                  onChange={handleChangeNameInput}
                  onBlur={handleConfirmName}
                />
              ) : (
                <Text strong>
                  <span
                    className={utilStyle.editable}
                    onClick={handleShowNameInput}
                  >
                    {user.name}
                  </span>
                </Text>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={11}>
            <Form.Item label="实验室">
              <Text strong>{user.lab?.name}</Text>
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item label="角色">
              <Text strong>{user.role}</Text>
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={11} offset={1}>
            <Form.Item label="状态">
              <Text strong>{user.is_active ? '在用' : '弃用'}</Text>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11} offset={1}>
            <Form.Item label="可管理分析工具" labelCol={{ span: 6 }}>
              <Text strong>{user.can_manage_ana_tools ? '是' : '否'}</Text>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default UserInfoModal;
