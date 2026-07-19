import React from 'react'
import { BiBell } from 'react-icons/bi'

const Notification = () => {
  return (
    <button className="flex size-10 border primary-border-color rounded-full items-center justify-center cursor-pointer hover:text-white hover:bg-blue-600">
          <BiBell className="text-[21px]" />
        </button>
  )
}

export default Notification