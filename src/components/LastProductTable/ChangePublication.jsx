import React from 'react'
import { HiEye } from 'react-icons/hi';
import Modal from '../common/Modal';

const ChangePublication = () => {



    const Trigger = () => (
        <button className="cursor-pointer text-xl text-blue-600">
          <HiEye className="text-xl" />
        </button>
      );





  return (
      
          <Modal title="Publication Status" Trigger={<Trigger/>} ></Modal>
  )
}

export default ChangePublication