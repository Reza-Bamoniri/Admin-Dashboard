import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi';

const RemoveProductIcon = () => {



    const Trigger = () => {
       return <button className="cursor-pointer text-xl text-red-500">
               <HiOutlineTrash className="text-xl" />
              </button>
      };




  return (
    <div>RemoveProductIcon</div>
  )
}

export default RemoveProductIcon