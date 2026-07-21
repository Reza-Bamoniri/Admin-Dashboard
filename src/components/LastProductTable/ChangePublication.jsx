import React from 'react'
import { HiEye } from 'react-icons/hi';
import Modal from '../common/Modal';

const ChangePublication = ({product, handlePublication}) => {



    const Trigger = () => (
        <button className="cursor-pointer text-xl text-blue-600">
          <HiEye className="text-xl" />
        </button>
      );





  return (
      
     <Modal title="Publication Status" Trigger={<Trigger/>} onSubmit={()=>{handlePublication(product.id)}} >
      <div className="flex items-center justify-center">
        <p>
           Are you sure you want to  
          <span
            className={product.isPublished ? "text-blue-500" : "text-green-500"}>
            
            <strong>{product.isPublished ? " Private " : " Public "}</strong>
          </span>
         this item ?
        </p>
      </div>
     </Modal>
  )
}

export default ChangePublication