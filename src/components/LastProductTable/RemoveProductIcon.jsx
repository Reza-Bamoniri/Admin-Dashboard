import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi';
import Modal from '../common/Modal';

const RemoveProductIcon = () => {



    const Trigger = () => {
       return <button className="cursor-pointer text-xl text-pink-500">
               <HiOutlineTrash className="text-xl" />
              </button>
      };




  return (
    <Modal title="Delete Product" Trigger={<Trigger/>} ></Modal>
  )
}

export default RemoveProductIcon