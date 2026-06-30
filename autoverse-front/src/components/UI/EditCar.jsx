import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Modal } from "antd";
import { useDispatch } from "react-redux";
import {  editCar } from "../../JS/Actions/carActions";
import { useParams } from "react-router-dom";
const { TextArea } = Input;

const EditCar = () => {
  const {id} = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newData, setNewData] = useState({});

  const dispatch = useDispatch();

  const handleChange = (eOrValue, name) => {
    if (typeof eOrValue === "object" && eOrValue?.target) {
      // For regular Input and TextArea
      const { name, value } = eOrValue.target;
      setNewData((prev) => ({ ...prev, [name]: value }));
    } else {
      // For InputNumber (value is passed directly)
      setNewData((prev) => ({ ...prev, [name]: eOrValue }));
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    dispatch(editCar(id, newData));
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button color="default" variant="solid" onClick={showModal}>
        Edit Car
      </Button>
      <Modal
        title="Editing Car"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="Make">
            <Input name="make" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Model">
            <Input name="model" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Year">
            <InputNumber onChange={(value) => handleChange(value, "year")} />
          </Form.Item>
          <Form.Item label="Color">
            <Input name="color" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Price">
            <InputNumber onChange={(value) => handleChange(value, "price")} />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea rows={4} name="description" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Image URL">
            <Input name="image" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Autonomy">
            <InputNumber
              onChange={(value) => handleChange(value, "autonomy")}
            />
          </Form.Item>
          <Form.Item label="Charging Time">
            <InputNumber
              onChange={(value) => handleChange(value, "chargingTime")}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditCar;
