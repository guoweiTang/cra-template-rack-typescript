import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Card, Button, Popconfirm, Row, Col } from 'antd';
import { ServiceItem } from './data';
import { getRandomName } from '../../utils';
import { reName, addAge, selectUser } from '../../store/userSlice';
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import ServiceModal from './components/ServiceModal';
import { getAllServices, deleteService } from '../service';

const ServiceList = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [isLoading] = useState(false);
  const [data, setData] = useState<ServiceItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(12);
  const [isShowModal, setIsShowModal] = useState(false);
  const [formValue, setFormValue] = useState({});

  const init = async ({ current = 1, page_size = pageSize } = {}) => {
    const res = await getAllServices({
      current,
      page_size,
    });
    // console.log(res.data);
    if (res.status === 200) {
      setCurrentPage(current);
      setTotal(res.data.count);
      setPageSize(page_size);
      setData(res.data.results);
    }
  };
  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  /**
   * 项目弹窗关闭回调函数
   */
  const handleServiceCancel = () => {
    setIsShowModal(false);
    setFormValue({});
  };
  const handleShowDelete = (index: number, isShow: boolean) => {
    const tempData = [...data];
    tempData[index].isShowDelete = isShow;
    setData(tempData);
  };

  return (
    <>
      <Row
        wrap={false}
        style={{
          background: 'rgba(190, 190, 190, 0.2)',
          padding: 10,
          lineHeight: '32px',
        }}
      >
        <Col
          flex="130px"
          style={{
            fontWeight: 'bold',
            fontSize: 14,
          }}
        >
          Redux User Info：
        </Col>
        <Col flex="130px">name：{user.name}</Col>
        <Col flex="130px">age：{user.age}</Col>
        <Col flex="250px">
          <Button
            className="brothers-button"
            onClick={() => {
              dispatch(addAge());
            }}
          >
            age increase
          </Button>
          <Button
            className="brothers-button"
            onClick={() => {
              dispatch(reName(getRandomName()));
            }}
          >
            rename
          </Button>
        </Col>
      </Row>
      {/* service */}
      <Button
        type="primary"
        className="brothers-button"
        style={{
          margin: '30px 0 10px',
        }}
        onClick={() => {
          setIsShowModal(true);
        }}
      >
        create project
      </Button>
      {/* API详细信息 */}
      <List
        pagination={{
          current: currentPage,
          total: total,
          pageSize: pageSize,
          showSizeChanger: false,
          onChange: (current) => {
            init({ current });
          },
        }}
        grid={{
          gutter: 16,
          column: 3,
        }}
        dataSource={data || []}
        renderItem={(item, i) => (
          <List.Item>
            <Card
              hoverable
              title={item.title}
              actions={[
                <EditOutlined
                  key="edit"
                  onClick={() => {
                    setFormValue(item);
                    setIsShowModal(true);
                  }}
                />,
                <SettingOutlined
                  key="setting"
                  onClick={() => {
                    console.log('read details');
                  }}
                />,
                <Popconfirm
                  title="Are you sure to delete this service?"
                  visible={item.isShowDelete}
                  onConfirm={async () => {
                    const data = await deleteService({
                      serviceId: item.id,
                    });
                    if (data.status === 200) {
                      handleShowDelete(i, false);
                      init();
                    }
                  }}
                  onCancel={() => {
                    handleShowDelete(i, false);
                  }}
                >
                  <DeleteOutlined
                    key="delete"
                    onClick={() => {
                      handleShowDelete(i, true);
                    }}
                  />
                </Popconfirm>,
              ]}
            >
              {item.version}
            </Card>
          </List.Item>
        )}
      />
      {/* 新增/编辑service */}
      <ServiceModal
        onSuccess={() => {
          handleServiceCancel();
          init();
        }}
        onCancel={handleServiceCancel}
        visible={isShowModal}
        values={formValue}
      />
    </>
  );
};

export default ServiceList;
