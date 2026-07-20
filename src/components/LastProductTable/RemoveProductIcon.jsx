import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi';
import Modal from '../common/Modal';

const RemoveProductIcon = ({product, handleRemove}) => {



    const Trigger = () => {
       return <button className="cursor-pointer text-xl text-pink-500">
               <HiOutlineTrash className="text-xl" />
              </button>
      };




  return (
    <Modal title="Delete Product" Trigger={<Trigger/>} onSubmit={() => handleRemove(product.id)} >
      <div className="flex items-center justify-center">
       Are you sure you want to delete
        <kbd className="px-2 py-1 rounded-md bg-red-500/15 font-black! text-red-500">
          {product.title}
        </kbd>
        ?
      </div>
    </Modal>
  )
}

export default RemoveProductIcon