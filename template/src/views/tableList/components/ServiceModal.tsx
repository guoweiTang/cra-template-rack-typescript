import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { addService, updateService } from '../../service';

interface ServiceModalItem {
  values?: {
    id?: string;
    title?: string;
    version?: string;
  };
  visible: boolean;
  onCancel: Function;
  onSuccess: Function;
}

const ServiceModal: React.FC<ServiceModalItem> = ({
  onCancel,
  onSuccess,
  visible,
  values,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (visible) {
      form.setFieldsValue({
        title: values?.title,
        version: values?.version,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <Modal
      visible={visible}
      maskClosable={false}
      closable={false}
      title="add/edit"
      okText="save"
      cancelText="cancel"
      onCancel={() => {
        onCancel();
      }}
      onOk={async () => {
        try {
          const queryParams = await form.validateFields();
          let res;
          const pathParams = {
            serviceId: values?.id || '',
          };
          if (pathParams.serviceId) {
            res = await updateService(pathParams, queryParams);
          } else {
            res = await addService(queryParams);
          }
          if (res.status === 200) {
            onSuccess(res.data);
          }
        } catch (info) {
          console.log('Validate Failed:', info);
        }
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={values}
      >
        <Form.Item
          name="title"
          label="projectName"
          rules={[
            { required: true, message: 'Please input the project name!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="version"
          label="version"
          rules={[
            {
              required: true,
              message: 'Please input the version!',
            },
          ]}
        >
          <Input placeholder="0.0.1" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
ServiceModal.propTypes = {
  values: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      version: PropTypes.number,
    }),
    PropTypes.object,
  ]),
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};
export default ServiceModal;
