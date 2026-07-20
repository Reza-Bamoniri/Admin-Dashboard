import React from 'react'
import Modal from '../common/Modal';
import { BiEdit } from 'react-icons/bi';

const EditProductIcon = () => {


    const Trigger = () => (
    <button className="cursor-pointer text-xl text-green-800">
      <BiEdit className="text-xl" />
    </button>
  );




  return (
    <Modal title="Edit Product Details" Trigger={<Trigger/>} ></Modal>
  )
}

export default EditProductIcon