import { Button } from 'antd'
import React from 'react'
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { useDispatch } from 'react-redux';
import { deleteCarById } from '../../JS/Actions/carActions';
import { useNavigate } from 'react-router-dom';
const { confirm } = Modal;




const DeleteCar = ({id}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const showDeleteConfirm = () => {
      confirm({
        title: "Are you sure delete this car?",
        icon: <ExclamationCircleFilled />,
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          dispatch(deleteCarById(id, navigate));
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    };
  return (
    <div>
      <Button onClick={showDeleteConfirm} color="danger" variant="outlined">
        Delete
      </Button>
    </div>
  );
}

export default DeleteCar